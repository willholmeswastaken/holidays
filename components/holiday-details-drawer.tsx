"use client";

import { Calendar, MapPin, Plane, X } from "lucide-react";
import Image from "next/image";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";
import { FunctionReturnType } from "convex/server";
import { api } from "@/convex/_generated/api";

type Holiday = FunctionReturnType<typeof api.holidays.get>[0];

interface HolidayDetailsDrawerProps {
  holiday: Holiday | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function HolidayDetailsDrawer({
  holiday,
  open,
  onOpenChange,
}: HolidayDetailsDrawerProps) {
  if (!holiday) return null;

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const formatDateRange = (startDate: string, endDate: string) => {
    const start = new Date(startDate);
    const end = new Date(endDate);

    if (start.toDateString() === end.toDateString()) {
      return formatDate(startDate);
    }

    return `${formatDate(startDate)} - ${formatDate(endDate)}`;
  };

  return (
    <Drawer open={open} onOpenChange={onOpenChange}>
      <DrawerContent className="max-h-[90vh]">
        <div className="mx-auto w-full max-w-2xl">
          <DrawerHeader className="text-left">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Plane className="w-6 h-6 text-muted-foreground" />
                <div>
                  <DrawerTitle className="text-2xl">
                    {holiday.title}
                  </DrawerTitle>
                </div>
              </div>
              <DrawerClose className="rounded-full p-2 hover:bg-muted transition-colors">
                <X className="w-5 h-5" />
              </DrawerClose>
            </div>
          </DrawerHeader>

          <div className="px-4 pb-6 space-y-6">
            {/* Cover Image */}
            <div className="relative w-full h-64 rounded-lg overflow-hidden">
              {holiday.coverPhotoId ? (
                <Image
                  src={holiday.coverPhotoId}
                  alt={holiday.title}
                  fill
                  className="object-cover"
                />
              ) : (
                <div className="w-full h-full bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
                  <Plane className="w-16 h-16 text-muted-foreground" />
                </div>
              )}
            </div>

            {/* Location */}
            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-muted-foreground mt-0.5 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-foreground mb-1">Location</h3>
                <p className="text-muted-foreground">{holiday.location}</p>
              </div>
            </div>

            {/* Date Range */}
            <div className="flex items-start gap-3">
              <Calendar className="w-5 h-5 text-muted-foreground mt-0.5 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-foreground mb-1">
                  Visited on
                </h3>
                <p className="text-muted-foreground">
                  {formatDateRange(holiday.startDate, holiday.endDate)}
                </p>
              </div>
            </div>

            {/* Description */}
            {holiday.description && (
              <div>
                <h3 className="font-semibold text-foreground mb-2">
                  Description
                </h3>
                <div className="bg-muted rounded-lg p-4">
                  <p className="text-muted-foreground leading-relaxed whitespace-pre-wrap">
                    {holiday.description}
                  </p>
                </div>
              </div>
            )}

            {/* Additional Info */}
            <div className="border-t border-border pt-4">
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="text-muted-foreground">Coordinates</span>
                  <p className="text-foreground font-mono">
                    {holiday.locationLat.toFixed(6)},{" "}
                    {holiday.locationLng.toFixed(6)}
                  </p>
                </div>
                <div>
                  <span className="text-muted-foreground">Holiday ID</span>
                  <p className="text-foreground font-mono text-xs break-all">
                    {holiday._id}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
