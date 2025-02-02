const getProductMovement = {
    get: {
        tags: ['Movimientos'],
        summary: 'Obtener movimientos por producto',
        description: 'Obtiene todos los movimientos asociados a un producto específico.',
        security: [
            {
                BearerAuth: []
            }
        ],
        parameters: [
            {
                name: 'productId',
                in: 'path',
                required: true,
                schema: {
                    type: 'string',
                    format: 'uuid'
                },
                description: 'ID del producto para filtrar los movimientos',
                example: '8c69d6f5-9c23-4b97-8c99-7f8b3c4a12f1'
            }
        ],
        responses: {
            200: {
                description: 'Lista de movimientos asociados al producto',
                content: {
                    'application/json': {
                        schema: {
                            type: 'object',
                            properties: {
                                success: {
                                    type: 'boolean',
                                    example: true
                                },
                                data: {
                                    type: 'array',
                                    items: {
                                        $ref: '#/components/schemas/Movement'
                                    }
                                }
                            }
                        }
                    }
                }
            },
            400: {
                description: 'El ID del producto no es válido o falta'
            },
            404: {
                description: 'No se encontraron movimientos para el producto'
            },
            500: {
                description: 'Error interno del servidor'
            }
        }
    }
};

export default getProductMovement;
