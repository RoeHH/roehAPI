addEventListener("fetch", (event) => {
  const response = new Response("Hello World!", {
    headers: { "content-type": "text/plain" },
  });
  event.respondWith(response);
});

import { getExecutable } from "./mongo.ts";
/*
async function handleRequest() {
  //const denoExecutabel = await getExecutable();
  const json = "hallo"//JSON.stringify(denoExecutabel);

  return new Response(json, {
    headers: {
      "content-type": "application/json; charset=UTF-8",
    },
  });
}

addEventListener("fetch", (event) => {
  event.respondWith(handleRequest());
});
*/