const CategoryOutput = {
    type: 'object',
    properties: {
        id: {
            type: 'string',
            description: 'El ID único de la categoría.',
            example: '077eff87-4076-4c01-938c-5623c91aedc2'
        },
        name: {
            type: 'string',
            description: 'El nombre de la categoría.',
            example: 'Electrónica'
        },
        description: {
            type: 'string',
            description: 'La descripción de la categoría.',
            example: 'Productos electrónicos como teléfonos, computadoras, etc.'
        },
        custom: {
            type: 'boolean',
            description: 'Indica si la categoría es personalizada.',
            example: true
        }
    },
    required: ['id', 'name'], // El ID y el nombre son obligatorios
    additionalProperties: false
};

export default CategoryOutput