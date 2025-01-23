import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="flex items-center p-4 bg-primary">
      <Image
        src={"/logoWhite.png"}
        className="max-w-40 w-full"
        alt="logo"
        width={900}
        height={900}
      />
    </div>
  );
};

export default Footer;
