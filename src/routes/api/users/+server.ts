import { Res, client } from '$lib/scripts/config/api';
import type { RequestHandler } from '@sveltejs/kit';
import { initPool } from "$lib/scripts/config/api";
initPool();


export const GET: RequestHandler = async () => {
  try {
    const res = await client.query('SELECT * FROM users');
    return Res(res.rows);
  } catch (error) {
    console.error(error);
    return Res(500);
  }
};
