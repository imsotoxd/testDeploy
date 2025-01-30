function ProductItemSkeleton() {
  const array = Array.from({ length: 10 });
  return (
    <>
      {array.map((_, index) => (
        <div
          key={index}
          className="grid grid-cols-9 w-full flex-col gap-4 h-14 items-center p-2"
        >
          <div className="skeleton h-4 w-full col-span-2"></div>
          <div className="skeleton h-4 w-full col-span-2"></div>
          <div className="skeleton h-4 w-full"></div>
          <div className="skeleton h-4 w-full"></div>
          <div className="skeleton h-4 w-full"></div>
          <div className="skeleton h-4 w-full"></div>
          <div className="skeleton h-4 w-full"></div>
        </div>
      ))}
    </>
  );
}

export default ProductItemSkeleton;
