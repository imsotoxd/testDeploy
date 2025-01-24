"use client";

import clsx from "clsx";
import { AnimatePresence, motion } from "framer-motion";
import { FC, useState } from "react";

interface Producto {
  data: {
    codigo: string;
    nombreProducto: string;
    categoria: string;
    fechaCaducidad: string;
    precioInicial: number;
    precioVenta: number;
    cantidad: number;
    estado: string;
  };
  isActive: boolean;
  toggleModal: () => void;
}

enum Stock {
  BAJO = "BAJO",
  NULO = "NULO",
  DISPONIBLE = "DISPONIBLE",
}

const ProductItem: FC<Producto> = ({ data, isActive, toggleModal }) => {
  const statusClass = clsx(
    "text-center grid grid-cols-10 gap-5 p-2 transition-colors",
    {
      "bg-zinc-100": isActive,
      "hover:bg-zinc-100": !isActive,
    }
  );
  const stockClass = clsx("font-semibold rounded text-xs w-fit h-fit p-1", {
    "text-red-800 bg-red-200": data.estado === Stock.NULO,
    "text-yellow-800 bg-yellow-200": data.estado === Stock.BAJO,
    "text-green-800 bg-green-200": data.estado === Stock.DISPONIBLE,
  });
  return (
    <li className={statusClass}>
      <span>{data.codigo}</span>
      <span className="col-span-2 text-start">{data.nombreProducto}</span>
      <span className="text-start">{data.categoria}</span>
      <span>{data.fechaCaducidad}</span>
      <span>{data.precioInicial}</span>
      <span>{data.precioVenta}</span>
      <span>{data.cantidad}</span>
      <span className={stockClass}>{data.estado}</span>
      <div className="relative">
        <button className=" w-fit px-2 mx-auto" onClick={() => toggleModal()}>
          <span
            className="icon-[solar--menu-dots-square-bold-duotone]"
            role="img"
            aria-hidden="true"
          />
          a
        </button>
        <AnimatePresence>
          {isActive && (
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              transition={{ duration: 0.15 }}
              className="absolute text-primary rounded text-xs border w-full top-0 mx-1 border-primary z-10  bg-white  shadow-sm"
            >
              <button className="btn-sm w-full btn btn-ghost rounded-none flex items-center justify-center">
                <span>Editar</span>
                {/* <span
                  className="icon-[ph--pencil-simple-duotone]"
                  role="img"
                  aria-hidden="true"
                /> */}
              </button>
              <button className="btn-sm w-full btn btn-ghost rounded-none flex items-center justify-center">
                <span>Borrar</span>
                {/* <span
                  className="icon-[solar--trash-bin-minimalistic-bold-duotone]"
                  role="img"
                  aria-hidden="true"
                /> */}
              </button>
              <button
                onClick={toggleModal}
                className="btn-sm w-full btn btn-ghost rounded-none flex items-center justify-center"
              >
                <span>Cancelar</span>
                {/* <span
                  className="icon-[iconamoon--sign-times-duotone]"
                  role="img"
                  aria-hidden="true"
                /> */}
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </li>
  );
};

export default ProductItem;
