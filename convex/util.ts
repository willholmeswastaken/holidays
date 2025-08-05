import { UserIdentity } from "convex/server";
import { PropertyValidators, ConvexError } from "convex/values";
import { QueryCtx, query } from "./_generated/server";

interface ProtectedQueryCtx extends QueryCtx {
  identity: UserIdentity;
}

export function protectedQuery<Output, TArgs extends unknown[]>({
  handler,
  args,
}: {
  /**
   * The query handler.
   *
   * @param ctx - The query context.
   * @param args - The query arguments.
   * @returns The query result.
   */
  handler: (ctx: ProtectedQueryCtx, args: TArgs) => Output;
  /**
   * Argument validation.
   *
   * Examples:
   *
   * ```
   * args: {}
   * args: { input: v.optional(v.number()) }
   * args: { message: v.string(), author: v.id("authors") }
   * args: { messages: v.array(v.string()) }
   * ```
   */
  args?: PropertyValidators;
}) {
  return query({
    args,
    handler: async (ctx, args: TArgs) => {
      const identity = await ctx.auth.getUserIdentity();
      if (!identity) {
        throw new ConvexError("Not authenticated");
      }
      return handler({ ...ctx, identity } as ProtectedQueryCtx, args);
    },
  });
}
