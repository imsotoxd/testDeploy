import { z } from 'zod'

enum Categorias {
  Lacteos = 'Lacteos',
  Carnes = 'Carnes',
  Verduras = 'Verduras',
  Frutas = 'Frutas',
  Dulces = 'Dulces',
  Bebida = 'Bebidas'
}

export const ProductSchema = z.object({
  codigo: z.string().nonempty("Código requerido"),
  nombre: z.string().nonempty("Nombre requerido"),
  categoria: z.nativeEnum(Categorias, { errorMap: () => ({ message: "Categoría inválida" }) }),
  caducidad: z
    .string()
    .optional()
    .refine(dateString => {
      if (!dateString) return true;
      const date = new Date(dateString);
      if (isNaN(date.getTime())) return false;
      const sixMonthsFromNow = new Date();
      sixMonthsFromNow.setMonth(sixMonthsFromNow.getMonth() + 6);
      return date > sixMonthsFromNow;
    }, {
      message: "Fecha al menos 6 meses mayor a hoy",
    }),
  precioCompra: z
    .string()
    .nonempty("Precio compra requerido")
    .transform(value => parseFloat(value))
    .refine(value => !isNaN(value) && value > 0, {
      message: "Precio compra debe ser un número mayor a 0",
    }),
  precioVenta: z
    .string()
    .nonempty("Precio venta requerido")
    .transform(value => parseFloat(value))
    .refine(value => !isNaN(value) && value > 0, {
      message: "Precio venta debe ser un número mayor a 0",
    }),
  cantidad: z
    .string()
    .nonempty("Cantidad requerida")
    .transform(value => parseInt(value, 10))
    .refine(value => !isNaN(value) && value > 0, {
      message: "Cantidad debe ser un número entero mayor a 0",
    }),
}).refine(data => data.precioVenta > data.precioCompra, {
  message: "Precio de venta muy bajo",
  path: ["precioVenta"],
});



export type ProductSchema = z.infer<typeof ProductSchema>