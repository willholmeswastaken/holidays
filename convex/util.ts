import { UserIdentity } from "convex/server";
import { PropertyValidators, ConvexError } from "convex/values";
import { QueryCtx, query, MutationCtx, mutation } from "./_generated/server";

interface ProtectedQueryCtx extends QueryCtx {
  identity: UserIdentity;
}

interface ProtectedMutationCtx extends MutationCtx {
  identity: UserIdentity;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function protectedQuery<Output, TArgs extends { [x: string]: any }>({
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
  handler: (ctx: ProtectedQueryCtx, args: TArgs) => Promise<Output>;
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

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function protectedMutation<TArgs extends { [x: string]: any }>({
  handler,
  args,
}: {
  /**
   * The mutation handler.
   *
   * @param ctx - The mutation context.
   * @param args - The mutation arguments.
   * @returns The mutation result.
   */
  handler: (ctx: ProtectedMutationCtx, args: TArgs) => Promise<void>;
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
  return mutation({
    args,
    handler: async (ctx, args: TArgs) => {
      const identity = await ctx.auth.getUserIdentity();
      if (!identity) {
        throw new ConvexError("Not authenticated");
      }
      return handler({ ...ctx, identity } as ProtectedMutationCtx, args);
    },
  });
}
