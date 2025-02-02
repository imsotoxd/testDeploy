const MovementCreate = {
    type: 'object',
    properties: {
        type: {
            type: 'string',
            enum: ['income', 'expense'],
            description: 'Tipo de movimiento (ingreso o egreso)',
            example: 'expense'
        },
        amount: {
            type: 'number',
            format: 'float',
            description: 'Monto del movimiento',
            example: 200.50
        },
        description: {
            type: 'string',
            description: 'Descripción del movimiento',
            example: 'Compra de insumos para oficina'
        },
        date: {
            type: 'string',
            format: 'date-time',
            description: 'Fecha en que se realizó el movimiento',
            example: '2024-02-02T10:15:00Z'
        },
        categoryId: {
            type: 'string',
            format: 'uuid',
            description: 'ID de la categoría asociada al movimiento',
            example: '8c69d6f5-9c23-4b97-8c99-7f8b3c4a12f1'
        }
    },
    required: ['type', 'amount', 'date', 'categoryId']
}

export default MovementCreate;