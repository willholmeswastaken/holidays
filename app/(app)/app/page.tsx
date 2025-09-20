import HolidayViewToggler from "@/components/holiday-view-toggler";
import { EmptyState } from "@/components/empty-state";
import { preloadAuthQuery } from "@/lib/preload";
import { api } from "@/convex/_generated/api";
import { fetchQuery } from "convex/nextjs";
import { auth } from "@clerk/nextjs/server";

export default async function AppHome() {
  const authResult = await auth();
  const token = await authResult.getToken({ template: "convex" });

  const holidays = await fetchQuery(
    api.holidays.get,
    {},
    { token: token || undefined }
  );

  if (!holidays || holidays.length === 0) {
    return <EmptyState />;
  }

  const preloadedHolidays = await preloadAuthQuery(api.holidays.get);

  return (
    <div className="flex-1">
      <div className="max-w-7xl mx-auto space-y-6">
        <HolidayViewToggler preloadedHolidays={preloadedHolidays} />
      </div>
    </div>
  );
}
