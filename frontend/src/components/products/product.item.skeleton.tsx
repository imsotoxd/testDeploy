function ProductItemSkeleton() {
  return (
    <div className="grid grid-cols-9 w-full flex-col gap-4 px-2 py-4">
      <div className="skeleton h-4 w-full col-span-2"></div>
      <div className="skeleton h-4 w-full col-span-2"></div>
      <div className="skeleton h-4 w-full"></div>
      <div className="skeleton h-4 w-full"></div>
      <div className="skeleton h-4 w-full"></div>
      <div className="skeleton h-4 w-full"></div>
      <div className="skeleton h-4 w-full"></div>
    </div>
  );
}

export default ProductItemSkeleton;
