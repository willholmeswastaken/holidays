import { Calendar, MapPin } from "lucide-react";
import Image from "next/image";

interface HolidayCardProps {
  title: string;
  location: string;
  date: string;
  image: string;
  description?: string;
}

export function HolidayCard({
  title,
  location,
  date,
  image,
  description,
}: HolidayCardProps) {
  return (
    <div className="group relative aspect-square overflow-hidden rounded-md">
      <Image
        src={image || "/holiday-fallback.svg"}
        alt={title}
        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        width={400}
        height={400}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      <div className="pointer-events-none absolute inset-0 flex flex-col justify-end p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <h3 className="text-white text-lg font-semibold leading-tight line-clamp-2">
          {title}
        </h3>
        <div className="mt-2 flex items-center gap-4 text-sm text-gray-200">
          <div className="flex items-center gap-1">
            <MapPin className="h-3 w-3" />
            <span className="truncate">{location}</span>
          </div>
          <div className="flex items-center gap-1">
            <Calendar className="h-3 w-3" />
            <span>{date}</span>
          </div>
        </div>
        {description && (
          <p className="mt-2 text-xs text-gray-200/90 line-clamp-2">
            {description}
          </p>
        )}
      </div>
    </div>
  );
}
