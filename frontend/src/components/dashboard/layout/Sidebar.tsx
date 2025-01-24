"use client";

import React, { useState } from "react";
import Image from "next/image";
import SidebarItem from "@/ui/sidebar/SidebarItem";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";
import { handleLogout } from "@/app/api/auth.api";

const Sidebar = () => {
  const router = useRouter();
  const [activeItem, setActiveItem] = useState<string>("/dashboard");

  const handleLogoutButton = async () => {
    Swal.fire({
      title: "¿Estás seguro?",
      text: "Cerraras tu sesión",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "var(--primary)",
      cancelButtonColor: "#777777",
      confirmButtonText: "Sí, cerrar sesión",
      cancelButtonText: "Cancelar",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const logoutResponse = await handleLogout();
        if (logoutResponse.wasValid) {
          Swal.fire({
            title: "¡Sesión cerrada!",
            text: "Has cerrado sesión exitosamente.",
            icon: "success",
            confirmButtonColor: "var(--primary)",
          }).then(() => {
            router.push("/");
          });
        } else {
          Swal.fire({
            title: "Error",
            text:
              logoutResponse.message || "Hubo un problema al cerrar sesión.",
            icon: "error",
            confirmButtonColor: "var(--primary)",
          });
        }
      }
    });
  };

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
          onClick={handleLogoutButton}
        />
      </div>
    </div>
  );
};

export default Sidebar;
