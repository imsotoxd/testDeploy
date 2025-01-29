import React from "react";
import Link from "next/link";

interface ProductListModalProps {
  close: () => void;
  products: ProductModal[];
  title: string;
}

export interface ProductModal {
  name: string;
  quantity: number;
}

const ProductListModal: React.FC<ProductListModalProps> = ({
  close,
  products,
  title,
}) => {
  return (
    <div className="bg-white  px-8 rounded-lg relative">
      {/* Botón de cierre */}
      <button
        onClick={close}
        className="absolute top-0 right-2 text-gray-500 hover:text-gray-800 font-bold text-lg"
      >
        <span className="icon-[mdi--close-box] size-8"></span>
      </button>

      {/* Título del modal */}
      <h2 className="text-center text-2xl font-bold text-primary mb-6">{`Listado de ${title}`}</h2>

      <div className="modal-body">
        {products.length > 0 ? (
          <div className="grid grid-cols-7 gap-4 items-center">
            {/* Encabezados */}
            <div className="col-span-1 font-bold text-primary">No.</div>
            <div className="col-span-4 font-bold text-primary">Producto</div>
            <div className="col-span-2 font-bold text-primary">Cantidad</div>

            {/* Renderizado de productos */}
            {products.map((product, index) => (
              <React.Fragment key={index}>
                <div className="col-span-1 text-[#333333]">{index + 1}</div>
                <div className="col-span-4 text-[#333333]">{product.name}</div>
                <div className="col-span-2 text-[#333333]">
                  {product.quantity}
                </div>
              </React.Fragment>
            ))}
          </div>
        ) : (
          <p className="text-gray-500 text-center">
            No hay productos disponibles
          </p>
        )}
      </div>
      <div className="mt-8 flex justify-end">
        <Link href={"/dashboard/products"}>
          <button className="bg-primary text-white px-4 py-2 rounded-xl">
            Ver todos los productos
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ProductListModal;
