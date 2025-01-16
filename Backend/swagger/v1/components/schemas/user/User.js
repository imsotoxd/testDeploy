// swagger/components/schemas/user/User.js

const User = {
    type: "object",
    properties: {
        id: {
            type: "string",
            description: "Identificador único del usuario en la base de datos",
            example: "077eff87-4076-4c01-938c-5623c91aedc2"
        },
        firstname: {
            type: "string",
            description: "Nombre de usuario",
            example: "john"
        },
        lastname: {
            type: "string",
            description: "Apellido de usuario",
            example: "doe"
        },
        email: {
            type: "string",
            description: "Correo electrónico único del usuario",
            example: "john.doe@example.com"
        },
        birthdate: {
            type: "string",
            format: "date",
            description: "Fecha de nacimiento del usuario",
            example: "1990-01-01"
        },
        password: {
            type: "string",
            description: "Contraseña del usuario",
            example: "P@ssw0rd123"
        },
        created_at: {
            type: "string",
            format: "date-time",
            description: "Fecha y hora en que el usuario fue creado en el sistema",
            example: "2024-12-31T12:34:56Z"
        },
        updated_at: {
            type: "string",
            format: "date-time",
            description: "Fecha y hora de la última actualización del usuario",
            example: "2024-12-31T12:34:56Z"
        },
        activated: {
            type: "boolean",
            description: "Estado de eliminación del usuario (si está marcado como eliminado)",
            example: 1
        }
    },
    required: ["id", "username", "email", "created_at"]
};

export default User;
