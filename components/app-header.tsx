"use client";

import { UserButton } from "@clerk/nextjs";
import { SidebarTrigger } from "./ui/sidebar";

// Header component with relative layout
export function AppHeader() {
  return (
    <header className="relative w-full px-4 py-4 md:px-6 md:py-6">
      <div className="flex items-center justify-between">
        {/* Mobile sidebar trigger - only visible on mobile */}
        <div className="md:hidden">
          <SidebarTrigger />
        </div>

        {/* Desktop spacer or logo space */}
        <div className="hidden md:block flex-1" />

        {/* User avatar - visible on all devices */}
        <div>
          <UserButton />
        </div>
      </div>
    </header>
  );
}

// Legacy floating components for backward compatibility
export function FloatingUserButton() {
  return <AppHeader />;
}

export function MobileSidebarTrigger() {
  return null; // No longer needed as it's integrated into AppHeader
}
