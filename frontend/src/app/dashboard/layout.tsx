import Sidebar from "@/components/dashboard/layout/Sidebar";
import { ReactNode } from "react";

function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex h-screen">
      <Sidebar />
      {children}
    </div>
  );
}

export default DashboardLayout;
