"use client";
import { useState } from "react";
import { useProducts } from "@/hooks/useProduct";
import ProductItem from "./product.item";
import ProductItemSkeleton from "./product.item.skeleton";

export function ProductList() {
  const [isVisible, setIsVisible] = useState<string | null>(null);
  const [currentPageIndex, setCurrentPageIndex] = useState(0);

  const {
    products,
    error,
    isLoading,
    hasPreviousPage,
    hasNextPage,
    fetchNextPage,
  } = useProducts();

  const currentPage = products?.pages[currentPageIndex]?.data ?? [];

  const openModal = (code: string) => setIsVisible(code);
  const closeModal = () => setIsVisible(null);

  const handleNextPage = () => {
    if (!products) return;
    if (currentPageIndex === products.pages.length - 1) fetchNextPage();
    setCurrentPageIndex((prev) => prev + 1);
  };
  console.log(products)
  const handlePreviousPage = () => {
    if (currentPageIndex > 0) setCurrentPageIndex((prev) => prev - 1);
  };

  return (
    <div className="flex flex-col h-full justify-between gap-5 mb-5 mt-5 w-full">
      <ul className="max-w-6xl mx-auto h-full shadow-sm text-sm w-full">
        {/* Mejorado para SEO y accesibilidad con etiqueta <thead> */}
        <li
          className="text-center rounded-t bg-primary gap-5 text-white sticky top-0 grid grid-cols-9 p-2 transition-colors"
          role="row"
        >
          <span className="col-span-2 text-start font-bold">Producto</span>
          <span className="text-start col-span-2 font-bold">Categoría</span>
          <span className="font-bold">Caducidad</span>
          <span className="font-bold">P. Inicial</span>
          <span className="font-bold">P. Venta</span>
          <span className="font-bold">Cantidad</span>
          <span className="font-bold">Estado</span>
        </li>
        {isLoading && <ProductItemSkeleton />}
        {error && (
          <div className="alert" role="alert">
            <span
              className="icon-[iconamoon--sign-times-duotone]"
              aria-hidden="true"
            />
            {/* <span>{error}</span> */}
          </div>
        )}
        {currentPage.length === 0 && !isLoading && (
          <div className="alert mt-5" role="alert">
            <span
              className="icon-[iconamoon--sign-times-duotone]"
              aria-hidden="true"
            />
            <span>No hay productos</span>
          </div>
        )}
        {currentPage.map((product) => (
          <ProductItem
            key={product.id} // Se cambió index por id para evitar problemas de rendimiento
            data={product}
            isActive={isVisible === product.id}
            openModal={() => openModal(product.id)}
            closeModal={closeModal}
          />
        ))}
      </ul>

      <div className="join self-center">
        <button
          onClick={handlePreviousPage}
          disabled={!hasPreviousPage || currentPageIndex === 0 || isLoading}
          className="disabled:cursor-not-allowed join-item btn btn-primary btn-md"
          aria-disabled={
            !hasPreviousPage || currentPageIndex === 0 || isLoading
          }
        >
          <span className="icon-[ps--left]" aria-hidden="true" />
          <span>Anterior</span>
        </button>
        <button
          onClick={handleNextPage}
          disabled={
            (!hasNextPage &&
              currentPageIndex === (products?.pages?.length ?? 0) - 1) ||
            isLoading
          }
          className="disabled:cursor-not-allowed join-item btn btn-primary btn-md"
          aria-disabled={
            (!hasNextPage &&
              currentPageIndex === (products?.pages?.length ?? 0) - 1) ||
            isLoading
          }
        >
          <span>Siguiente</span>
          <span className="icon-[ps--right]" aria-hidden="true" />
        </button>
      </div>
    </div>
  );
}

export default ProductList;
