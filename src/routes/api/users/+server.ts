import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

export const GET: RequestHandler = async (event) => {
  const body = await event.request.formData();
  console.log([...body]);
  return json({ body });
};
