import { HolidayCard } from "./holiday-card";
import { usePreloadedQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import { Preloaded } from "convex/react";

type ListViewProps = {
  preloadedHolidays: Preloaded<typeof api.holidays.get>;
};

export default function ListView({ preloadedHolidays }: ListViewProps) {
  const holidays = usePreloadedQuery(preloadedHolidays);

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {holidays?.map((holiday) => (
        <HolidayCard
          key={holiday._id}
          title={holiday.title}
          location={holiday.location}
          date={holiday.startDate}
          image={holiday.coverPhotoId || ""}
        />
      ))}
    </div>
  );
}
