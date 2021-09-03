import { MongoDenoExecutable } from "https://gitlab.wuersch.org/iccee0/roeh-cli/-/raw/master/mongo.ts";

const arr = await MongoDenoExecutable.find(undefined, {
    noCursorTimeout: false,
  }).toArray();

function handleRequest() {
      // Use stringify function to convert javascript object to JSON string.

      const json = JSON.stringify({
        message: arr,
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