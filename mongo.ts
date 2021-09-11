import { MongoDenoExecutable } from "https://www.roeh.ch/x/roehMongo.ts";

export async function getExecutable(): Promise<denoExecutable[]> {
  const exes = await MongoDenoExecutable.find(undefined, {
    noCursorTimeout: false,
  } as any).toArray();
  return exes;
}
