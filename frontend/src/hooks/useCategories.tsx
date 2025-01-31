"use client";
import { getAllCategories } from "@/app/api/categories.api";
import { useCategoriesStore } from "@/store/product.store";
import { Categorie } from "@/types/categories.type";
import { useMutation, useQueryClient, useQuery } from "@tanstack/react-query";
import { useEffect } from "react";

interface Response {
  data: Categorie[];
}

export function useCategories() {
  const queryClient = useQueryClient();
  const { setData } = useCategoriesStore();
  const { data, error, isFetching } = useQuery({
    queryKey: ["categories"],
    queryFn: getAllCategories,
  });

  // ejemplo de agregar categoria
  // const addCategoryQuery = useMutation({
  //   mutationFn: functionAddCategorieToApi,
  //   onSuccess: () => {
  //     queryClient.invalidateQueries({ queryKey: ["categories"] });
  //   },
  // });

  useEffect(() => {
    data && setData(data?.data);
  }, [data]);

  return {
    categoriesData: data?.data,
    categoriesError: error,
    isFetchingCategorie: isFetching,

    //ejepmlo retorno de informacion
    // addProduct: addCategoryQuery.mutate // esta es una funcion que le pasas la nueva categoria
    // isAdding: addCategoryQuery.isPending // boolean
    // addingError: addCategoryQuery.data // string (siempre y cuando el try catch de la funcion retorne string)
  };
}
