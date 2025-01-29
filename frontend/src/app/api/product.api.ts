"use server";

import { API } from ".";

const fetchProductsByFilter = async (filter: string) => {
  try {
    const { data } = await API.get(`/product/query?filter[${filter}]=10`);

    if (data.products && data.products.length > 0) {
      return data.products;
    } else {
      return [];
    }
  } catch (error) {
    throw error;
  }
};

export const handleStock = async () => fetchProductsByFilter("nonZeroQuantity");

export const handleLowStock = async () =>
  fetchProductsByFilter("minimumQuantity");

export const handleZeroStock = async () =>
  fetchProductsByFilter("zeroQuantity");
