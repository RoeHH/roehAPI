import * as Mongo from "./mongo.ts";

const m = await Mongo.getExecutables();

function handleRequest() {
      // Use stringify function to convert javascript object to JSON string.

      const json = JSON.stringify({
        message: m,
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