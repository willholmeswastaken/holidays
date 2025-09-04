"use client";

import { useLoadScript } from "@react-google-maps/api";
import { ReactNode } from "react";

export function GoogleMapsWrapper({ children }: { children: ReactNode }) {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!,
    libraries: ["places"],
  });

  return isLoaded ? children : <div>Loading...</div>;
}
