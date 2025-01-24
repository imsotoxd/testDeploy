"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

function ProductoAgregar() {
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
        {agg && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.2 }}
            className="inset-0 fixed z-20 bg-black/25 backdrop-blur grid place-content-center"
          >
            agregar
            <button onClick={closeAgg} className="btn btn-ghost">
              <span>Cerrar</span>
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default ProductoAgregar;
