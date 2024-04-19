import pkg from 'pg';
const { Pool } = pkg;
import { config } from 'dotenv';
config();


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
