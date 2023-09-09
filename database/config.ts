import { createPool, PoolConfig, Pool } from "mysql";
import "dotenv/config";

const config: PoolConfig = {
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT) || 3306,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
};

const pool: Pool = createPool(config);

export default pool;
