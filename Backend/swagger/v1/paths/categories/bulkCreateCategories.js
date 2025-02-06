const bulkCreateCategories = {
    post: {
        tags: ['Categorías'],
        summary: 'Crear categorías en masa',
        description: 'Permite la creación masiva de categorías. El cuerpo de la solicitud debe incluir un array de nombres.',
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
                            categories: {
                                type: 'array',
                                description: 'Array de categorías a crear',
                                items: {
                                    type: 'object',
                                    properties: {
                                        name: {
                                            type: 'string',
                                            example: 'Categoría ejemplo',
                                            description: 'Nombre de la categoría'
                                        },
                                        description: {
                                            type: 'string',
                                            example: 'Descripción ejemplo',
                                            description: 'Descripción de la categoría'
                                        },
                                        custom: {
                                            type: 'boolean',
                                            example: true,
                                            description: 'Indica si la categoría es personalizada'
                                        }
                                    },
                                    required: ['name', 'custom']
                                }
                            }
                        },
                        required: ['names']
                    },
                    example: {
                        names: [
                            ["Herramientas eléctricas", "Accesorios de ferretería", "Pinturas y barnices", "Materiales de construcción", "Iluminación y eléctricos"]
                        ]
                    }
                }
            }
        },
        responses: {
            201: {
                description: 'Categorías creadas exitosamente',
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
                                    example: 'Categorías creadas exitosamente.'
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
                                                example: 'Herramientas eléctricas'
                                            },
                                            description: {
                                                type: 'string',
                                                example: 'Categoría para herramientas eléctricas como taladros, sierras, etc.'
                                            },
                                            custom: {
                                                type: 'boolean',
                                                example: true
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
                                    example: 'Debe proporcionar un array de categorías.'
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

export default bulkCreateCategories;
