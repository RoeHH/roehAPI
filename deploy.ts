import { MongoProject, MongoDenoExecutable, MongoDenoModule } from "https://www.roeh.ch/x/roehMongo";

export function handleRequest(request: { url: string; }) {
  const { pathname } = new URL(request.url);

  // Respond with JSON
  if (pathname.startsWith("/json")) {
    // Use stringify function to convert javascript object to JSON string.
    const json = JSON.stringify({
      message: "Hello from Deno Deploy",
    });

    return new Response(json, {
      headers: {
        "content-type": "application/json; charset=UTF-8",
      },
    });
  }
}
