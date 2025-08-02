import { preloadQuery } from "convex/nextjs";
import { FunctionReference } from "convex/server";
import { auth } from "@clerk/nextjs/server";

/**
 * Utility function to preload a Convex query with authentication token
 * @param query - The Convex query function reference
 * @param args - Arguments to pass to the query
 * @returns Preloaded query result
 */
export async function preloadAuthQuery<T extends FunctionReference<"query">>(
  query: T,
  args?: any
) {
  return await preloadQuery(query, args, { token: await getAuthToken() });
}

async function getAuthToken() {
  return (await (await auth()).getToken({ template: "convex" })) ?? undefined;
}
