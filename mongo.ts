import { MongoDenoExecutable, denoExecutable } from "https://gitlab.wuersch.org/iccee0/roeh-cli/-/raw/main/mongo.ts";

export async function getExecutable(): Promise<denoExecutable[]> {
  return await MongoDenoExecutable.find(undefined, {
    noCursorTimeout: false,
  }as any).toArray();

}
