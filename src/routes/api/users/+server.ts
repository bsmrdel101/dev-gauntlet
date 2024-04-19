import { Res } from '$lib/scripts/config/api';
import type { RequestHandler } from '@sveltejs/kit';


export const GET: RequestHandler = async () => {
  try {
    const res = await [];
    return Res(res);
  } catch (error) {
    console.error(error);
    return Res(500);
  }
};
