const UserInput = {
    type: 'object',
    properties: {
        firstname: {
            type: "string",
            description: "Nombre del usuario",
            example: "john"
        },
        lastname: {
            type: "string",
            description: "Apellido del usuario",
            example: "salchichon"
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
        nameCompany: {
            type: "string",
            description: "Nombre de la empresa",
            example: "Tech Innovators Inc."
        },
        businessArea: {
            type: "string",
            description: "Área de negocio del usuario",
            example: "Tecnología",
            enum: ["Alimentos y bebidas", "Bienes e insumos", "Tecnología", "Salud"]
        }
    },
    required: ['firstname', 'lastname', 'email', 'birthdate', 'password', 'nameCompany', 'businessArea'], // Campos obligatorios
    additionalProperties: false, // Para evitar que se incluyan propiedades adicionales no definidas
};

export default UserInput;
