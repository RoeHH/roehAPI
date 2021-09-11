import { Application } from "https://deno.land/x/abc@v1.3.1/mod.ts";

const app = new Application();

import * as DB from "./db.ts";

const PORT = 8080;

console.log("Listening on Port: 8080");
console.log("http://localhost:8080/");

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
