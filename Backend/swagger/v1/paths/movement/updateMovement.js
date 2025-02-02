const updateMovement = {
    put: {
        tags: ['Movimientos'],
        summary: 'Actualizar un movimiento',
        description: 'Actualiza la información de un movimiento existente.',
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
                description: 'ID del movimiento a actualizar',
                schema: {
                    type: 'string',
                    example: '123e4567-e89b-12d3-a456-426614174001'
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
                            sku: {
                                type: 'string',
                                description: 'SKU del producto (opcional)',
                                example: 'b1234567-89ab-cdef-0123-456789abcdef'
                            },
                            name: {
                                type: 'string',
                                description: 'Nombre del movimiento',
                                example: 'Venta de herramienta actualizada'
                            },
                            type: {
                                type: 'string',
                                description: 'Tipo de movimiento',
                                enum: ['expired', 'sale', 'purchase', 'return'],
                                example: 'sale'
                            },
                            productId: {
                                type: 'string',
                                description: 'ID del producto relacionado con el movimiento',
                                example: '077eff87-4076-4c01-938c-5623c91aedc2'
                            }
                        }
                    }
                }
            }
        },
        responses: {
            200: {
                description: 'Movimiento actualizado correctamente',
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
                                    example: 'Movimiento actualizado correctamente'
                                },
                                data: {
                                    $ref: '#/components/schemas/Movement'
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
                description: 'Movimiento no encontrado'
            },
            500: {
                description: 'Error interno del servidor'
            }
        }
    }
};

export default updateMovement;
