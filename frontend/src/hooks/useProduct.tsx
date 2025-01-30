"use client";
import {
  useMutation,
  useQueryClient,
  useInfiniteQuery,
} from "@tanstack/react-query";
import {
  getAllProducts,
  putProduct,
  deleteProduct,
  postProduct,
} from "@/app/api/product.api";
import { QueriesResponse } from "@/types/product.types";

export function useProducts() {
  const queryClient = useQueryClient();

  const {
    data: productsQuery,
    fetchNextPage,
    hasNextPage,
    hasPreviousPage,
    isLoading,
    error,
  } = useInfiniteQuery<QueriesResponse>({
    queryKey: ["infinityProducts"],
    queryFn: ({ pageParam = 1 }) => getAllProducts(Number(pageParam)),
    initialPageParam: 1,
    getNextPageParam: (lastPage) => {
      if (!lastPage.pagination) return undefined;
      const { currentPage, totalPages } = lastPage.pagination;
      return currentPage < totalPages ? currentPage + 1 : undefined;
    },
  });

  const addProductQuery = useMutation({
    mutationFn: postProduct,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["infinityProducts"] });
    },
  });

  const updateProductQuery = useMutation({
    mutationFn: putProduct,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["infinityProducts"] });
    },
  });

  const deleteProductQuery = useMutation({
    mutationFn: deleteProduct,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["infinityProducts"] });
    },
  });

  return {
    products: productsQuery,
    isLoading,
    error,
    fetchNextPage,
    hasNextPage,
    hasPreviousPage,

    createProduct: addProductQuery.mutate,
    updateProduct: updateProductQuery.mutate,
    deleteProduct: deleteProductQuery.mutate,

    isCreating: addProductQuery.isPending,
    isUpdating: updateProductQuery.isPending,
    isDeleting: deleteProductQuery.isPending,

    hasCreated: addProductQuery.isSuccess,
    hasUpdated: updateProductQuery.isSuccess,
    hasDeleted: deleteProductQuery.isSuccess,
  };
}
