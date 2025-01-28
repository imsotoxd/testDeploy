"use client";
import type React from "react";
import clsx from "clsx";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

interface SidebarItemProps {
  text: string;
  icon: string;
  path: string;
}

const SidebarItem: React.FC<SidebarItemProps> = ({ text, icon, path }) => {
  const router = useRouter();
  const pathname = usePathname();
  const handleRouter = () => router.push(path);
  const isActive = pathname === path;
  const sharedClass = clsx("relative transition-colors duration-300 ", {
    "text-primary": isActive,
  });
  const iconClass = clsx(sharedClass, icon, "text-2xl");
  const textClass = clsx(sharedClass, "text-sm font-medium");
  return (
    <button
      onClick={handleRouter}
      className="flex w-full relative items-center gap-3 rounded-md py-3 px-3"
    >
      {isActive && (
        <motion.div layoutId="pill" className="inset-0 absolute rounded bg-white" />
      )}
      <span className={iconClass} />
      <span className={textClass}>{text}</span>
    </button>
  );
};

export default SidebarItem;
