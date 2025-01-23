"use client";

import React from "react";
import Image from "next/image";
import SidebarItem from "@/ui/sidebar/SidebarItem";
import { useRouter, usePathname } from "next/navigation";

const Sidebar = () => {
  const router = useRouter();
  const currentPath = usePathname();

  return (
    <div className="w-[250px] flex flex-col px-8 text-white py-10 h-screen bg-primary">
      <Image src="/logoWhite.png" alt="logo" width={180} height={65} />

      <div className="flex flex-col space-y-3 mt-12">
        <SidebarItem
          text="Inicio"
          icon="icon-[lineicons--home]"
          isActive={currentPath === "/dashboard"}
          onClick={() => router.push("/dashboard")}
        />

        <SidebarItem
          text="Productos"
          icon="icon-[lsicon--goods-outline]"
          isActive={currentPath === "/dashboard/products"}
          onClick={() => router.push("/dashboard/products")}
        />

        <SidebarItem
          text="Administración"
          icon="icon-[clarity--administrator-line]"
          isActive={currentPath === "/dashboard/admin"}
          onClick={() => router.push("/dashboard/admin")}
        />

        <SidebarItem
          text="Cerrar sesión"
          icon="icon-[material-symbols--logout]"
          isActive={currentPath === "/dashboard/logout"}
          onClick={() => alert("Cerar sesión")}
        />
      </div>
    </div>
  );
};

export default Sidebar;
