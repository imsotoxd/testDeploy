import type React from "react";
import clsx from "clsx";

interface SidebarItemProps {
  text: string;
  icon: string;
  isActive: boolean;
  onClick: () => void;
}

const SidebarItem: React.FC<SidebarItemProps> = ({
  text,
  icon,
  isActive = false,
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      className={clsx(
        "flex w-full items-center gap-3 rounded-md py-3 px-3",
        "transition-all duration-300",
        isActive
          ? "bg-white text-primary font-bold justify-center"
          : "text-white/70 hover:bg-white/10 hover:text-white"
      )}
    >
      <span
        className={clsx(
          icon,
          "text-2xl transition-colors duration-300",
          isActive ? "text-primary" : "text-white/70"
        )}
      />
      <span
        className={clsx(
          "text-sm font-medium transition-colors duration-300",
          isActive ? "text-primary" : "text-white/70"
        )}
      >
        {text}
      </span>
    </button>
  );
};

export default SidebarItem;
