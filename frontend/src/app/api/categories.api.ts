'use server'

import { API } from "."

export const getAllCategories = async (): Promise<any> => {
  const { data } = await API.get("/categories/all")
  return data
}
