"use client";

import { useSidebar } from "./ui/sidebar";
import { UserButton } from "@clerk/nextjs";

export default function AppHeader() {
  const { state } = useSidebar();
  const headerHeight = state === "collapsed" ? "h-16" : "h-20";
  return (
    <header
      className={`flex shrink-0 items-center justify-between border-b bg-white px-6 border-gray-200 ${headerHeight}`}
    >
      <div></div>
      <UserButton />
    </header>
  );
}
