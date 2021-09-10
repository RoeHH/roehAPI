import { getExecutable } from "./mongo.ts";

async function handleRequest() {
  const msg = await getExecutable();
  const json = JSON.stringify({
    message: msg.toString(),
  });

  return new Response(json, {
    headers: {
      "content-type": "application/json; charset=UTF-8",
    },
  });
}

addEventListener("fetch", (event) => {
  event.respondWith(handleRequest(event.request));
});