// swagger/paths/users/registerUser.js

const registerUser = {
    post: {
        summary: "Registrar un nuevo usuario",
        description: "Crea un nuevo usuario en la plataforma con su nombre de usuario, correo electrónico y contraseña.",
        tags: ["Usuario"],
        requestBody: {
            required: true,
            content: {
                "application/json": {
                    schema: {
                        type: "object",
                        properties: {
                            firtsname: {
                                type: "string",
                                description: "Nombre de usuario",
                                example: "John"
                            },
                            lastsname: {
                                type: "string",
                                description: "Apellido de usuario",
                                example: "Salchichon"
                            },
                            email: {
                                type: "string",
                                description: "Correo electrónico del usuario",
                                example: "john.salchichon@example.com"
                            },
                            password: {
                                type: "string",
                                description: "Contraseña del usuario",
                                example: "securePassword123"
                            },
                            birthday: {
                                type: "string",
                                description: "Fecha de nacimiento del usuario",
                                example: "1990-01-01"
                            },
                        },
                        required: ["username", "email", "password"]
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
                                        firtsname: { type: "string", example: "John" }, lastsname: { type: "string", example: "Salchichon"},
                                        email: { type: "string", example: "john.salchichon@example.com" }, birthday: { type: "string", example: "1990-01-01" }
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
