import { MongoDenoExecutable } from "https://gitlab.wuersch.org/iccee0/roeh-cli/-/raw/master/mongo.ts";

export async function getExecutables() {
  const arr = await MongoDenoExecutable.find(undefined, {
    noCursorTimeout: false,
  } as any).toArray();
  return arr;
}

export async function findeProject(commandName: string) {
  return await MongoDenoExecutable.findOne({ executableName: commandName }, {
    noCursorTimeout: false,
  } as any);
}
