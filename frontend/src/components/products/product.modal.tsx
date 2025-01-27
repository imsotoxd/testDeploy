"use client";

import { AnimatePresence } from "framer-motion";
import { useState } from "react";
import ProductAdd from "./product.add";

function ProductoModal() {
  const [agg, setAgg] = useState(false);
  const openAgg = () => setAgg(true);
  const closeAgg = () => setAgg(false);
  return (
    <>
      <button
        onClick={openAgg}
        className="btn btn-primary flex items-center gap-2"
      >
        <span>Agregar</span>
        <span
          className="icon-[si--add-to-library-duotone]"
          role="img"
          aria-hidden="true"
        />
      </button>
      <AnimatePresence>
        {agg && <ProductAdd close={closeAgg} />}
      </AnimatePresence>
    </>
  );
}

export default ProductoModal;
