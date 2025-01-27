"use client";
import React, { useState } from "react";
import Image from "next/image";
import SidebarItem from "@/ui/sidebar/SidebarItem";
import { useRouter } from "next/navigation";
import { useLogout } from "@/hooks/useLogout";

const Sidebar = () => {
  const { logout } = useLogout();
  const router = useRouter();
  const [activeItem, setActiveItem] = useState<string>("/dashboard");

  return (
    <div className="flex flex-col w-[250px] px-4 text-white py-10 h-screen bg-primary">
      <div className="mb-8">
        <Image src="/logoWhite.png" alt="logo" width={180} height={65} />
      </div>

      <nav className="flex-grow mt-4">
        <ul className="space-y-2">
          <li>
            <SidebarItem
              text="Inicio"
              icon="icon-[lineicons--home]"
              isActive={activeItem === "/dashboard"}
              onClick={() => {
                setActiveItem("/dashboard");
                router.push("/dashboard");
              }}
            />
          </li>
          <li>
            <SidebarItem
              text="Productos"
              icon="icon-[lsicon--goods-outline]"
              isActive={activeItem === "/dashboard/products"}
              onClick={() => {
                setActiveItem("/dashboard/products");
                router.push("/dashboard/products");
              }}
            />
          </li>
          <li>
            <SidebarItem
              text="Registro de E/S"
              icon="icon-[tabler--arrows-diff]"
              isActive={activeItem === "/dashboard/movements"}
              onClick={() => {
                setActiveItem("/dashboard/movements");
                router.push("/dashboard/movements");
              }}
            />
          </li>
          <li>
            <SidebarItem
              text="Administración"
              icon="icon-[clarity--administrator-line]"
              isActive={activeItem === "/dashboard/admin"}
              onClick={() => {
                setActiveItem("/dashboard/admin");
                router.push("/dashboard/admin");
              }}
            />
          </li>
        </ul>
      </nav>

      <div className="mt-auto">
        <SidebarItem
          text="Cerrar sesión"
          icon="icon-[material-symbols--logout]"
          isActive={activeItem === "/dashboard/logout"}
          onClick={logout}
        />
      </div>
    </div>
  );
};

export default Sidebar;
