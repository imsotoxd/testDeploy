const getAllMovements = {
    get: {
        tags: ['Movimientos'],
        summary: 'Obtener todos los movimientos',
        description: 'Recupera una lista de todos los movimientos registrados en el sistema.',
        security: [
            {
                BearerAuth: []
            }
        ],
        responses: {
            200: {
                description: 'Lista de movimientos obtenida correctamente',
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
                        },
                        example: {
                            success: true,
                            data: [
                                {
                                    id: '123e4567-e89b-12d3-a456-426614174001',
                                    sku: 'b1234567-89ab-cdef-0123-456789abcdef',
                                    name: 'Venta de herramienta',
                                    type: 'sale',
                                    userId: '123e4567-e89b-12d3-a456-426614174000',
                                    productId: '077eff87-4076-4c01-938c-5623c91aedc2',
                                    createdAt: '2025-01-01T12:00:00Z',
                                    updatedAt: '2025-01-01T12:00:00Z'
                                }
                            ]
                        }
                    }
                }
            },
            500: {
                description: 'Error interno del servidor'
            }
        }
    }
};

export default getAllMovements;
