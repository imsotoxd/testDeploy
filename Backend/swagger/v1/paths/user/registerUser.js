const registerUser = {
    post: {
        summary: "Registrar un nuevo usuario",
        description: "Crea un nuevo usuario en la plataforma con su nombre, apellido, correo electrónico, contraseña, fecha de nacimiento, nombre de la empresa y área de negocio.",
        tags: ["Autenticador"],
        requestBody: {
            required: true,
            content: {
                "application/json": {
                    schema: {
                        type: "object",
                        properties: {
                            firstname: {
                                type: "string",
                                description: "Nombre del usuario",
                                example: "John"
                            },
                            lastname: {
                                type: "string",
                                description: "Apellido del usuario",
                                example: "Doe"
                            },
                            email: {
                                type: "string",
                                description: "Correo electrónico del usuario",
                                example: "john.doe@example.com"
                            },
                            password: {
                                type: "string",
                                description: "Contraseña del usuario",
                                example: "securePassword123"
                            },
                            birthdate: {
                                type: "string",
                                description: "Fecha de nacimiento del usuario",
                                example: "1990-01-01"
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
                        required: ["firstname", "lastname", "email", "password", "birthdate", "nameCompany", "businessArea"]
                    }
                }
            }
        },
        responses: {
            201: {
                description: "Usuario creado exitosamente.",
                content: {
                    "application/json": {
                        schema: {
                            type: "object",
                            properties: {
                                message: {
                                    type: "string",
                                    example: "Usuario creado exitosamente"
                                },
                                user: {
                                    type: "object",
                                    properties: {
                                        id: { type: "string", example: "123456" },
                                        firstname: { type: "string", example: "John" },
                                        lastname: { type: "string", example: "Doe" },
                                        email: { type: "string", example: "john.doe@example.com" },
                                        birthdate: { type: "string", example: "1990-01-01" },
                                        nameCompany: { type: "string", example: "Tech Innovators Inc." },
                                        businessArea: { type: "string", example: "Tecnología" }
                                    }
                                }
                            }
                        }
                    }
                }
            },
            400: {
                description: "Error en la solicitud (datos inválidos o incompletos).",
                content: {
                    "application/json": {
                        schema: {
                            type: "object",
                            properties: {
                                message: { type: "string", example: "Mensaje de error aquí" }
                            }
                        }
                    }
                }
            }
        }
    }
};

export default registerUser;
