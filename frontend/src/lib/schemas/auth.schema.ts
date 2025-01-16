import { z } from "zod";

export const LoginSchema = z.object({
  email: z
    .string()
    .min(1, { message: "El correo electrónico no puede estar vacío." })
    .email({ message: "El correo electrónico debe tener un formato válido." }),

  password: z
    .string()
    .min(6, { message: "La contraseña debe tener al menos 6 caracteres." })
    .min(1, { message: "La contraseña no puede estar vacía." }),
});

export type LoginSchemaType = z.infer<typeof LoginSchema>;
