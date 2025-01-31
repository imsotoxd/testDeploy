import { getAllProducts } from "@/app/api/product.api";
import { getAllCategories } from "@/app/api/categories.api";

export async function prefetchProducts(queryClient) {
  await queryClient.prefetchQuery({
    queryKey: ["products"],
    queryFn: getAllProducts,
  });

  await queryClient.prefetchQuery({
    queryKey: ["categories"],
    queryFn: getAllCategories,
  });
}
