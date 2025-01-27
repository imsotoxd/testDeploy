import Sidebar from "@/components/dashboard/layout/Sidebar";
import { ReactNode } from "react";
import DashboardNavbar from "@/components/dashboard/layout/NavBar";

function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex flex-col flex-grow">
        <DashboardNavbar />
        <div className="flex-grow">{children}</div>
      </div>
    </div>
  );
}

export default DashboardLayout;
