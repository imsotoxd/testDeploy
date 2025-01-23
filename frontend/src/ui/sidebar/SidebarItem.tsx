import React from "react";

interface SidebarItemProps {
  text: string;
  icon: string;
  isActive: boolean;
  onClick: () => void;
}

const SidebarItem: React.FC<SidebarItemProps> = ({
  text,
  icon,
  isActive,
  onClick,
}) => {
  return (
    <div
      onClick={onClick}
      className={`flex items-center space-x-4 px-1 py-4 rounded-md  transition-all duration-300 group ${
        isActive
          ? " shadow-md scale-150 shadow-white group-text-primary"
          : "hover:bg-gray-100 hover:shadow-2xl hover:text-primary cursor-pointer text-white"
      }`}
    >
      <span
        className={`${icon} size-6 transition-colors duration-300 ${
          isActive ? "text-white" : "group-hover:text-primary"
        }`}
      ></span>
      <p
        className={`transition-colors duration-300 ${
          isActive ? "text-white" : "group-hover:text-primary"
        }`}
      >
        {text}
      </p>
    </div>
  );
};

export default SidebarItem;
