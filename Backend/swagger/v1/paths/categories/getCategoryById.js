const getCategoryById = {
    get: {
        tags: ['Categorías'],
        summary: 'Obtener categoría por ID',
        description: 'Devuelve los detalles de una categoría específica por su ID.',
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
                description: 'ID de la categoría a obtener',
                schema: {
                    type: 'string',
                    example: "077eff87-4076-4c01-938c-5623c91aedc2"
                }
            }
        ],
        responses: {
            200: {
                description: 'Categoría obtenida correctamente',
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
            404: {
                description: 'Categoría no encontrada'
            },
            500: {
                description: 'Error interno del servidor'
            }
        }
    }
};

export default getCategoryById