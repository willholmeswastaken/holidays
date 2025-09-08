import { Calendar, MapPin, MoreHorizontal, Eye, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface HolidayCardTikTokProps {
  title: string;
  location: string;
  date: string;
  image: string;
  description?: string;
  views?: number;
  likes?: number;
  duration?: string;
}

export function HolidayCardTikTok({
  title,
  location,
  date,
  image,
  description,
  views = 0,
  likes = 0,
  duration,
}: HolidayCardTikTokProps) {
  return (
    <div className="flex items-center gap-4 p-4 hover:bg-muted border-b border-border">
      <div className="relative">
        <img
          src={image || "/placeholder.svg?height=60&width=80"}
          alt={title}
          className="w-20 h-15 object-cover rounded"
        />
        {duration && (
          <div className="absolute bottom-1 right-1 bg-black bg-opacity-75 text-white text-xs px-1 rounded">
            {duration}
          </div>
        )}
      </div>

      <div className="flex-1 min-w-0">
        <h4 className="font-medium text-foreground truncate">{title}</h4>
        <p className="text-sm text-muted-foreground line-clamp-2 mt-1">
          {description}
        </p>
        <div className="flex items-center gap-4 text-xs text-muted-foreground mt-2">
          <div className="flex items-center gap-1">
            <MapPin className="h-3 w-3" />
            {location}
          </div>
          <div className="flex items-center gap-1">
            <Calendar className="h-3 w-3" />
            {date}
          </div>
        </div>
      </div>

      <div className="flex items-center gap-6 text-sm text-muted-foreground">
        <div className="text-center">
          <Eye className="h-4 w-4 mx-auto mb-1" />
          <div>{views}</div>
        </div>
        <div className="text-center">
          <Heart className="h-4 w-4 mx-auto mb-1" />
          <div>{likes}</div>
        </div>
        <div className="text-center">
          <div className="w-4 h-4 mx-auto mb-1 bg-muted rounded-full"></div>
          <div>0</div>
        </div>
      </div>

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
            <MoreHorizontal className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem>Edit Holiday</DropdownMenuItem>
          <DropdownMenuItem className="text-destructive">
            Delete Holiday
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
