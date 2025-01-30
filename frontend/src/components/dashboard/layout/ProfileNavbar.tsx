"use client";
import React, { useState } from "react";
import { useUserStore } from "@/store/user.store";
import { useLogout } from "@/hooks/useLogout";

const ProfileNavbar = () => {
  const { data } = useUserStore();
  const { logout } = useLogout();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  const handleMenuToggle = () => {
    if (!isMenuOpen) {
      setIsMenuOpen(true);
      setTimeout(() => setShowMenu(true), 200);
    } else {
      setShowMenu(false);
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="relative flex items-center space-x-1">
      <span className="icon-[radix-icons--avatar] text-3xl"></span>
      <div className="flex items-center">
        <span className="text-base font-semibold">
          {data?.firstname ?? "Usuario"}
        </span>
        <span
          className={`icon-[uis--angle-down] cursor-pointer text-2xl mt-1 transform transition-transform duration-200 ${
            isMenuOpen ? "rotate-180" : "rotate-0"
          }`}
          onClick={handleMenuToggle}
        ></span>
      </div>
      {showMenu && (
        <div className="absolute right-0 mt-[75px] w-48 bg-white border rounded-md shadow-lg">
          <ul>
            <li
              className="px-4 py-2 text-sm text-primary hover:bg-gray-100 cursor-pointer"
              onClick={logout}
            >
              Cerrar sesión
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default ProfileNavbar;
