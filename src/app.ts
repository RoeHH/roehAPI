import { parse } from "https://deno.land/std@0.100.0/flags/mod.ts";
import { Application } from "https://deno.land/x/abc@v1.3.1/mod.ts";
import * as DB from "./db.ts";

const app = new Application();

const { args } = Deno;
const DEFAULT_PORT = 8080;
const argPort = parse(args).port;

const PORT = argPort ? Number(argPort) : DEFAULT_PORT;

console.log(`Listening on Port: ${PORT}`);
console.log(`http://localhost:${PORT}/`);

app
  .get("/executable", () => DB.getExecutablesFromDB())
  .get("/executable/:executableName", (c) => {
    const { executableName } = c.params;
    return DB.getExecutableFromDB(executableName);
  })
  .get("/module", () => DB.getModulesFromDB())
  .get("/module/:moduleName", (c) => {
    const { moduleName } = c.params;
    console.log(moduleName);

    return DB.getModuleFromDB(moduleName);
  })
  .get("/project", () => DB.getProjectsFromDB())
  .get("/project/:appName", (c) => {
    const { appName } = c.params;
    return DB.getProjectFromDB(appName);
  })
  .start({ port: PORT });
