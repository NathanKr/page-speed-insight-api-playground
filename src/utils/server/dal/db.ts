import { MongoClient } from 'mongodb';

const DB_URI = process.env.MONGODB_URI!
export const DB_NAME = process.env.DB_NAME;

let cachedClient: MongoClient;

export default async function connectDB() {
  if (cachedClient) {
    return cachedClient;
  }

  const client = new MongoClient(DB_URI);

  try {
    await client.connect();
    cachedClient = client;
    return client;
  } catch (err) {
    throw new Error(`Error connecting to the database: ${err}`);
  }
}