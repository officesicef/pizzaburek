import jwt, { JwtPayload } from 'jsonwebtoken';

import config from '@/config';

const verifyToken = async (token: string): Promise<string | JwtPayload> =>
  jwt.verify(token, config.secret);

const signToken = (data: Record<string, unknown>): string =>
  jwt.sign(data, config.secret, {});

export default { verifyToken, signToken };
