"use client";

import { ProductSchema } from "@/lib/schemas/products.schema";
import InputGroup from "@/ui/input.group";
import { zodResolver } from "@hookform/resolvers/zod";
import { AnimatePresence, motion } from "framer-motion";
import { SubmitHandler, useForm } from "react-hook-form";

interface Props {
  close: () => void;
}

function ProductAdd({ close }: Props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ProductSchema>({
    resolver: zodResolver(ProductSchema),
  });

  const handleSave: SubmitHandler<ProductSchema> = (data) => {
    // Enviar al backcend
    console.log(data);
  };

  const categorias = [
    { name: "Lacteos" },
    { name: "Carnes" },
    { name: "Verduras" },
    { name: "Frutas" },
    { name: "Dulces" },
    { name: "Bebidas" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 10 }}
      transition={{ duration: 0.2 }}
      className="inset-0 fixed z-20 bg-black/25 backdrop-blur grid place-content-center"
    >
      <form
        onSubmit={handleSubmit(handleSave)}
        className="bg-white relative items-center max-w-3xl min-w-96 w-full flex flex-col gap-3 p-10 border-2 border-primary rounded lg:grid grid-cols-6"
      >
        <span className="text-2xl font-semibold col-span-6 text-center mb-5">
          Agregar Producto
        </span>
        <InputGroup
          {...register("codigo")}
          extendClass="col-span-2"
          id="Codigo"
          label="Codigo"
          errors={errors.codigo}
        />
        <InputGroup
          {...register("nombre")}
          extendClass="col-span-4"
          id="Nombre"
          label="Nombre"
          errors={errors.nombre}
        />
        <div className="col-span-4 flex flex-col gap-2">
          <span className="font-semibold">Categoria</span>
          <select
            {...register("categoria")}
            defaultValue={0}
            className={`select select-bordered ${
              errors.categoria ? "select-error" : "select-primary"
            }`}
          >
            <option value={0} disabled>
              Categoria
            </option>
            {categorias.map((categoria, index) => (
              <option value={categoria.name} key={index}>
                {categoria.name}
              </option>
            ))}
          </select>
          <AnimatePresence>
            <div className="h-6">
              {errors.categoria && (
                <motion.small
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="text-error"
                >
                  {errors.categoria.message}
                </motion.small>
              )}
            </div>
          </AnimatePresence>
        </div>
        <InputGroup
          errors={errors.caducidad}
          {...register("caducidad")}
          type="date"
          extendClass="col-span-2"
          id="Fecha de Caducidad"
          label="Fecha de Caducidad"
        />
        <InputGroup
          type="number"
          errors={errors.precioCompra}
          {...register("precioCompra")}
          extendClass="col-span-2"
          id="Precio Inicial"
          label="Precio Inicial"
        />
        <InputGroup
          type="number"
          errors={errors.precioVenta}
          {...register("precioVenta")}
          extendClass="col-span-2"
          id="Precio de Venta"
          label="Precio de Venta"
        />
        <InputGroup
          type="number"
          errors={errors.cantidad}
          {...register("cantidad")}
          extendClass="col-span-2"
          id="Cantidad"
          label="Cantidad"
        />
        <div className="col-span-6 mt-5 mx-auto grid border place-content-center">
          <button className="btn btn-primary">
            <span>Guardar</span>
            <span
              className="icon-[lets-icons--save-duotone]"
              role="img"
              aria-hidden="true"
            />
          </button>
        </div>
        <button
          onClick={close}
          type="button"
          className="absolute size-6 rounded hover:bg-primary hover:text-white transition-colors grid place-content-center top-10 right-10"
        >
          <span
            className="icon-[line-md--close]"
            role="img"
            aria-hidden="true"
          />
        </button>
      </form>
    </motion.div>
  );
}

export default ProductAdd;
