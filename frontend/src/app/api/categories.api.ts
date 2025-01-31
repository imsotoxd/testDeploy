'use server'
import { API } from "."
import { QueryCategoryResponse } from "@/types/categories.type"

export const getAllCategories = async (): Promise<QueryCategoryResponse> => {
  try {
    const { data } = await API.get("/categories/all")
    return {
      data: data.data,
    }
  } catch (error: any) {
    return {
      data: [],
      error: error.response.data.errors[0].msg || error.message
    }
  }
}
