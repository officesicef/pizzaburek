import dotenv from 'dotenv';
import { Secret } from 'jsonwebtoken';

dotenv.config({ path: '.env' });

interface IConfig {
  connectionString: string;
  environment: string;
  port: string | number;
  secret: Secret;
}

const config: IConfig = {
  connectionString: process.env.CONNECTION_STRING || '',
  environment: process.env.ENVIRONMENT || 'development',
  port: process.env.SERVER_PORT || 5555,
  secret: process.env.ACCESS_TOKEN_SECRET || '',
};

export default config;
