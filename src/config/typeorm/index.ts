import { ConnectionOptions } from '.pnpm/typeorm@0.2.45/node_modules/typeorm';
import 'dotenv/config';

const { DB_HOST, DB_PORT, DB_USER, DB_PASS, DB_NAME, NODE_ENV } = process.env;

const config: Record<string, any> = {
  development: {
    type: 'postgres',
    host: DB_HOST,
    port: Number(DB_PORT),
    username: DB_USER,
    password: DB_PASS,
    database: DB_NAME,
  },
};

export const getTypeOrmConfig = (): ConnectionOptions =>
  config[NODE_ENV || 'development'];
