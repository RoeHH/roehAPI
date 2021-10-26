import { parse } from "https://deno.land/std@0.100.0/flags/mod.ts";
import { Application } from "https://deno.land/x/abc@v1.3.1/mod.ts";
import * as DB from "./db.ts";
import { testWodbeOrderCreate } from "../sandbox/wordbeetest.ts";

const app = new Application();

const { args } = Deno;
const DEFAULT_PORT = 8080;
const argPort = parse(args).port;
const PORT = argPort ? Number(argPort) : DEFAULT_PORT;

console.log(PORT);


console.log(`Listening on Port: ${PORT}`);
console.log(`http://localhost:${PORT}/`);

app
  .get(
    "/",
    () =>
      "https://secret-ocean-93187.herokuapp.com/executable\nhttps://secret-ocean-93187.herokuapp.com/project\nhttps://secret-ocean-93187.herokuapp.com/module\nhttps://secret-ocean-93187.herokuapp.com/number"
  )
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
  .get("/number", async () => {
    let number = 0;
    for (const project of await DB.getProjectsFromDB()) {
      if (project.number > number) {
        number = project.number;
      }
    }
    return number + 1;
  })
  .(^/wordbeetest/:apiKey",testWodbeOrderCreate(c))
  .start({ port: PORT });
