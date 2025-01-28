import CategoryType from '../../components/schemas/categories/CategoryType.js';

const createDefaultCategories = {
    post: {
        tags: ['Categorías'],
        summary: 'Crear categorías por defecto',
        description: 'Crea automáticamente 10 categorías predeterminadas según el tipo proporcionado. Puedes seleccionar el tipo desde las opciones disponibles.',
        security: [
            {
                BearerAuth: []
            }
        ],
        parameters: [
            {
                name: 'type',
                in: 'query',
                required: true,
                description: 'Tipo de categorías a crear. Seleccione uno de los valores disponibles.',
                schema: {
                    type: 'string',
                    enum: ['Alimentos y bebidas', 'Bienes e insumos', 'Tecnología', 'Salud', 'Otros'],
                    example: 'Tecnología'
                }
            }
        ],
        responses: {
            201: {
                description: 'Categorías por defecto creadas exitosamente',
                content: {
                    'application/json': {
                        schema: {
                            type: 'object',
                            properties: {
                                success: {
                                    type: 'boolean',
                                    example: true
                                },
                                message: {
                                    type: 'string',
                                    example: 'Categorías por defecto creadas exitosamente.'
                                },
                                data: {
                                    type: 'array',
                                    items: {
                                        type: 'object',
                                        properties: {
                                            id: {
                                                type: 'string',
                                                example: '077eff87-4076-4c01-938c-5623c91aedc2'
                                            },
                                            name: {
                                                type: 'string',
                                                example: 'Categoría predeterminada 1'
                                            },
                                            description: {
                                                type: 'string',
                                                example: 'Descripción predeterminada'
                                            },
                                            custom: {
                                                type: 'boolean',
                                                example: false
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            },
            400: {
                description: 'Error de validación',
                content: {
                    'application/json': {
                        schema: {
                            type: 'object',
                            properties: {
                                success: {
                                    type: 'boolean',
                                    example: false
                                },
                                message: {
                                    type: 'string',
                                    example: 'Debe proporcionar un tipo válido de categoría.'
                                }
                            }
                        }
                    }
                }
            },
            500: {
                description: 'Error interno del servidor',
                content: {
                    'application/json': {
                        schema: {
                            type: 'object',
                            properties: {
                                success: {
                                    type: 'boolean',
                                    example: false
                                },
                                message: {
                                    type: 'string',
                                    example: 'Error interno del servidor'
                                }
                            }
                        }
                    }
                }
            }
        }
    }
};

export default createDefaultCategories;
