"use client";
import { ProductSchema } from "@/lib/schemas/products.schema";
import InputGroup from "@/ui/input.group";
import { zodResolver } from "@hookform/resolvers/zod";
import { AnimatePresence, motion } from "framer-motion";
import { SubmitHandler, useForm } from "react-hook-form";
import { postProduct } from "@/app/api/product.api";
import { useCategoriesStore } from "@/store/product.store";
import Swal from "sweetalert2";
import { useUserStore } from "@/store/user.store";
import { useMutation, useQueryClient } from "@tanstack/react-query";

interface Props {
  close: () => void;
}

function ProductAdd({ close }: Props) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ProductSchema>({
    resolver: zodResolver(ProductSchema),
  });

  const qc = useQueryClient();
  const { data } = useCategoriesStore();
  const { data: userData } = useUserStore();

  const { mutateAsync, isPending } = useMutation({
    mutationFn: (data: ProductSchema) => postProduct(data, userData?.id),
    mutationKey: ["products"],
    onSuccess: async ({ message, wasValid, data, errors }) => {
      Swal.fire({
        title: wasValid ? "Producto agregado" : "Error al agregar",
        text: message || errors?.[0]?.msg || "Error desconocido",
        icon: wasValid ? "success" : "error",
        confirmButtonColor: "var(--primary)",
      });
      qc.invalidateQueries({ queryKey: ["products"] });
      wasValid && close();
    },
  });
  const handleSave: SubmitHandler<ProductSchema> = async (data) => {
    await mutateAsync(data);
  };

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
        className="bg-white relative items-center max-w-3xl min-w-96 w-full flex flex-col gap-3 p-10 border-2 border-primary rounded lg:grid grid-cols-8"
      >
        <span className="text-2xl font-semibold col-span-8 text-center mb-5">
          Agregar Producto
        </span>
        <InputGroup
          {...register("name")}
          extendClass="col-span-4"
          id="Nombre"
          label="Nombre"
          errors={errors.name}
        />

        <div className="col-span-4 flex flex-col gap-2">
          <span className="font-semibold">Categoria</span>
          <select
            {...register("categoryId")}
            defaultValue={0}
            className={`select select-bordered ${
              errors.categoryId ? "select-error" : "select-primary"
            }`}
          >
            <option value={0} disabled>
              Categoria
            </option>
            {data?.map((categoria, index) => (
              <option value={categoria.id} key={index}>
                {categoria.name}
              </option>
            ))}
          </select>
          <AnimatePresence>
            <div className="h-6">
              {errors.categoryId && (
                <motion.small
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="text-error"
                >
                  {errors.categoryId.message}
                </motion.small>
              )}
            </div>
          </AnimatePresence>
        </div>
        <InputGroup
          {...register("description")}
          extendClass="col-span-5"
          id="Descripción"
          label="Descripción"
          errors={errors.description}
        />
        <InputGroup
          errors={errors.expirationDate}
          {...register("expirationDate")}
          type="date"
          extendClass="col-span-3"
          id="Fecha de Caducidad"
          label="Fecha de Caducidad"
        />
        <InputGroup
          type="number"
          errors={errors.costPrice}
          {...register("costPrice")}
          extendClass="col-span-2"
          id="Precio Inicial"
          label="Precio Inicial"
        />
        <InputGroup
          type="number"
          errors={errors.finalPrice}
          {...register("finalPrice")}
          extendClass="col-span-2"
          id="Precio de Venta"
          label="Precio de Venta"
        />
        <InputGroup
          type="number"
          errors={errors.quantity}
          {...register("quantity")}
          extendClass="col-span-2"
          id="Cantidad"
          label="Cantidad"
        />
        <InputGroup
          type="number"
          errors={errors.minimumQuantity}
          {...register("minimumQuantity")}
          extendClass="col-span-2"
          id="Cantidad min"
          label="Cantidad min"
        />
        <div className="col-span-8 mt-5 mx-auto grid border place-content-center">
          <button
            disabled={isPending}
            type="submit"
            className="btn btn-primary"
          >
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
