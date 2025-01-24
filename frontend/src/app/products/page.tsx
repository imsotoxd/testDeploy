import ProductFilter from "@/components/products/product.filters";
import ProductList from "@/components/products/product.list";

function LandingPage() {
  return (
    <div className="max-w-4xl mx-auto">
      <ProductFilter />
      <ProductList />
    </div>
  );
}

export default LandingPage;