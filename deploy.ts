import { MongoProject, MongoDenoExecutable, MongoDenoModule } from "https://www.roeh.ch/x/roehMongo";

addEventListener("fetch", (event) => {
  const x = MongoDenoExecutable.find();
  const response = new Response(x, {
    headers: { "content-type": "application/json" },
  });
  event.respondWith(response);
});
