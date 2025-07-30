import { AppSidebar } from "@/components/app-sidebar";
import AppHeader from "@/components/app-header";
import { SidebarProvider } from "@/components/ui/sidebar";
import { ConvexClientProvider } from "@/components/convex-client-provider";

export default async function AppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ConvexClientProvider>
      <SidebarProvider>
        <AppSidebar />
        <div className="flex flex-col flex-1">
          <AppHeader />
          <main className="relative flex min-h-svh flex-1 flex-col bg-gray-50 p-6">
            {children}
          </main>
        </div>
      </SidebarProvider>
    </ConvexClientProvider>
  );
}
