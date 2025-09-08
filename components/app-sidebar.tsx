"use client";

import type * as React from "react";
import { Home, Plus, BarChart3, Settings } from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
  useSidebar,
} from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";

// Minimal navigation items
const navItems = [
  {
    title: "Home",
    url: "/app",
    icon: Home,
  },
  {
    title: "Statistics",
    url: "#stats",
    icon: BarChart3,
  },
  {
    title: "Settings",
    url: "#settings",
    icon: Settings,
  },
];

export function AppSidebar() {
  const currentPath = usePathname();
  const { setOpenMobile } = useSidebar();

  const handleLinkClick = () => {
    setOpenMobile(false);
  };
  return (
    <Sidebar
      variant="sidebar"
      collapsible="icon"
      className="bg-sidebar border-r"
    >
      <SidebarHeader className="bg-sidebar px-4 py-6 group-data-[collapsible=icon]:px-3 group-data-[collapsible=icon]:py-4">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild tooltip="HolidayMaker">
              <div className="flex items-center gap-2 cursor-pointer group-data-[collapsible=icon]:justify-center">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-blue-600 group-data-[collapsible=icon]:h-7 group-data-[collapsible=icon]:w-7">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    className="h-5 w-5 text-white group-data-[collapsible=icon]:h-4 group-data-[collapsible=icon]:w-4"
                  >
                    <path
                      d="M12 2L13.09 8.26L19 7L13.09 5.74L12 2Z"
                      fill="currentColor"
                      opacity="0.8"
                    />
                    <path
                      d="M12 2L10.91 8.26L5 7L10.91 5.74L12 2Z"
                      fill="currentColor"
                      opacity="0.8"
                    />
                    <circle
                      cx="12"
                      cy="12"
                      r="3"
                      fill="currentColor"
                      opacity="0.9"
                    />
                    <path
                      d="M12 15C13.1046 15 14 14.1046 14 13C14 11.8954 13.1046 11 12 11C10.8954 11 10 11.8954 10 13C10 14.1046 10.8954 15 12 15Z"
                      fill="currentColor"
                      opacity="0.6"
                    />
                    <path
                      d="M8 18L9 16H15L16 18"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      opacity="0.7"
                    />
                  </svg>
                </div>
                <div className="grid flex-1 text-left text-sm leading-tight group-data-[collapsible=icon]:hidden">
                  <span className="truncate font-semibold text-sidebar-foreground">
                    HolidayMaker
                  </span>
                </div>
              </div>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>

      <SidebarContent className="bg-sidebar px-4 group-data-[collapsible=icon]:px-3">
        {/* Add Holiday Button - Clean and prominent */}
        <div className="py-3 mb-4">
          <Link href="/app/holidays/add" onClick={handleLinkClick}>
            <Button className="w-full bg-red-500 hover:bg-red-600 text-white font-medium h-10 rounded-lg transition-all group-data-[collapsible=icon]:w-10 group-data-[collapsible=icon]:h-10 group-data-[collapsible=icon]:p-0 group-data-[collapsible=icon]:rounded-lg">
              <Plus className="h-5 w-5" />
              <span className="group-data-[collapsible=icon]:hidden ml-2">
                Add Holiday
              </span>
            </Button>
          </Link>
        </div>

        {/* Navigation Menu - Minimal and clean */}
        <SidebarGroup className="space-y-1">
          <SidebarGroupContent>
            <SidebarMenu className="space-y-1">
              {navItems.map((item) => {
                const isActive = currentPath === item.url;
                return (
                  <SidebarMenuItem key={item.title}>
                    <Link href={item.url} onClick={handleLinkClick}>
                      <SidebarMenuButton
                        tooltip={item.title}
                        isActive={isActive}
                        className={`text-sidebar-foreground/80 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground rounded-lg h-10 font-medium transition-all group-data-[collapsible=icon]:h-10 group-data-[collapsible=icon]:w-10 group-data-[collapsible=icon]:p-0 group-data-[collapsible=icon]:justify-center ${
                          isActive
                            ? "bg-sidebar-accent text-sidebar-accent-foreground font-semibold"
                            : ""
                        }`}
                      >
                        <item.icon className="h-5 w-5" />
                        <span className="group-data-[collapsible=icon]:hidden ml-3">
                          {item.title}
                        </span>
                      </SidebarMenuButton>
                    </Link>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
}
