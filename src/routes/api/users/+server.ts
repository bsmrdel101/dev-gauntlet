import type { RequestHandler } from '@sveltejs/kit';
import { prisma } from '$lib/scripts/config/prisma';

export const GET: RequestHandler = async (event) => {
  try {
    const res = await prisma.user.findMany();
    console.log(res);
    return new Response(JSON.stringify(res), {
      status: 200,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ error: 'Internal Server Error' }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }
};
