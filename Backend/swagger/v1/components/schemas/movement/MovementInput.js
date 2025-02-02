export const Movement = {
    type: 'object',
    properties: {
        id: {
            type: 'string',
            format: 'uuid',
            description: 'ID único del movimiento',
            example: 'a3f20d4e-7c5b-4d89-b3e6-9a1b8a3cde3e'
        },
        type: {
            type: 'string',
            enum: ['income', 'expense'],
            description: 'Tipo de movimiento (ingreso o egreso)',
            example: 'income'
        },
        amount: {
            type: 'number',
            format: 'float',
            description: 'Monto del movimiento',
            example: 150.75
        },
        description: {
            type: 'string',
            description: 'Descripción del movimiento',
            example: 'Pago de cliente por servicio'
        },
        date: {
            type: 'string',
            format: 'date-time',
            description: 'Fecha en que se realizó el movimiento',
            example: '2024-02-01T14:30:00Z'
        },
        categoryId: {
            type: 'string',
            format: 'uuid',
            description: 'ID de la categoría asociada al movimiento',
            example: '5b67c9d0-9d2b-4e1f-8a71-91a92f5c8a9e'
        },
        userId: {
            type: 'string',
            format: 'uuid',
            description: 'ID del usuario que realizó el movimiento',
            example: '3e5c1a48-12f6-4a3d-91de-6f3b62e8c82f'
        }
    },
    required: ['type', 'amount', 'date', 'categoryId', 'userId']
}