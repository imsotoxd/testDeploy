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
  firstname: z
    .string()
    .min(3, { message: "El nombre debe teer al menos 3 caracteres" })
    .nonempty({ message: "El nombre es obligatorio" }),

  lastname: z
    .string()
    .min(3, { message: "El apellido no puede estar vacío." })
    .nonempty({ message: "El apellido es obligatorio" }),

  birthdate: z
    .string({ required_error: "La fecha de nacimiento es obligatoria." })
    .refine(
      (dateString) => {
        const birthDate = new Date(dateString);

        if (isNaN(birthDate.getTime())) {
          return false; // Si no es una fecha válida
        }

        const today = new Date();
        const age = today.getFullYear() - birthDate.getFullYear();
        const hasReachedBirthday =
          today.getMonth() > birthDate.getMonth() ||
          (today.getMonth() === birthDate.getMonth() &&
            today.getDate() >= birthDate.getDate());

        return age > 18 || (age === 18 && hasReachedBirthday);
      },
      { message: "Debes ser mayor de edad (18 años o más)." }
    ),

  email: z
    .string()
    .min(1, { message: "El correo electrónico no puede estar vacío." })
    .email({ message: "El correo electrónico debe tener un formato válido." }),

  password: z
    .string()
    .min(6, { message: "La contraseña debe tener al menos 6 caracteres." }),
});

export type RegisterSchemaType = z.infer<typeof RegisterSchema>;
