import { AppSidebar } from "@/components/app-sidebar";
import AppHeader from "@/components/app-header";
import { SidebarProvider } from "@/components/ui/sidebar";

export default async function AppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <div className="flex flex-col flex-1">
        <AppHeader />
        <main className="relative flex min-h-svh flex-1 flex-col bg-gray-50 p-6">
          {children}
        </main>
      </div>
    </SidebarProvider>
  );
}
