import { protectedQuery } from "@/convex/util";
import { ConvexError, v } from "convex/values";
import { internalMutation } from "./_generated/server";

export const get = protectedQuery({
  handler: async (ctx) => {
    const holidays = await ctx.db
      .query("holidays")
      .withIndex("by_user", (q) => q.eq("userId", ctx.identity.subject))
      .collect();
    return Promise.all(
      holidays.map(async (holiday) => {
        if (holiday.coverPhotoId) {
          const coverPhoto = await ctx.storage.getUrl(holiday.coverPhotoId);
          return { ...holiday, coverPhotoId: coverPhoto };
        }
        return holiday;
      })
    );
  },
});

export const getById = protectedQuery({
  handler: async (ctx, { id }) => {
    const holiday = await ctx.db.get(id);
    if (holiday?.userId !== ctx.identity.subject) {
      throw new ConvexError("Not authorized");
    }
    return holiday;
  },
  args: {
    id: v.id("holidays"),
  },
});

export const addImage = internalMutation({
  handler: (ctx, { storageId, holidayId }) => {
    return ctx.db.patch(holidayId, {
      coverPhotoId: storageId,
    });
  },
  args: {
    storageId: v.string(),
    holidayId: v.id("holidays"),
  },
});
