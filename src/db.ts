import { MongoDenoExecutable } from "https://www.roeh.ch/x/roehMongo.ts";

export async function getExecutablesFromDB() {
  return await MongoDenoExecutable.find(undefined, {
    noCursorTimeout: false,
  } as any).toArray();
}
