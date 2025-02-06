"use client";
import { getAllCategories } from "@/app/api/categories.api";
import { useCategoriesStore } from "@/store/product.store";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { useUserStore } from "@/store/user.store";

export function useCategories() {
  const { setData } = useCategoriesStore();
  const { data: userData } = useUserStore();

  const { data, isFetching } = useQuery({
    queryKey: ["categories", userData?.id],
    queryFn: () => {
      if (!userData?.id) return Promise.reject("No hay ID disponible")
      return getAllCategories()
    },
    enabled: !!userData?.id,
  });

  useEffect(() => {
    if (data?.data) {
      setData(data.data);
    }
  }, [data?.data, setData]);

  return {
    categoriesData: data?.data ?? [],
    categoriesError: data?.error,
    isFetchingCategorie: isFetching,
  };
}
