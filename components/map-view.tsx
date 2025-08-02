import { Card } from "@/components/ui/card";
import { usePreloadedQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import { Preloaded } from "convex/react";

type MapViewProps = {
  preloadedHolidays: Preloaded<typeof api.holidays.get>;
};

export function MapView({ preloadedHolidays }: MapViewProps) {
  const holidays = usePreloadedQuery(preloadedHolidays);

  return (
    <Card className="h-[600px] overflow-hidden">
      <div className="relative h-full w-full bg-gradient-to-br from-blue-100 to-green-100 flex items-center justify-center">
        <div className="text-center space-y-2">
          <div className="text-4xl">🗺️</div>
          <p className="text-muted-foreground">
            Interactive map would be integrated here
          </p>
          <p className="text-sm text-muted-foreground">
            Your holiday locations will appear as pins on the map
          </p>
        </div>

        {/* Sample holiday marker */}
        {holidays && holidays.length > 0 && (
          <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="bg-primary text-primary-foreground rounded-full p-2 shadow-lg animate-pulse">
              📍
            </div>
            <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 bg-white rounded-lg shadow-lg p-3 min-w-[200px]">
              <div className="flex gap-3">
                <img
                  src="/placeholder.svg?height=60&width=60"
                  alt={holidays[0].title}
                  className="w-15 h-15 rounded object-cover"
                />
                <div>
                  <h4 className="font-semibold text-sm">{holidays[0].title}</h4>
                  <p className="text-xs text-muted-foreground">
                    {holidays[0].location}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {new Date(holidays[0].startDate).toLocaleDateString()}
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </Card>
  );
}
