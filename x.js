import { MongoProject, MongoDenoExecutable, MongoDenoModule } from "https://www.roeh.ch/x/roehMongo";

function handleRequest(request) {
      // Use stringify function to convert javascript object to JSON string.

      const json = JSON.stringify({
        message: MongoDenoExecutable.find(),
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