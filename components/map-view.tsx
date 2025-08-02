import { Card } from "@/components/ui/card";
import { usePreloadedQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import { Preloaded } from "convex/react";
import MapboxMap from "./map";

type MapViewProps = {
  preloadedHolidays: Preloaded<typeof api.holidays.get>;
};

export function MapView({ preloadedHolidays }: MapViewProps) {
  const holidays = usePreloadedQuery(preloadedHolidays);

  return (
    <Card className="h-[600px] overflow-hidden">
      <div className="relative h-full w-full bg-gradient-to-br from-blue-100 to-green-100 flex items-center justify-center">
        <MapboxMap />
      </div>
    </Card>
  );
}
