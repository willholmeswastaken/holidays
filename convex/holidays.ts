import { protectedQuery } from "@/convex/util";

export const get = protectedQuery({
  handler: (ctx) => {
    return ctx.db
      .query("holidays")
      .withIndex("by_user", (q) => q.eq("userId", ctx.identity.subject))
      .collect();
  },
});
