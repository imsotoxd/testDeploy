// app/actions/product.actions.ts
"use server";

import { API } from ".";

const fetchProductsByFilter = async (filter: string) => {
  try {
    const { data } = await API.get(`/product/query?filter[${filter}]=10`);

    if (data.products && data.products.length > 0) {
      console.log(`Productos filtrados por ${filter}:`, data.products);
      return data.products.length;
    } else {
      console.log(`No hay productos con el filtro ${filter}.`);
      return 0;
    }
  } catch (error) {
    console.error(`Error al obtener productos con el filtro ${filter}:`, error);
    throw error;
  }
};

export const handleStock = async () => fetchProductsByFilter("nonZeroQuantity");

export const handleLowStock = async () =>
  fetchProductsByFilter("minimumQuantity");

export const handleZeroStock = async () =>
  fetchProductsByFilter("zeroQuantity");
