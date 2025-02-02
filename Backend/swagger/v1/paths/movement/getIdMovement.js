const getMovementById = {
    get: {
        tags: ['Movimientos'],
        summary: 'Obtener un movimiento por ID',
        description: 'Recupera los detalles de un movimiento específico usando su ID.',
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
                description: 'ID del movimiento a recuperar',
                schema: {
                    type: 'string',
                    example: '123e4567-e89b-12d3-a456-426614174001'
                }
            }
        ],
        responses: {
            200: {
                description: 'Movimiento obtenido correctamente',
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
                                    $ref: '#/components/schemas/Movement'
                                }
                            }
                        },
                        example: {
                            success: true,
                            data: {
                                id: '123e4567-e89b-12d3-a456-426614174001',
                                sku: 'b1234567-89ab-cdef-0123-456789abcdef',
                                name: 'Venta de herramienta',
                                type: 'sale',
                                userId: '123e4567-e89b-12d3-a456-426614174000',
                                productId: '077eff87-4076-4c01-938c-5623c91aedc2',
                                createdAt: '2025-01-01T12:00:00Z',
                                updatedAt: '2025-01-01T12:00:00Z'
                            }
                        }
                    }
                }
            },
            404: {
                description: 'Movimiento no encontrado'
            },
            500: {
                description: 'Error interno del servidor'
            }
        }
    }
};

export default getMovementById;
