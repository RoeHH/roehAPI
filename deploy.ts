import * as Mongo from "./mongo.ts";

addEventListener("fetch", (event) => {
  const response = new Response(Mongo.getExecutable(), {
    headers: { "content-type": "application/json" },
  });
  event.respondWith(response);
});
