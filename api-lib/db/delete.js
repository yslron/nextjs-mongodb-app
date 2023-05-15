/* eslint-disable prettier/prettier */
import { ObjectId } from 'mongodb';

export async function deletePostById(db, id) {
  const result = await db.collection('posts').deleteOne({ _id: new ObjectId(id) });
  return result.deletedCount > 0;
}