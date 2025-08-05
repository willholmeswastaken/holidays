import { httpRouter } from "convex/server";
import { httpAction } from "./_generated/server";
import { api, internal } from "./_generated/api";
import { Id } from "./_generated/dataModel";

const http = httpRouter();

http.route({
  path: "/holidays/image",
  method: "POST",
  handler: httpAction(async (ctx, request) => {
    console.log("Got image request");
    const blob = await request.blob();
    console.log("Got blob");
    const holidayId = request.headers.get("x-holiday-id");
    console.log("Got holidayId");
    await ctx.runQuery(api.holidays.getById, { id: holidayId });
    console.log("Got holiday");
    const storageId = await ctx.storage.store(blob);
    console.log("Got storageId");
    await ctx.runMutation(internal.holidays.addImage, {
      storageId,
      holidayId: holidayId as Id<"holidays">,
    });
    console.log("Added image");
    return new Response(null, {
      status: 200,
      headers: new Headers({
        "Access-Control-Allow-Origin": "http://localhost:3000",
        Vary: "origin",
      }),
    });
  }),
});

http.route({
  path: "/holidays/image",
  method: "OPTIONS",
  handler: httpAction(async (_, request) => {
    // Make sure the necessary headers are present
    // for this to be a valid pre-flight request
    const headers = request.headers;
    if (
      headers.get("Origin") !== null &&
      headers.get("Access-Control-Request-Method") !== null &&
      headers.get("Access-Control-Request-Headers") !== null
    ) {
      return new Response(null, {
        headers: new Headers({
          // e.g. https://mywebsite.com, configured on your Convex dashboard
          "Access-Control-Allow-Origin": "http://localhost:3000",
          "Access-Control-Allow-Methods": "POST",
          "Access-Control-Allow-Headers":
            "Content-Type, x-holiday-id, Authorization",
          "Access-Control-Max-Age": "86400",
        }),
      });
    } else {
      return new Response();
    }
  }),
});

export default http;
