import { MongoProject, MongoDenoExecutable, MongoDenoModule } from "https://www.roeh.ch/x/roehMongo";

let m = MongoDenoExecutable.find();

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