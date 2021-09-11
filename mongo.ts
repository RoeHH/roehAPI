import { MongoDenoExecutable, denoExecutable } from "https://www.roeh.ch/x/roehMongo.ts";

export async function getExecutable(): Promise<denoExecutable[]> {
  return await MongoDenoExecutable.find(undefined, {
    noCursorTimeout: false,
  }as any).toArray();

}
