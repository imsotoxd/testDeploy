"use client";
import { useState } from "react";
import ProductItem from "./product.item";

function ProductList() {
  const [isVisible, setIsVisible] = useState<string | null>(null);
  const toggleModal = (codigo: string) => {
    setIsVisible((prev) => (prev === codigo ? null : codigo));
  };
  return (
    <div className="flex flex-col gap-5 mb-5">
      {
        <ul className="max-w-6xl mx-auto text-sm">
          <li className="text-center rounded-t bg-primary gap-5 text-white grid grid-cols-10 p-2 transition-colors">
            <span>Código</span>
            <span className="col-span-2 text-start">Producto</span>
            <span className="text-start">Categoria</span>
            <span>Caducidad</span>
            <span>P. Inicial</span>
            <span>P. Venta</span>
            <span>Cantidad</span>
            <span>Estado</span>
          </li>
          {Products.map((product, index) => (
            <ProductItem
              data={product}
              key={index}
              isActive={isVisible === product.codigo}
              toggleModal={() => toggleModal(product.codigo)}
            />
          ))}
        </ul>
      }

      <div className="join self-center">
        <button className="join-item btn btn-primary btn-md">1</button>
        <button className="join-item btn btn-primary btn-md btn-active">
          2
        </button>
        <button className="join-item btn btn-primary btn-md">3</button>
        <button className="join-item btn btn-primary btn-md">4</button>
      </div>
    </div>
  );
}

const Products = [
  {
    codigo: "F001",
    nombreProducto: "Taladro Eléctrico 500W",
    categoria: "Herramientas",
    fechaCaducidad: "N/A",
    precioInicial: 50.0,
    precioVenta: 75.0,
    cantidad: 20,
    estado: "BAJO",
  },
  {
    codigo: "F002",
    nombreProducto: "Sierra Circular 1500W",
    categoria: "Herramientas",
    fechaCaducidad: "N/A",
    precioInicial: 100.0,
    precioVenta: 150.0,
    cantidad: 15,
    estado: "NULO",
  },
  {
    codigo: "F003",
    nombreProducto: "Juego de Llaves",
    categoria: "Herramientas",
    fechaCaducidad: "N/A",
    precioInicial: 30.0,
    precioVenta: 45.0,
    cantidad: 50,
    estado: "DISPONIBLE",
  },
  {
    codigo: "F004",
    nombreProducto: "Caja de Clavos 1kg",
    categoria: "Construcción",
    fechaCaducidad: "N/A",
    precioInicial: 5.0,
    precioVenta: 8.0,
    cantidad: 100,
    estado: "DISPONIBLE",
  },
  {
    codigo: "F005",
    nombreProducto: "Pintura Blanca 4L",
    categoria: "Pintura",
    fechaCaducidad: "2026-12-31",
    precioInicial: 25.0,
    precioVenta: 40.0,
    cantidad: 10,
    estado: "BAJO",
  },
  {
    codigo: "F006",
    nombreProducto: "Martillo de Carpintero",
    categoria: "Herramientas",
    fechaCaducidad: "N/A",
    precioInicial: 10.0,
    precioVenta: 15.0,
    cantidad: 25,
    estado: "NULO",
  },
  {
    codigo: "F007",
    nombreProducto: "Cinta Métrica 5m",
    categoria: "Medición",
    fechaCaducidad: "N/A",
    precioInicial: 7.0,
    precioVenta: 10.0,
    cantidad: 35,
    estado: "DISPONIBLE",
  },
  {
    codigo: "F008",
    nombreProducto: "Taladro Inalámbrico 18V",
    categoria: "Herramientas",
    fechaCaducidad: "N/A",
    precioInicial: 120.0,
    precioVenta: 180.0,
    cantidad: 5,
    estado: "BAJO",
  },
  {
    codigo: "F009",
    nombreProducto: "Destornillador de Precisión",
    categoria: "Herramientas",
    fechaCaducidad: "N/A",
    precioInicial: 8.0,
    precioVenta: 12.0,
    cantidad: 40,
    estado: "NULO",
  },
  {
    codigo: "F010",
    nombreProducto: "Soldador Eléctrico 30W",
    categoria: "Electrónica",
    fechaCaducidad: "N/A",
    precioInicial: 15.0,
    precioVenta: 25.0,
    cantidad: 12,
    estado: "DISPONIBLE",
  },
  // {
  //   codigo: "F011",
  //   nombreProducto: "Broca de Concreto",
  //   categoria: "Herramientas",
  //   fechaCaducidad: "N/A",
  //   precioInicial: 4.0,
  //   precioVenta: 6.0,
  //   cantidad: 60,
  //   estado: "DISPONIBLE",
  // },
  // {
  //   codigo: "F012",
  //   nombreProducto: "Guantes de Seguridad",
  //   categoria: "Seguridad",
  //   fechaCaducidad: "N/A",
  //   precioInicial: 3.0,
  //   precioVenta: 5.0,
  //   cantidad: 30,
  //   estado: "NULO",
  // },
  // {
  //   codigo: "F013",
  //   nombreProducto: "Escalera de Aluminio",
  //   categoria: "Construcción",
  //   fechaCaducidad: "N/A",
  //   precioInicial: 50.0,
  //   precioVenta: 75.0,
  //   cantidad: 8,
  //   estado: "BAJO",
  // },
  // {
  //   codigo: "F014",
  //   nombreProducto: "Adhesivo Epóxico",
  //   categoria: "Construcción",
  //   fechaCaducidad: "2025-09-30",
  //   precioInicial: 10.0,
  //   precioVenta: 15.0,
  //   cantidad: 20,
  //   estado: "DISPONIBLE",
  // },
  // {
  //   codigo: "F015",
  //   nombreProducto: "Nivel de Burbuja",
  //   categoria: "Medición",
  //   fechaCaducidad: "N/A",
  //   precioInicial: 12.0,
  //   precioVenta: 18.0,
  //   cantidad: 22,
  //   estado: "DISPONIBLE",
  // },
  // {
  //   codigo: "F016",
  //   nombreProducto: "Cortadora de Azulejos",
  //   categoria: "Construcción",
  //   fechaCaducidad: "N/A",
  //   precioInicial: 70.0,
  //   precioVenta: 100.0,
  //   cantidad: 7,
  //   estado: "BAJO",
  // },
  // {
  //   codigo: "F017",
  //   nombreProducto: "Llave Inglesa",
  //   categoria: "Herramientas",
  //   fechaCaducidad: "N/A",
  //   precioInicial: 20.0,
  //   precioVenta: 30.0,
  //   cantidad: 18,
  //   estado: "NULO",
  // },
  // {
  //   codigo: "F018",
  //   nombreProducto: "Mascarilla de Seguridad",
  //   categoria: "Seguridad",
  //   fechaCaducidad: "2024-06-30",
  //   precioInicial: 2.0,
  //   precioVenta: 4.0,
  //   cantidad: 100,
  //   estado: "DISPONIBLE",
  // },
  // {
  //   codigo: "F019",
  //   nombreProducto: "Cortadora de Madera 2000W",
  //   categoria: "Herramientas",
  //   fechaCaducidad: "N/A",
  //   precioInicial: 150.0,
  //   precioVenta: 200.0,
  //   cantidad: 4,
  //   estado: "BAJO",
  // },
  // {
  //   codigo: "F020",
  //   nombreProducto: "Cerradura de Seguridad",
  //   categoria: "Seguridad",
  //   fechaCaducidad: "N/A",
  //   precioInicial: 40.0,
  //   precioVenta: 60.0,
  //   cantidad: 14,
  //   estado: "NULO",
  // },
];

export default ProductList;
