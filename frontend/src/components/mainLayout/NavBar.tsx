"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeItem, setActiveItem] = useState("#hero");

  const navItems = [
    { name: "Inicio", href: "#hero" },
    { name: "Funcionalidades", href: "#features" },
    { name: "Beneficios", href: "#benefits" },
    { name: "Precios", href: "#pricing" },
    { name: "Reseñas", href: "#reviews" },
  ];

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <div className="flex justify-between items-center px-5 py-3 sticky top-0 bg-white z-10">
      <Image
        src="/logo.svg"
        alt="logo"
        className="max-w-40 w-full"
        width={900}
        height={900}
      />

      <div className="hidden lg:flex lg:justify-center lg:items-center space-x-2">
        {navItems.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            onClick={() => setActiveItem(item.href)}
            className="btn btn-ghost"
          >
            {item.name}
          </Link>
        ))}
        <Link href="/auth" className="btn btn-neutral">
          iniciar sesión
        </Link>
      </div>

      {/* Responsive */}
      <button
        onClick={toggleMenu}
        className="lg:hidden flex flex-col space-y-2"
        aria-label="Toggle menu"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="text-primary size-10"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
          />
        </svg>
      </button>

      {/* Menu */}
      <div
        className={`${
          isMenuOpen ? "block" : "hidden"
        } absolute top-20 right-4 bg-white p-6 shadow-lg rounded-xl lg:hidden`}
      >
        <div className="flex flex-col gap-1">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="btn btn-ghost"
              onClick={() => setIsMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}
          <Link
            href="/auth"
            className=" btn btn-neutral"
            onClick={() => setIsMenuOpen(false)}
          >
            iniciar sesión
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
