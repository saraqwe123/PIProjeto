import dotenv from 'dotenv'
import { drizzle } from 'drizzle-orm/node-postgres';
import pkg from 'pg';
const { Pool } = pkg;
import { cliente, conta, transferencia, tipocaixinha, caixinha, histrendcaixinha, histtranscaixinha, acao, histrendacao, histtransfacao } from './schema/schema.js'; 

dotenv.config()

const pool = new Pool({
  connectionString: process.env.CONNECTION_STRING,
  ssl: { rejectUnauthorized: false },
  max: 20,
  idleTimeoutMillis: 30000,
});

export const db = drizzle(pool, { schema: { cliente, conta, transferencia, tipocaixinha, caixinha, histrendcaixinha, histtranscaixinha, acao, histrendacao, histtransfacao }});