const UserInput = {
    type: 'object',
    properties: {
        firstname: {
            type: "string",
            description: "Nombre de usuario",
            example: "john"
        },
        lastname: {
            type: "string",
            description: "Apellido de usuario",
            example: "salchichon"
        },
        email: {
            type: "string",
            description: "Correo electrónico único usuario",
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
    required: ['username', 'email'], // Asumiendo que el correo y el nombre de usuario son obligatorios
    additionalProperties: false, // Para evitar que se incluyan propiedades adicionales no definidas
};

export default UserInput;
