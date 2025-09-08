import { HolidayCard } from "./holiday-card";
import { HolidayDetailsDrawer } from "./holiday-details-drawer";
import { usePreloadedQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import { Preloaded } from "convex/react";
import { useState } from "react";
import { FunctionReturnType } from "convex/server";

type HolidayData = FunctionReturnType<typeof api.holidays.get>[0];

type ListViewProps = {
  preloadedHolidays: Preloaded<typeof api.holidays.get>;
};

export default function ListView({ preloadedHolidays }: ListViewProps) {
  const holidays = usePreloadedQuery(preloadedHolidays);
  const [selectedHoliday, setSelectedHoliday] = useState<HolidayData | null>(
    null
  );
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleHolidayClick = (holiday: HolidayData) => {
    setSelectedHoliday(holiday);
    setDrawerOpen(true);
  };

  return (
    <>
      <div className="grid gap-2 sm:gap-3 grid-cols-2 sm:grid-cols-2 md:grid-cols-3">
        {holidays?.map((holiday) => (
          <HolidayCard
            key={holiday._id}
            title={holiday.title}
            location={holiday.location}
            date={holiday.startDate}
            image={holiday.coverPhotoId || ""}
            description={holiday.description}
            onClick={() => handleHolidayClick(holiday)}
          />
        ))}
      </div>

      <HolidayDetailsDrawer
        holiday={selectedHoliday}
        open={drawerOpen}
        onOpenChange={setDrawerOpen}
      />
    </>
  );
}
