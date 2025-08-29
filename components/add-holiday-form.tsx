"use client";

import type React from "react";
import { useState, useRef } from "react";
import { useForm, Controller } from "react-hook-form";
import { Calendar, MapPin, Upload, X, ImageIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { DatePicker } from "./date-picker";
import Link from "next/link";
import { useAuth } from "@clerk/nextjs";
import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import { useRouter } from "next/navigation";

type AddHolidayFormValues = {
  title: string;
  description?: string;
  location: string;
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
    formState: { errors },
    watch,
  } = useForm<AddHolidayFormValues>({
    defaultValues: {
      title: "",
      description: "",
      location: "",
      date: "",
      privacy: "everyone",
    },
    mode: "onChange",
  });

  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);
  const [coverImage, setCoverImage] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const coverInputRef = useRef<HTMLInputElement>(null);

  const onSubmit = async (data: AddHolidayFormValues) => {
    const holidayId = await createHoliday({
      title: data.title,
      description: data.description || undefined,
      date: data.date,
      location: data.location,
      locationLat: 0,
      locationLng: 0,
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
  };

  const handleFileUpload = (files: FileList | null) => {
    if (files) {
      const newFiles = Array.from(files).filter((file) =>
        file.type.startsWith("image/")
      );
      setUploadedFiles((prev) => [...prev, ...newFiles]);
    }
  };

  const handleCoverUpload = (files: FileList | null) => {
    if (files && files[0]) {
      setCoverImage(files[0]);
    }
  };

  const removeFile = (index: number) => {
    setUploadedFiles((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
        {/* Details Section */}
        <div className="bg-white border border-gray-200 rounded-lg">
          <div className="border-b border-gray-200 px-6 py-4">
            <h3 className="text-base font-medium text-gray-900">Details</h3>
          </div>

          <div className="p-6 space-y-6">
            {/* Title */}
            <div className="space-y-2">
              <Label
                htmlFor="title"
                className="text-sm font-medium text-gray-700"
              >
                Title
              </Label>
              <Input
                id="title"
                placeholder="Give your holiday a memorable title"
                className="w-full"
                {...register("title", { required: "Title is required" })}
              />
              {errors.title && (
                <p className="text-xs text-red-600">{errors.title.message}</p>
              )}
            </div>

            {/* Description */}
            <div className="space-y-2">
              <Label
                htmlFor="description"
                className="text-sm font-medium text-gray-700"
              >
                Description
              </Label>
              <Textarea
                id="description"
                placeholder="Share your holiday story and memorable moments..."
                className="min-h-[100px] resize-none"
                {...register("description", {
                  maxLength: {
                    value: 2000,
                    message: "Description must be 2000 characters or less",
                  },
                })}
              />
              {errors.description && (
                <p className="text-xs text-red-600">
                  {errors.description.message}
                </p>
              )}
              <div className="text-xs text-gray-500 text-right">
                {(watch("description") || "").length}/2000
              </div>
            </div>

            {/* Cover Photo */}
            <div className="space-y-3">
              <Label className="text-sm font-medium text-gray-700">
                Cover Photo
              </Label>
              <div className="flex items-start gap-4">
                <div className="w-32 h-20 bg-gray-100 rounded-lg border-2 border-dashed border-gray-300 flex items-center justify-center relative overflow-hidden">
                  {coverImage ? (
                    <img
                      src={
                        URL.createObjectURL(coverImage) || "/placeholder.svg"
                      }
                      alt="Cover"
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <ImageIcon className="h-8 w-8 text-gray-400" />
                  )}
                </div>
                <div className="flex-1">
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
                    className="mb-2"
                  >
                    Edit cover
                  </Button>
                  <p className="text-xs text-gray-500">
                    Select or upload an image that shows your holiday&apos;s
                    best moment. This will be the main image people see.
                  </p>
                </div>
              </div>
            </div>

            {/* Location */}
            <div className="space-y-2">
              <Label className="text-sm font-medium text-gray-700 flex items-center gap-1">
                <MapPin className="h-4 w-4" />
                Location
              </Label>
              <div className="relative">
                <Input
                  placeholder="Search locations"
                  className="w-full"
                  {...register("location", {
                    required: "Location is required",
                  })}
                />
              </div>
              {errors.location && (
                <p className="text-xs text-red-600">
                  {errors.location.message}
                </p>
              )}
              {watch("location") && (
                <div className="flex flex-wrap gap-2 mt-2">
                  <span className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-gray-100 text-gray-700">
                    {watch("location")}
                  </span>
                </div>
              )}
            </div>

            {/* Date */}
            <div className="space-y-2">
              <Label className="text-sm font-medium text-gray-700 flex items-center gap-1">
                <Calendar className="h-4 w-4" />
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

            {/* Photo Gallery */}
            <div className="space-y-3">
              <Label className="text-sm font-medium text-gray-700">
                Photo Gallery
              </Label>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                <input
                  ref={fileInputRef}
                  type="file"
                  multiple
                  accept="image/*"
                  onChange={(e) => handleFileUpload(e.target.files)}
                  className="hidden"
                />
                <Upload className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                <p className="text-sm text-gray-600 mb-2">
                  Drag and drop your photos here
                </p>
                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  onClick={() => fileInputRef.current?.click()}
                >
                  Choose Files
                </Button>
              </div>

              {uploadedFiles.length > 0 && (
                <div className="grid grid-cols-4 gap-3 mt-4">
                  {uploadedFiles.map((file, index) => (
                    <div key={index} className="relative group">
                      <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden">
                        <img
                          src={URL.createObjectURL(file) || "/placeholder.svg"}
                          alt={file.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <button
                        type="button"
                        onClick={() => removeFile(index)}
                        className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity text-xs"
                      >
                        <X className="h-3 w-3" />
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3">
          <Button
            type="submit"
            className="bg-red-500 hover:bg-red-600 text-white px-8"
          >
            Create Holiday
          </Button>
          <Link href="/app">
            <Button
              type="button"
              variant="ghost"
              className="px-6 text-gray-600"
            >
              Discard
            </Button>
          </Link>
        </div>
      </form>
    </div>
  );
}
