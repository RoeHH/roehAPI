import { handleRequest } from "./deploy.ts";

addEventListener("fetch", (event) => {
    event.respondWith(handleRequest(event.request));
  });