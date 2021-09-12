export async function getExes() {
  const res = await fetch("https://www.roeh.ch/roehapi/executable");
  return JSON.parse(await res.text());
}

export async function findExe(commandName: string) {
  const res = await fetch(
    `https://www.roeh.ch/roehapi/executable/${commandName}`
  );
  return JSON.parse(await res.text());
}

export async function getModules() {
  const res = await fetch("https://www.roeh.ch/roehapi/module");
  return JSON.parse(await res.text());
}

export async function findModule(moduleName: string) {
  const res = await fetch(`https://www.roeh.ch/roehapi/module/${moduleName}`);
  return JSON.parse(await res.text());
}

export async function getProjects() {
  const res = await fetch("https://www.roeh.ch/roehapi/project");
  return JSON.parse(await res.text());
}

export async function findProject(projectName: string) {
  const res = await fetch(
    `https://www.roeh.ch/roehapi/project/${projectName}`
  );
  return JSON.parse(await res.text());
}

export async function getNumber() {
  const res = await fetch(`https://www.roeh.ch/roehapi/number/`);
  return JSON.parse(await res.text());
}