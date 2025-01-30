"use server";
import {
  ProductSchema,
} from "@/lib/schemas/products.schema";
import { API } from ".";
import { randomUUID } from "crypto";
import { MutationResponse, ProductsResponse, QueriesResponse } from "@/types/product.types";


export const getAllProducts = async (pageParam: number): Promise<QueriesResponse> => {
  try {
    const { data } = await API.get(`/product/query?filter[totalProducts]=true&limit=10&page=${pageParam}`);
    return {
      data: data.products,
      pagination: {
        currentPage: data.currentPage,
        totalPages: data.totalPages,
      },
    };
  } catch (error: any) {
    return { data: [], pagination: null, error: error.response?.data?.message || error.message };
  }
};


export const postProduct = async (
  product: ProductSchema,
): Promise<MutationResponse> => {
  const newProduct = {
    ...product,
    sku: randomUUID(),
  };
  try {
    const { data } = await API.post("/products", newProduct);
    return { success: true, data };
  } catch (error: any) {
    return { success: false, error: error.response.data.message || error.message };
  }
};

export const deleteProduct = async (id: string): Promise<MutationResponse> => {
  try {
    const { data } = await API.delete(`/products/delete/${id}`);
    return { success: true, data };
  } catch (error: any) {
    return { success: false, error: error.response.data.message || error.message };
  }
};

export const putProduct = async (
  product: ProductsResponse
): Promise<MutationResponse> => {
  try {
    const { data } = await API.put(`/products/update`, product);
    return { success: true, data };
  } catch (error: any) {
    return { success: false, error: error.response.data.message || error.message };
  }
};

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
