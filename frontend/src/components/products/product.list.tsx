"use client";
import { useEffect, useState } from "react";
import ProductItem from "./product.item";
import { useQuery } from "@tanstack/react-query";
import { getAllProducts } from "@/app/api/product.api";
import { useFilterProduct } from "@/store/product.store";

export function ProductList() {
  const [isVisible, setIsVisible] = useState<string | null>(null);
  const openModal = (code: string) => {
    setIsVisible(code);
  };
  const closeModal = () => setIsVisible(null);

  const { data, isError, isLoading, error } = useQuery<ProductsResponse[]>({
    queryKey: ["products"],
    queryFn: getAllProducts,
  });
  const { filter } = useFilterProduct();
  const [products, setProducts] = useState<ProductsResponse[]>([]);
  if (isLoading) return <p>Loading...</p>;
  if (isError && !data) return <p>{error.message}</p>;

  useEffect(() => {
    const res = data?.filter((product) => {
      return (
        product.categoryId === filter ||
        product.name.toLowerCase().includes(filter.toLowerCase())
      );
    });
    if (res) setProducts(res);
    else setProducts(data as ProductsResponse[]);
  }, [filter]);

  return (
    <div className="flex flex-col gap-5 mb-5">
      {
        <ul className="max-w-6xl mx-auto text-sm">
          <li className="text-center rounded-t bg-primary gap-5 text-white grid grid-cols-9 p-2 transition-colors">
            <span className="col-span-2 text-start">Producto</span>
            <span className="text-start col-span-2">Categoria</span>
            <span>Caducidad</span>
            <span>P. Inicial</span>
            <span>P. Venta</span>
            <span>Cantidad</span>
            <span>Estado</span>
          </li>
          {products?.map((product, index) => (
            <ProductItem
              data={product}
              key={index}
              isActive={isVisible === product.id}
              openModal={() => openModal(product.id)}
              closeModal={closeModal}
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

export default ProductList;

export interface ProductsResponse {
  id: string;
  sku: string;
  name: string;
  description: string;
  quantity: number;
  finalPrice: number;
  costPrice: number;
  expirationDate: string | null;
  minimumQuantity: number;
  activated: boolean;
  userId: string;
  categoryId: string;
  createdAt: Date;
  updatedAt: Date;
}
