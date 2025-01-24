import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="flex flex-col text-white justify-center items-center p-4 bg-primary">
      <Image
        src={"/logoWhite.png"}
        className="max-w-40 w-full"
        alt="logo"
        width={900}
        height={900}
      />
      <div className="flex items-center w-[800px] my-4">
        {/* Línea izquierda */}
        <div className="h-[1px] bg-white flex-1"></div>

        <p className="mx-4 text-xl font-semibold text-center">Nuestro equipo</p>
        {/* Línea derecha */}
        <div className="h-[1px] bg-white flex-1"></div>
      </div>

      <div className="grid h-3/4 my-2 gap-4 md:gap-32 grid-cols-1 md:grid-cols-2">
        {/*  */}
        <div className="flex space-y-4 flex-col">
          <div className="flex space-x-3 items-center">
            <span className="icon-[grommet-icons--node] text-xl"></span>
            <p>Samuel Bernal - Backend developer</p>
          </div>

          <div className="flex space-x-3 items-center">
            <span className="icon-[fa6-brands--react] text-xl"></span>
            <p>Felipe Hernández - Frontend developer</p>
          </div>

          <div className="flex space-x-3 items-center">
            <span className="icon-[fa6-brands--react] text-xl"></span>
            <p>Isaias Romero - Frontend developer</p>
          </div>
        </div>
        {/*  */}
        <div className="flex space-y-4 flex-col">
          <div className="flex space-x-3 items-center justify-end">
            <p>Milagros Chuctaya - Ui/Ux</p>
            <span className="icon-[hugeicons--figma] text-xl"></span>
          </div>

          <div className="flex space-x-3 items-center justify-end">
            <p>Eduardo Moreno - Backend developer</p>
            <span className="icon-[grommet-icons--node] text-xl"></span>
          </div>

          <div className="flex space-x-3 items-center justify-end">
            <p>Jesus Soto - Frontend developer</p>
            <span className="icon-[fa6-brands--react] text-xl"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
