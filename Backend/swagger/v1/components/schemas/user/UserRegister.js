// swagger/schemas/UserRegister.js

const UserRegister = {
    type: "object",
    properties: {
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
        }
    },
    required: ["username", "email", "password"]
};

export default UserRegister;
