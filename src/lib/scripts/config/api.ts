import pkg from 'pg';
const { Pool } = pkg;
import { config } from 'dotenv';
config();

interface API {
  get: (route: string, headers?: Record<string, string>) => Promise<any>
  post: (route: string, body: Record<string, unknown>, headers?: Record<string, string>) => Promise<any>
  put: (route: string, body: Record<string, unknown>, headers?: Record<string, string>) => void
  delete: (route: string, body: Record<string, unknown>, headers?: Record<string, string>) => void
}


export let client: any;

export const initPool = async () => {
  const pool = new Pool({
    user: process.env.VITE_PG_USER,
    host: process.env.VITE_PG_HOST,
    database: process.env.VITE_PG_DB,
    password: process.env.VITE_PG_PASSWORD,
    port: Number(process.env.VITE_PG_PORT),
  });

  client = await pool.connect();
};

export const Res = async (res: any): Promise<Response> => {
  if (res === 500) {
    return new Response(JSON.stringify({ error: 'Internal Server Error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  } else {
    return new Response(JSON.stringify(res), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  }
};

export const api: API = {
  get: async (route: string, headers?: Record<string, string>) => {
    const res = await fetch(route);
    return await res.json();
  },
  post: async (route: string, body: Record<string, unknown>, headers?: Record<string, string>) => {
    const res = await fetch(route, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        ...headers
      },
      body: JSON.stringify(body)
    });
    return await res.json();
  },
  put: async (route: string, body: Record<string, unknown>, headers?: Record<string, string>) => {
    await fetch(route, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        ...headers
      },
      body: JSON.stringify(body)
    });
  },
  delete: async (route: string, body: Record<string, unknown>, headers?: Record<string, string>) => {
    await fetch(route, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        ...headers
      },
      body: JSON.stringify(body)
    });
  },
};
