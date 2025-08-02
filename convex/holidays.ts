import { query } from "./_generated/server";

export const get = query({
  handler: async (ctx) => {
    const identity = await ctx.auth.getUserIdentity();
    if (!identity) {
      throw new Error("Not authenticated");
    }

    const holidaysQuery = ctx.db
      .query("holidays")
      .withIndex("by_user", (q) => q.eq("userId", identity.subject));

    return await holidaysQuery.collect();
  },
});
