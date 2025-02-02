const MovementUpdate = {
    type: 'object',
    properties: {
        type: {
            type: 'string',
            enum: ['income', 'expense'],
            description: 'Tipo de movimiento (opcional)',
            example: 'income'
        },
        amount: {
            type: 'number',
            format: 'float',
            description: 'Monto del movimiento (opcional)',
            example: 300.00
        },
        description: {
            type: 'string',
            description: 'Descripción del movimiento (opcional)',
            example: 'Reembolso de cliente'
        },
        date: {
            type: 'string',
            format: 'date-time',
            description: 'Fecha del movimiento (opcional)',
            example: '2024-02-03T08:45:00Z'
        },
        categoryId: {
            type: 'string',
            format: 'uuid',
            description: 'Nueva categoría del movimiento (opcional)',
            example: '1a2b3c4d-5e6f-7g8h-9i0j-k1l2m3n4o5p6'
        }
    }
}

export default MovementUpdate;