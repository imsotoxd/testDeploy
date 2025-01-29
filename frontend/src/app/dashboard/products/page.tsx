import ProductFilter from "@/components/products/product.filters";
import ProductList from "@/components/products/product.list";
import { getQueryClient } from "@/lib/tanstack/queryClient";
import { prefetchProducts } from "@/lib/tanstack/prefetchers";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";

async function LandingPage() {
  const queryClient = getQueryClient();
  await prefetchProducts(queryClient);
  const dehydratedState = dehydrate(queryClient);

  return (
    <div className="max-w-4xl mx-auto">
      <HydrationBoundary state={dehydratedState}>
        <ProductFilter />
        <ProductList />
      </HydrationBoundary>
    </div>
  );
}

export default LandingPage;
