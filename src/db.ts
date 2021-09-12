// deno-lint-ignore-file
import { MongoProject, MongoDenoModule,MongoDenoExecutable } from "https://www.roeh.ch/x/roehMongo.ts";

export async function getExecutablesFromDB() {
  return await MongoDenoExecutable.find(undefined, {
    noCursorTimeout: false,
  } as any).toArray();
}

export async function getExecutableFromDB(executableName: string) {
  return await MongoDenoExecutable.findOne({ executableName: executableName }, {
    noCursorTimeout: false,
  } as any);
}

export async function getModulesFromDB() {
  return await MongoDenoModule.find(undefined, {
    noCursorTimeout: false,
  } as any).toArray();
}

export async function getModuleFromDB(moduleName: string) {
  return await MongoDenoModule.findOne({ moduleName: moduleName }, {
    noCursorTimeout: false,
  } as any);
}

export async function getProjectsFromDB() {
  return await MongoProject.find(undefined, {
    noCursorTimeout: false,
  } as any).toArray();
}

export async function getProjectFromDB(appName: string) {
  return await MongoProject.findOne({ appName: appName }, {
    noCursorTimeout: false,
  } as any);
}