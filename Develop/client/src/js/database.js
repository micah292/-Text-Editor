import { MongoClient } from 'mongodb';

const uri = 'mongodb://localhost:27017';
const dbName = 'myDb';
const collectionName = 'myCollection';

export const putDb = async (content) => {
  const client = new MongoClient(uri, { useUnifiedTopology: true });
  await client.connect();
  const db = client.db(dbName);
  const collection = db.collection(collectionName);
  await collection.insertOne({ content });
  await client.close();
};

export const getDb = async () => {
  const client = new MongoClient(uri, { useUnifiedTopology: true });
  await client.connect();
  const db = client.db(dbName);
  const collection = db.collection(collectionName);
  const result = await collection.find({}).toArray();
  await client.close();
  return result.map((item) => item.content);
};