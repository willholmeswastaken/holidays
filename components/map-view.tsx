import { Card } from "@/components/ui/card";
import { usePreloadedQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import { Preloaded } from "convex/react";
import { FunctionReturnType } from "convex/server";
import { useState } from "react";
import MapboxMap from "./map";
import { HolidayDetailsDrawer } from "./holiday-details-drawer";

type HolidayData = FunctionReturnType<typeof api.holidays.get>[0];

type MapViewProps = {
  preloadedHolidays: Preloaded<typeof api.holidays.get>;
};

export function MapView({ preloadedHolidays }: MapViewProps) {
  const holidays: HolidayData[] = usePreloadedQuery(preloadedHolidays);
  const [selectedHoliday, setSelectedHoliday] = useState<HolidayData | null>(
    null
  );
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleHolidaySelect = (holiday: HolidayData) => {
    setSelectedHoliday(holiday);
    setDrawerOpen(true);
  };

  return (
    <>
      <Card className="h-[600px] overflow-hidden">
        <div className="relative h-full w-full bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
          <MapboxMap
            holidays={holidays}
            onHolidaySelect={handleHolidaySelect}
          />
        </div>
      </Card>

      <HolidayDetailsDrawer
        holiday={selectedHoliday}
        open={drawerOpen}
        onOpenChange={setDrawerOpen}
      />
    </>
  );
}
