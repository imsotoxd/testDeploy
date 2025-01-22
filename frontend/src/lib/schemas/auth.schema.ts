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

export const RegisterSchema = z.object({
  name: z.string().min(1, { message: "El nombre no puede estar vacío." }),

  lastname: z.string().min(1, { message: "El apellido no puede estar vacío." }),

  age: z
    .number({ invalid_type_error: "La edad debe ser un número." })
    .int({ message: "La edad debe ser un número entero." })
    .positive({ message: "La edad debe ser un número positivo." }),

  email: z
    .string()
    .min(1, { message: "El correo electrónico no puede estar vacío." })
    .email({ message: "El correo electrónico debe tener un formato válido." }),

  password: z
    .string()
    .min(6, { message: "La contraseña debe tener al menos 6 caracteres." }),
});

export type RegisterSchemaType = z.infer<typeof RegisterSchema>;
