import { Res } from '$lib/scripts/config/api';
import { client } from '$lib/scripts/config/pool.server';
import jwt from 'jsonwebtoken';
import { RequestHandler } from '@sveltejs/kit';
import bcrypt from 'bcrypt';
import { config } from 'dotenv';
config();


export const POST: RequestHandler = async (req: any) => {
  const reader = req.request.body.getReader();
  let result = await reader.read();
  let chunks = [];
  while (!result.done) {
    chunks.push(result.value);
    result = await reader.read();
  }
  const body = Buffer.concat(chunks).toString('utf-8');

  const { username, password } = JSON.parse(body);
  const hashedPassword = await bcrypt.hash(password, 10);
  const user = await client.query('SELECT * FROM users WHERE username = $1', [username]);
  
  if (user.rows.length > 0) {
    const match = await bcrypt.compare(password, user.rows[0].password);
    if (match) {      
      const token = jwt.sign({ id: user.rows[0].id }, process.env.SECRET_KEY as string);
      return Res({
        headers: {
          'Set-Cookie': `token=${token}; HttpOnly; SameSite=Lax; Path=/;`,
        }
      });
    } else {
      return Res({ status: 401, error: 'Invalid user credentials' });
    }
  } else {
    return Res({ status: 401, error: 'User not found' });
  }
};

export const GET: RequestHandler = async (req: any) => {
  try {
    const token = req.cookies.get('token');
    if (!token) return Res({ body: [] });
    const data: any = jwt.verify(token, process.env.SECRET_KEY as string);
    const res = await client.query('SELECT * FROM users WHERE id = $1', [data.id]);
    const { password, ...userWithoutPassword } = res.rows[0];
    return Res({ body: userWithoutPassword });
  } catch (err) {
    console.error(err);
    return Res({ status: 500 });
  }
};
