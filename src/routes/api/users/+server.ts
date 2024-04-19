import { Res } from '$lib/scripts/config/api';
import type { RequestHandler } from '@sveltejs/kit';
import pkg from 'pg';
const { Pool } = pkg;


export const GET: RequestHandler = async () => {
  try {
    const pool = new Pool({
      user: 'postgres',
      host: 'localhost',
      database: 'dev-gauntlet',
      password: 'db',
      port: 2000
    });

    const client = await pool.connect();
    const res = await client.query('SELECT * FROM users');
    client.release();
    return Res(res.rows);
  } catch (error) {
    console.error(error);
    return Res(500);
  }
};
