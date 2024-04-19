import pkg from 'pg';
const { Pool } = pkg;
import { config } from 'dotenv';
config();


const pool = new Pool({
  user: process.env.PG_USER,
  host: process.env.PG_HOST,
  database: process.env.PG_DB,
  password: process.env.PG_PASSWORD,
  port: Number(process.env.PG_PORT)
});

export let client = await pool.connect();
