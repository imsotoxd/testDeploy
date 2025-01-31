"use server";
import { API } from ".";
import { QueryCategoryResponse } from "@/types/categories.type";
import { ErrorResponse } from "./auth.api";
import { AxiosError } from "axios";

interface CategoryErrorResponse extends ErrorResponse {
  errors?: Array<{
    msg: string;
  }>;
}

export const getAllCategories = async (): Promise<QueryCategoryResponse> => {
  try {
    const { data } = await API.get("/categories/all");
    return {
      data: data.data,
    };
  } catch (error) {
    const axiosError = error as AxiosError<CategoryErrorResponse>;
    return {
      data: [],
      error:
        axiosError.response?.data?.errors?.[0]?.msg ||
        axiosError.message ||
        "Error al obtener categorías",
    };
  }
};
