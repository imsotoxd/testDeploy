import { QueryClient } from "@tanstack/react-query";
import { getAllProducts } from "@/app/api/product.api";
import { getAllCategories } from "@/app/api/categories.api";

export async function prefetchProducts(queryClient: QueryClient) {
  // @ts-ignore
  await queryClient.prefetchQuery({
    queryKey: ["products"],
    queryFn: getAllProducts,
  });
  // @ts-ignore
  await queryClient.prefetchQuery({
    queryKey: ["categories"],
    queryFn: getAllCategories,
  });
}
