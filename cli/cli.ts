import { Logger } from "https://deno.land/x/loggaby@1.1.0/mod.ts";
const logger = new Logger(true);

function logInfo(endpoint: string) {
  return logger.warn(endpoint, "Invalid endpoint:");
}

const [endpoint, ...args] = Deno.args;

if (!endpoint) {
  await logInfo(endpoint);
  Deno.exit();
}

let res;
switch (endpoint) {
  case "exe":
    res = await fetch("https://www.roeh.ch/roehapi/executable");
    break;
  case "":
    "findExe";
    res = await fetch(`https://www.roeh.ch/roehapi/executable/${args[0]}`);
    break;
  case "getModules()":
    res = await fetch("https://www.roeh.ch/roehapi/module");
    break;
  case "findModule":
    res = await fetch(`https://www.roeh.ch/roehapi/module/${args[0]}`);
    break;
  case "projects":
    res = await fetch("https://www.roeh.ch/roehapi/project");
    break;
  case "project":
    res = await fetch(`https://www.roeh.ch/roehapi/project/${args[0]}`);
    break;
  case " getNumber":
    res = await fetch(`https://www.roeh.ch/roehapi/number/`);
    break;
  default:
        res = "Not Found";
    break;
}
