import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  holidays: defineTable({
    userId: v.string(),
    title: v.string(),
    description: v.optional(v.string()),
    startDate: v.string(),
    endDate: v.string(),
    location: v.string(),
    locationLat: v.number(),
    locationLng: v.number(),
    coverPhotoId: v.optional(v.string()),
  })
    .index("by_user", ["userId"])
    .index("by_date_range", ["startDate", "endDate"]),
});
