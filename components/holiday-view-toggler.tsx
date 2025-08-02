"use client";

import { MapView } from "@/components/map-view";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { useState } from "react";
import ListView from "./list-view";
import { Preloaded } from "convex/react";
import { api } from "@/convex/_generated/api";

type ToggleView = "list" | "map";

type HolidayViewTogglerProps = {
  preloadedHolidays: Preloaded<typeof api.holidays.get>;
};

export default function HolidayViewToggler({
  preloadedHolidays,
}: HolidayViewTogglerProps) {
  const [scrapbookView, setScrapbookView] = useState<ToggleView>("list");

  return (
    <div className="flex-1">
      <div className="max-w-7xl mx-auto space-y-6">
        <Tabs
          value={scrapbookView}
          onValueChange={(value) => setScrapbookView(value as ToggleView)}
          className="space-y-6"
        >
          <TabsList className="bg-white border border-gray-200">
            <TabsTrigger
              value="list"
              className="data-[state=active]:bg-gray-100 text-gray-700"
            >
              List View
            </TabsTrigger>
            <TabsTrigger
              value="map"
              className="data-[state=active]:bg-gray-100 text-gray-700"
            >
              Map View
            </TabsTrigger>
          </TabsList>

          <TabsContent value="list" className="space-y-4">
            <ListView preloadedHolidays={preloadedHolidays} />
          </TabsContent>

          <TabsContent value="map">
            <MapView preloadedHolidays={preloadedHolidays} />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
