// pages/api/data.ts
import { NextApiRequest, NextApiResponse } from 'next';
import { openDb } from '../../database';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const db = await openDb();

  const data = await db.all('SELECT * FROM dojo');
  res.status(200).json(data);
}
