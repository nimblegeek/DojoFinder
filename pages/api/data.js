// pages/api/data.js
const { openDb } = require('../../database');

export default async function handler(req, res) {
  const db = await openDb();

  const data = await db.all('SELECT * FROM dojo');
  res.status(200).json(data);
}
