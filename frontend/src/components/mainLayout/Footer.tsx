import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="h-[192px] flex items-center p-4 bg-primary">
      <Image src={"/logoWhite.svg"} alt="logo" width={264} height={117} />
    </div>
  );
};

export default Footer;
