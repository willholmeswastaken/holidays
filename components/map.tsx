"use client";
import Map, { Marker, Popup } from "react-map-gl/mapbox";
import "mapbox-gl/dist/mapbox-gl.css";
import { useState } from "react";
import { X, MapPin, Star, Send, CheckCircle, Plane } from "lucide-react";
import Image from "next/image";
import { FunctionReturnType } from "convex/server";
import { api } from "@/convex/_generated/api";

// Type for holiday data with transformed coverPhotoId (URL instead of storage ID)
type Holiday = FunctionReturnType<typeof api.holidays.get>[0];

type MapboxMapProps = {
  holidays?: Holiday[];
};

const MapboxMap = ({ holidays = [] }: MapboxMapProps) => {
  const [viewport, setViewport] = useState({
    latitude: 51.5074,
    longitude: -0.1278,
    zoom: 1,
  });
  const [popupInfo, setPopupInfo] = useState<Holiday | null>(null);

  return (
    <Map
      {...viewport}
      mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_TOKEN}
      mapStyle="mapbox://styles/mapbox/dark-v11"
      onMove={(evt) => setViewport(evt.viewState)}
      projection="mercator"
    >
      {holidays.map((holiday) => (
        <Marker
          key={holiday._id}
          latitude={holiday.locationLat}
          longitude={holiday.locationLng}
          onClick={(e) => {
            e.originalEvent.stopPropagation();
            setPopupInfo(holiday);
          }}
        >
          <div className="custom-marker">
            <div className="w-4 h-4 bg-pink-500 rounded-full border-2 border-white shadow-lg"></div>
          </div>
        </Marker>
      ))}
      {popupInfo && (
        <Popup
          anchor="top"
          longitude={popupInfo.locationLng}
          latitude={popupInfo.locationLat}
          closeButton={false}
          onClose={() => setPopupInfo(null)}
          className="custom-popup"
        >
          <div className="bg-gray-900 rounded-lg shadow-xl border border-gray-700 overflow-hidden min-w-[320px] max-w-[380px]">
            {/* Header with Image */}
            <div className="relative">
              {popupInfo.coverPhotoId ? (
                <Image
                  src={popupInfo.coverPhotoId}
                  alt={popupInfo.title}
                  className="w-full h-32 object-cover"
                  width={400}
                  height={200}
                />
              ) : (
                <Image
                  src={`https://api.mapbox.com/styles/v1/mapbox/satellite-v9/static/pin-s+FF0000(${popupInfo.locationLng},${popupInfo.locationLat})/${popupInfo.locationLng},${popupInfo.locationLat},15/400x200?access_token=${process.env.NEXT_PUBLIC_MAPBOX_TOKEN}`}
                  alt={popupInfo.title}
                  className="w-full h-32 object-cover"
                  width={400}
                  height={200}
                />
              )}
              <div className="absolute top-3 right-3">
                <button
                  onClick={() => setPopupInfo(null)}
                  className="bg-gray-900/80 hover:bg-gray-800/80 text-white p-1.5 rounded-full transition-colors backdrop-blur-sm"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
              <div className="absolute bottom-3 left-3">
                <span className="bg-green-600 text-white text-xs px-2 py-1 rounded-full font-medium flex items-center gap-1">
                  <CheckCircle className="w-3 h-3" />
                  Holiday
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="p-4">
              {/* Title */}
              <div className="flex items-center gap-2 mb-3">
                <Plane className="w-5 h-5 text-gray-400" />
                <h3 className="text-white font-bold text-lg">
                  {popupInfo.title}
                </h3>
              </div>

              {/* Address */}
              <div className="flex items-start gap-2 mb-4">
                <MapPin className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" />
                <p className="text-gray-300 text-sm leading-relaxed">
                  {popupInfo.location}
                </p>
              </div>

              {/* Description */}
              {popupInfo.description && (
                <div className="mb-4">
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {popupInfo.description}
                  </p>
                </div>
              )}

              {/* Action Buttons */}
              <div className="flex gap-3 mb-3">
                <button className="flex-1 bg-gray-800 hover:bg-gray-700 text-white text-sm py-2.5 px-3 rounded-lg flex items-center justify-center gap-2 transition-colors border border-gray-700">
                  <Send className="w-4 h-4" />
                  View
                </button>
                <button className="flex-1 bg-gray-800 hover:bg-gray-700 text-white text-sm py-2.5 px-3 rounded-lg flex items-center justify-center gap-2 transition-colors border border-gray-700">
                  <Star className="w-4 h-4" />
                  Favourite
                </button>
              </div>

              {/* Date */}
              <div className="text-gray-400 text-xs text-center pt-3 border-t border-gray-700">
                Visited on {new Date(popupInfo.startDate).toLocaleDateString()}
              </div>
            </div>
          </div>
        </Popup>
      )}
    </Map>
  );
};

export default MapboxMap;
