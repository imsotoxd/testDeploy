import Sidebar from "@/components/dashboard/layout/Sidebar";
import { ReactNode } from "react";
import DashboardNavbar from "@/components/dashboard/layout/NavBar";

function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex h-screen">
      <div className="w-64 fixed h-full z-10">
        <Sidebar />
      </div>

      <div className="flex flex-col flex-grow ml-64 overflow-y-auto">
        <DashboardNavbar />

        <div className="flex-grow h-full overflow-y-auto">{children}</div>
      </div>
    </div>
  );
}

export default DashboardLayout;
