"use client";

import type React from "react";
import { useState, useRef } from "react";
import { useForm, Controller } from "react-hook-form";
import { Calendar, MapPin, ImageIcon, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { DatePicker } from "./date-picker";
import { PlacesAutocomplete } from "./places-input";
import Link from "next/link";
import Image from "next/image";
import { useAuth } from "@clerk/nextjs";
import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import { useRouter } from "next/navigation";
import { GoogleMapsWrapper } from "./google-maps-wrapper";

type AddHolidayFormValues = {
  title: string;
  description?: string;
  location: string;
  locationLat: number;
  locationLng: number;
  date: string;
  privacy: string;
};

export function AddHolidayForm() {
  const { getToken } = useAuth();
  const router = useRouter();
  const createHoliday = useMutation(api.holidays.create);
  const {
    register,
    handleSubmit,
    control,
    setValue,
    formState: { errors },
    watch,
  } = useForm<AddHolidayFormValues>({
    defaultValues: {
      title: "",
      description: "",
      location: "",
      locationLat: 0,
      locationLng: 0,
      date: "",
      privacy: "everyone",
    },
    mode: "onChange",
  });

  const [coverImage, setCoverImage] = useState<File | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const coverInputRef = useRef<HTMLInputElement>(null);

  const onSubmit = async (data: AddHolidayFormValues) => {
    setIsLoading(true);
    try {
      const holidayId = await createHoliday({
        title: data.title,
        description: data.description || undefined,
        date: data.date,
        location: data.location,
        locationLat: data.locationLat,
        locationLng: data.locationLng,
      });

      if (coverImage) {
        const token = await getToken({ template: "convex" });
        await fetch(
          `${process.env.NEXT_PUBLIC_CONVEX_PUBLIC_URL}/holidays/image`,
          {
            method: "POST",
            headers: {
              "x-holiday-id": holidayId,
              "Content-Type": coverImage.type || "application/octet-stream",
              Authorization: `Bearer ${token}`,
            },
            body: coverImage,
          }
        );
      }

      void router.push("/app");
    } catch (error) {
      console.error("Error creating holiday:", error);
      // You might want to show an error message to the user here
    } finally {
      setIsLoading(false);
    }
  };

  const handleCoverUpload = (files: FileList | null) => {
    if (files && files[0]) {
      setCoverImage(files[0]);
    }
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
        {/* Details Section */}
        <div className="border-2 border-border shadow-xl rounded-xl bg-card/80 backdrop-blur-md">
          <div className="border-b-2 border-border/40 px-6 py-5 bg-muted/50 rounded-t-xl">
            <h3 className="text-lg font-bold text-foreground">Details</h3>
          </div>

          <div className="p-6 space-y-6">
            {/* Title */}
            <div className="space-y-3">
              <Label
                htmlFor="title"
                className="text-sm font-semibold text-foreground"
              >
                Title
              </Label>
              <Input
                id="title"
                placeholder="Give your holiday a memorable title"
                className="w-full h-11 border-2 border-border focus:border-primary focus:ring-2 focus:ring-primary/30 transition-all duration-200 bg-background/50"
                {...register("title", { required: "Title is required" })}
              />
              {errors.title && (
                <p className="text-xs text-red-600 font-medium">
                  {errors.title.message}
                </p>
              )}
            </div>

            {/* Description */}
            <div className="space-y-3">
              <Label
                htmlFor="description"
                className="text-sm font-semibold text-foreground"
              >
                Description
              </Label>
              <Textarea
                id="description"
                placeholder="Share your holiday story and memorable moments..."
                className="min-h-[100px] resize-none border-2 border-border focus:border-primary focus:ring-2 focus:ring-primary/30 transition-all duration-200 bg-background/50"
                {...register("description", {
                  maxLength: {
                    value: 2000,
                    message: "Description must be 2000 characters or less",
                  },
                })}
              />
              {errors.description && (
                <p className="text-xs text-red-600 font-medium">
                  {errors.description.message}
                </p>
              )}
              <div className="text-xs text-muted-foreground text-right font-medium">
                {(watch("description") || "").length}/2000
              </div>
            </div>

            {/* Cover Photo */}
            <div className="space-y-3">
              <Label className="text-sm font-semibold text-foreground">
                Cover Photo
              </Label>

              {/* Mobile: Stack vertically, Desktop: Side by side */}
              <div className="flex flex-col gap-4 md:flex-row md:items-start md:gap-4">
                <div className="w-full h-24 md:w-32 md:h-20 bg-muted rounded-lg border-2 border-dashed border-border hover:border-primary hover:bg-muted/80 transition-all duration-200 flex items-center justify-center relative overflow-hidden shadow-sm">
                  {coverImage ? (
                    <Image
                      src={URL.createObjectURL(coverImage)}
                      alt="Cover"
                      fill
                      className="object-cover"
                    />
                  ) : (
                    <ImageIcon className="h-8 w-8 text-muted-foreground" />
                  )}
                </div>

                <div className="flex-1 space-y-2">
                  <input
                    ref={coverInputRef}
                    type="file"
                    accept="image/*"
                    onChange={(e) => handleCoverUpload(e.target.files)}
                    className="hidden"
                  />
                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    onClick={() => coverInputRef.current?.click()}
                    className="w-full md:w-auto border-2 border-border/60 hover:border-primary hover:bg-primary/5 transition-all duration-200 font-medium"
                  >
                    Upload
                  </Button>
                  <p className="text-xs text-muted-foreground font-medium leading-relaxed">
                    Select or upload an image that shows your holiday&apos;s
                    best moment. This will be the main image people see.
                  </p>
                </div>
              </div>
            </div>

            {/* Location */}
            <div className="space-y-3">
              <Label className="text-sm font-semibold text-foreground flex items-center gap-2">
                <MapPin className="h-4 w-4 text-primary" />
                Location
              </Label>
              <Controller
                control={control}
                name="location"
                rules={{ required: "Location is required" }}
                render={({ field }) => (
                  <GoogleMapsWrapper>
                    <PlacesAutocomplete
                      address={field.value}
                      onAddressSelect={(
                        selectedLocation,
                        selectedLocationLat,
                        selectedLocationLng
                      ) => {
                        field.onChange(selectedLocation);
                        setValue("locationLat", selectedLocationLat);
                        setValue("locationLng", selectedLocationLng);
                      }}
                    />
                  </GoogleMapsWrapper>
                )}
              />
              {errors.location && (
                <p className="text-xs text-red-600">
                  {errors.location.message}
                </p>
              )}
              {watch("location") && (
                <div className="flex flex-wrap gap-2 mt-2">
                  <span className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-secondary text-secondary-foreground">
                    {watch("location")}
                  </span>
                </div>
              )}
            </div>

            {/* Date */}
            <div className="space-y-3">
              <Label className="text-sm font-semibold text-foreground flex items-center gap-2">
                <Calendar className="h-4 w-4 text-primary" />
                Date Visited
              </Label>
              <Controller
                name="date"
                control={control}
                rules={{ required: "Date is required" }}
                render={({ field }) => (
                  <DatePicker
                    value={field.value}
                    onChange={(val) => field.onChange(val)}
                    placeholder="Select date"
                  />
                )}
              />
              {errors.date && (
                <p className="text-xs text-red-600">{errors.date.message}</p>
              )}
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-4 pt-4">
          <Button
            type="submit"
            disabled={isLoading}
            className="bg-red-500 hover:bg-red-600 text-white px-8 py-3 h-12 font-semibold shadow-lg hover:shadow-xl transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:shadow-none"
          >
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Creating...
              </>
            ) : (
              "Create Holiday"
            )}
          </Button>
          <Link href="/app">
            <Button
              type="button"
              variant="ghost"
              className="px-6 py-3 h-12 font-medium border-2 border-border/60 hover:border-primary hover:bg-primary/5 transition-all duration-200"
              disabled={isLoading}
            >
              Discard
            </Button>
          </Link>
        </div>
      </form>
    </div>
  );
}
