import { Res } from '$lib/scripts/config/api';
import { client } from '$lib/scripts/config/pool.server';
import type { RequestHandler } from '@sveltejs/kit';


export const GET: RequestHandler = async () => {
  try {
    const res = await client.query('SELECT * FROM challenges');
    return Res({ body: res.rows });
  } catch (error) {
    console.error(error);
    return Res(500);
  }
};
