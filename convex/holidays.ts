import { protectedQuery } from "@/convex/util";
import { ConvexError, v } from "convex/values";
import { internalMutation, mutation } from "./_generated/server";

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
  handler: async (ctx, { storageId, holidayId }) => {
    const holiday = await ctx.db.get(holidayId);

    if (holiday?.coverPhotoId) {
      await ctx.storage.delete(holiday.coverPhotoId);
    }

    return ctx.db.patch(holidayId, {
      coverPhotoId: storageId,
    });
  },
  args: {
    storageId: v.string(),
    holidayId: v.id("holidays"),
  },
});

export const create = mutation({
  args: {
    title: v.string(),
    description: v.optional(v.string()),
    // Use one date for both start and end for now
    date: v.string(),
    location: v.string(),
    // Optional lat/lng from client; default to 0 if not provided
    locationLat: v.optional(v.number()),
    locationLng: v.optional(v.number()),
  },
  handler: async (ctx, args) => {
    const identity = await ctx.auth.getUserIdentity();
    if (!identity) {
      throw new ConvexError("Not authenticated");
    }

    const insertedId = await ctx.db.insert("holidays", {
      userId: identity.subject,
      title: args.title,
      description: args.description,
      startDate: args.date,
      endDate: args.date,
      location: args.location,
      locationLat: args.locationLat ?? 0,
      locationLng: args.locationLng ?? 0,
    });

    return insertedId;
  },
});
