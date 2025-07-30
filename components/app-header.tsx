"use client";

import { useSidebar } from "./ui/sidebar";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

export default function AppHeader() {
  const { state } = useSidebar();
  const headerHeight = state === "collapsed" ? "h-16" : "h-20";
  return (
    <header
      className={`flex shrink-0 items-center justify-between border-b bg-white px-6 border-gray-200 ${headerHeight}`}
    >
      <div></div>
      <Avatar className="h-8 w-8">
        <AvatarImage src="/placeholder.svg?height=32&width=32" alt="User" />
        <AvatarFallback className="bg-blue-100 text-blue-600">U</AvatarFallback>
      </Avatar>
    </header>
  );
}
