"use client";

import type * as React from "react";
import { Home, Plus, BarChart3, Settings } from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";

// Navigation items organized like TikTok Studio
const manageItems = [
  {
    title: "My Scrapbook",
    url: "/app",
    icon: Home,
  },
  {
    title: "Statistics",
    url: "#stats",
    icon: BarChart3,
  },
];

const othersItems = [
  {
    title: "Settings",
    url: "#settings",
    icon: Settings,
  },
];

export function AppSidebar() {
  const currentPath = usePathname();
  return (
    <Sidebar
      variant="sidebar"
      collapsible="icon"
      className="border-r border-gray-200 bg-gray-50"
    >
      <SidebarHeader className="border-b border-gray-200 bg-gray-50 px-3 py-4 group-data-[collapsible=icon]:px-2 group-data-[collapsible=icon]:py-3">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild tooltip="HolidayMaker">
              <div className="flex items-center gap-3 cursor-pointer group-data-[collapsible=icon]:justify-center">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-blue-600 text-white text-sm font-bold shadow-sm group-data-[collapsible=icon]:h-7 group-data-[collapsible=icon]:w-7">
                  H
                </div>
                <div className="grid flex-1 text-left text-sm leading-tight group-data-[collapsible=icon]:hidden">
                  <span className="truncate font-bold text-gray-900">
                    HolidayMaker
                  </span>
                  <span className="truncate text-xs text-gray-500">Studio</span>
                </div>
              </div>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>

      <SidebarContent className="bg-gray-50 px-3 group-data-[collapsible=icon]:px-2">
        {/* Upload Button - Prominent like TikTok */}
        <div className="py-4 px-0 group-data-[collapsible=icon]:py-3">
          <Link href="/app/holidays/add">
            <Button className="w-full bg-red-500 hover:bg-red-600 text-white font-medium h-9 rounded-md shadow-sm transition-all hover:shadow-md group-data-[collapsible=icon]:w-8 group-data-[collapsible=icon]:h-8 group-data-[collapsible=icon]:p-0 group-data-[collapsible=icon]:rounded-md">
              <Plus className="h-4 w-4 group-data-[collapsible=icon]:h-4 group-data-[collapsible=icon]:w-4" />
              <span className="group-data-[collapsible=icon]:hidden ml-2">
                Add Holiday
              </span>
            </Button>
          </Link>
        </div>

        <SidebarGroup className="mt-2 group-data-[collapsible=icon]:mt-1">
          <SidebarGroupLabel className="text-xs font-medium text-gray-500 uppercase tracking-wider px-0 mb-2 group-data-[collapsible=icon]:hidden">
            MANAGE
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="space-y-0.5 group-data-[collapsible=icon]:space-y-1">
              {manageItems.map((item) => {
                const isActive = currentPath === item.url;
                return (
                  <SidebarMenuItem key={item.title}>
                    <Link href={item.url}>
                      <SidebarMenuButton
                        tooltip={item.title}
                        isActive={isActive}
                        className={`text-gray-600 hover:bg-gray-100 hover:text-gray-900 rounded-md h-9 font-normal transition-all group-data-[collapsible=icon]:h-8 group-data-[collapsible=icon]:w-8 group-data-[collapsible=icon]:p-0 group-data-[collapsible=icon]:justify-center ${
                          isActive
                            ? "bg-white text-gray-900 border border-gray-200 font-medium group-data-[collapsible=icon]:bg-white group-data-[collapsible=icon]:border group-data-[collapsible=icon]:border-gray-200"
                            : ""
                        }`}
                      >
                        <item.icon className="h-4 w-4 group-data-[collapsible=icon]:h-4 group-data-[collapsible=icon]:w-4" />
                        <span className="group-data-[collapsible=icon]:hidden">
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

        <SidebarGroup className="mt-6 group-data-[collapsible=icon]:mt-4">
          <SidebarGroupLabel className="text-xs font-medium text-gray-500 uppercase tracking-wider px-0 mb-2 group-data-[collapsible=icon]:hidden">
            OTHERS
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="space-y-0.5 group-data-[collapsible=icon]:space-y-1">
              {othersItems.map((item) => {
                const isActive = currentPath === item.url;
                return (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton
                      tooltip={item.title}
                      isActive={isActive}
                      className={`text-gray-600 hover:bg-gray-100 hover:text-gray-900 rounded-md h-9 font-normal transition-all group-data-[collapsible=icon]:h-8 group-data-[collapsible=icon]:w-8 group-data-[collapsible=icon]:p-0 group-data-[collapsible=icon]:justify-center ${
                        isActive
                          ? "bg-white text-gray-900 border border-gray-200 font-medium group-data-[collapsible=icon]:bg-white group-data-[collapsible=icon]:border group-data-[collapsible=icon]:border-gray-200"
                          : ""
                      }`}
                    >
                      <item.icon className="h-4 w-4 group-data-[collapsible=icon]:h-4 group-data-[collapsible=icon]:w-4" />
                      <span className="group-data-[collapsible=icon]:hidden">
                        {item.title}
                      </span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="border-t border-gray-200 bg-gray-50 px-3 py-3 group-data-[collapsible=icon]:px-2 group-data-[collapsible=icon]:py-3">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild tooltip="Your Account">
              <div className="flex items-center gap-3 cursor-pointer hover:bg-gray-100 rounded-md p-2 -m-2 transition-colors group-data-[collapsible=icon]:justify-center group-data-[collapsible=icon]:p-1 group-data-[collapsible=icon]:-m-1">
                <Avatar className="h-7 w-7 rounded-full group-data-[collapsible=icon]:h-6 group-data-[collapsible=icon]:w-6">
                  <AvatarImage
                    src="/placeholder.svg?height=32&width=32"
                    alt="User"
                  />
                  <AvatarFallback className="rounded-full bg-blue-100 text-blue-600 text-xs font-medium group-data-[collapsible=icon]:text-xs">
                    U
                  </AvatarFallback>
                </Avatar>
                <div className="grid flex-1 text-left text-sm leading-tight group-data-[collapsible=icon]:hidden">
                  <span className="truncate font-medium text-gray-900">
                    Your Account
                  </span>
                  <span className="truncate text-xs text-gray-500">
                    Manage profile
                  </span>
                </div>
              </div>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
