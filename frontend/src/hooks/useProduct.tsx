"use client";
import {
  useMutation,
  useQueryClient,
  useInfiniteQuery,
  useQuery,
} from "@tanstack/react-query";
import {
  getAllProducts,
  putProduct,
  deleteProduct,
  postProduct,
  AllProductsEndpoint,
} from "@/app/api/product.api";
import { QueriesResponse } from "@/types/product.types";
import { useUserStore } from "@/store/user.store";

export function useProducts() {
  const queryClient = useQueryClient();
  const { data } = useUserStore();


  const {
    data: productsQuery,
    fetchNextPage,
    hasNextPage,
    hasPreviousPage,
    isLoading,
    error,
    isFetching,
  } = useInfiniteQuery<QueriesResponse>({
    queryKey: ["infinityProducts", data?.id],
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
    mutationKey: ["addInfinityProduct", data?.id],
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["infinityProducts", data?.id],
        refetchType: "active",
      });
      queryClient.invalidateQueries({
        queryKey: ["allProducts", data?.id],
        refetchType: "active"
      });
    },
  });


  const updateProductQuery = useMutation({
    mutationFn: putProduct,
    mutationKey: ["editInfinityProduct"],
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["moves", data?.id],
        refetchType: "active",
      });
      queryClient.invalidateQueries({
        queryKey: ["infinityProducts", data?.id],
        refetchType: "active"
      });
      queryClient.invalidateQueries({
        queryKey: ["allProducts", data?.id],
        refetchType: "active"
      });
    },
  });

  const deleteProductQuery = useMutation({
    mutationFn: deleteProduct,
    mutationKey: ["deleteInfinityProduct"],
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["infinityProducts", data?.id],
        refetchType: "active"
      });
      queryClient.invalidateQueries({
        queryKey: ["allProducts", data?.id],
        refetchType: "active"
      });
    },
  });

  const AllProductData = useQuery({
    queryKey: ["allProducts", data?.id],
    queryFn: () => {
      if (!data?.id) return Promise.reject("No hay ID disponible");
      return AllProductsEndpoint();
    },
    enabled: !!data?.id,
  });

  return {
    products: productsQuery,
    isLoading,
    error,
    fetchNextPage,
    hasNextPage,
    hasPreviousPage,
    isFetching,

    createProduct: addProductQuery.mutate,
    updateProduct: updateProductQuery.mutate,
    deleteProduct: deleteProductQuery.mutate,


    isCreating: addProductQuery.isPending,
    isUpdating: updateProductQuery.isPending,
    isDeleting: deleteProductQuery.isPending,

    createResponse: addProductQuery.data,
    updateResponse: updateProductQuery.data,
    deleteResponse: deleteProductQuery.data,


    allProducts: AllProductData.data?.data ?? [],
    isLoadingAllProducts: AllProductData.isLoading,
    errorAllProducts: AllProductData.data?.error,

  };
}


