const updateCategory = {
    put: {
        tags: ['Categorías'],
        summary: 'Actualizar información de categoría',
        description: 'Actualiza los detalles de una categoría existente.',
        security: [
            {
                BearerAuth: []
            }
        ],
        parameters: [
            {
                name: 'id',
                in: 'path',
                required: true,
                description: 'ID de la categoría a actualizar',
                schema: {
                    type: 'string',
                    example: "077eff87-4076-4c01-938c-5623c91aedc2"
                }
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
                        },
                        required: ['name']
                    }
                }
            }
        },
        responses: {
            200: {
                description: 'Categoría actualizada correctamente',
                content: {
                    'application/json': {
                        schema: {
                            type: 'object',
                            properties: {
                                id: {
                                    type: 'string',
                                    description: 'ID de la categoría',
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
            404: {
                description: 'Categoría no encontrada'
            },
            500: {
                description: 'Error interno del servidor'
            }
        }
    }
};

export default updateCategory