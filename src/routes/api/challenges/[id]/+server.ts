import { Res } from '$lib/scripts/config/api';
import { client } from '$lib/scripts/config/pool.server';
import type { RequestHandler } from '@sveltejs/kit';


export const GET: RequestHandler<any> = async ({ params }) => {
  try {
    const { id } = params;
    const res = await client.query(`
      SELECT * FROM challenges
      WHERE id = $1;
    `, [id]);
    return Res({ body: res.rows[0] });
  } catch (error) {
    console.error(error);
    return Res(500);
  }
};