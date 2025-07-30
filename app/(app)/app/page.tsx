"use client";

import { MapView } from "@/components/map-view";
import {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
} from "../../../components/ui/tabs";
import { useState } from "react";

type ToggleView = "list" | "map";

export default function AppHome() {
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
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"></div>
          </TabsContent>

          <TabsContent value="map">
            <MapView />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
