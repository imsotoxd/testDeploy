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
    { name: "Reseñas", href: "#review" },
  ];

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <div className="flex justify-between items-center p-4 md:p-8">
      <Image src="/logo.svg" alt="logo" width={264} height={117} />

      <div className="hidden md:flex md:justify-center md:items-center space-x-11">
        {navItems.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            onClick={() => setActiveItem(item.href)}
            className={`text-primary text-2xl   ${
              activeItem === item.href ? "font-bold" : "font-normal"
            }`}
          >
            {item.name}
          </Link>
        ))}
        <Link
          href="/auth"
          className="bg-primary rounded-xl text-2xl text-white px-6 py-2"
        >
          iniciar sesión
        </Link>
      </div>

      {/* Responsive */}
      <button
        onClick={toggleMenu}
        className="md:hidden flex flex-col space-y-2"
        aria-label="Toggle menu"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          className="text-primary size-10"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
          />
        </svg>
      </button>
      {/* Menu */}
      <div
        className={`${
          isMenuOpen ? "block" : "hidden"
        } absolute top-20 right-4 bg-white p-6 shadow-lg rounded-xl md:hidden`}
      >
        <div className="space-y-4">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="block text-primary text-xl"
              onClick={() => setIsMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}
          <Link
            href="/auth"
            className="block text-primary text-xl bg-primary rounded-xl text-white px-6 py-2"
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
