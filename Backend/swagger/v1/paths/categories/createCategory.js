const createCategory = {
    post: {
        tags: ['Categorías'],
        summary: 'Crear nueva categoría',
        description: 'Crea una nueva categoría en el sistema.',
        security: [
            {
                BearerAuth: []
            }
        ],
        requestBody: {
            required: true,
            content: {
                'application/json': {
                    schema: {
                        type: 'object',
                        properties: {
                            name: {
                                type: 'string',
                                description: 'Nombre de la categoría',
                                example: 'Herramienta'
                            },
                            description: {
                                type: 'string',
                                description: 'Descripción de la categoría',
                                example: 'Martillo de Uña 16oz'
                            },
                            custom: {
                                type: 'boolean',
                                description: 'Indica si la categoría es personalizada',
                                example: true
                            }
                        },
                        required: ['name']
                    }
                }
            }
        },
        responses: {
            201: {
                description: 'Categoría creada correctamente',
                content: {
                    'application/json': {
                        schema: {
                            type: 'object',
                            properties: {
                                id: {
                                    type: 'string',
                                    description: 'ID de la nueva categoría',
                                    example: '077eff87-4076-4c01-938c-5623c91aedc2'
                                },
                                name: {
                                    type: 'string',
                                    description: 'Nombre de la categoría',
                                    example: 'Electrónica'
                                },
                                description: {
                                    type: 'string',
                                    description: 'Descripción de la categoría',
                                    example: 'Productos electrónicos como teléfonos, computadoras, etc.'
                                },
                                custom: {
                                    type: 'boolean',
                                    description: 'Indica si la categoría es personalizada',
                                    example: true
                                }
                            }
                        }
                    }
                }
            },
            400: {
                description: 'Datos incorrectos o falta de parámetros requeridos'
            },
            500: {
                description: 'Error interno del servidor'
            }
        }
    }
};

export default createCategory