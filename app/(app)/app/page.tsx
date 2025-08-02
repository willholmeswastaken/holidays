import HolidayViewToggler from "@/components/holiday-view-toggler";
import { preloadAuthQuery } from "@/lib/preload";
import { api } from "@/convex/_generated/api";

export default async function AppHome() {
  const preloadedHolidays = await preloadAuthQuery(api.holidays.get);

  return (
    <div className="flex-1">
      <div className="max-w-7xl mx-auto space-y-6">
        <HolidayViewToggler preloadedHolidays={preloadedHolidays} />;
      </div>
    </div>
  );
}
