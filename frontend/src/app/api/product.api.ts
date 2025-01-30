"use server";
import {
  OptionalProductSchema,
  ProductSchema,
} from "@/lib/schemas/products.schema";
import { API } from ".";
import { randomUUID } from "crypto";
import { ProductsResponse } from "@/components/products/product.list";

interface response {
  message: string;
  errors?: ErrorPost[];
  wasValid: boolean;
  data?: ProductsResponse;
}

interface ErrorPost {
  type: string;
  msg: string;
  path: string;
  location: string;
}

export const getAllProducts = async (): Promise<any> => {
  const { data } = await API.get("/products/all");
  return data;
};

export const postProduct = async (
  product: ProductSchema,
  userId: string | undefined
): Promise<response> => {
  const newProduct = {
    ...product,
    sku: randomUUID(),
    userId,
  };
  try {
    const { data } = await API.post("/products", newProduct);
    return {
      message: data.message,
      wasValid: true,
      data: data.product,
    };
  } catch (error: any) {
    return {
      message: error.response.data.message,
      errors: error.response.data.errors,
      wasValid: false,
    };
  }
};

export const deleteProduct = async (id: string): Promise<response> => {
  try {
    const { data } = await API.delete(`/products/delete/${id}`);
    return {
      message: data.message,
      wasValid: true,
      data: data.product,
    };
  } catch (error: any) {
    return {
      message: error.response.data.message,
      errors: error.response.data.errors,
      wasValid: false,
    };
  }
};

export const putProduct = async (
  product: ProductsResponse,
  id: string | undefined
): Promise<response> => {
  try {
    const { data } = await API.put(`/products/update/${id}`, product);
    return {
      message: data.message,
      wasValid: true,
      data: data.product,
    };
  } catch (error: any) {
    return {
      message: error.response.data.message,
      errors: error.response.data.errors,
      wasValid: false,
    };
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
