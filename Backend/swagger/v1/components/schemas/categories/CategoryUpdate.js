const CategoryUpdate = {
    type: 'object',
    properties: {
        name: {
            type: 'string',
            minLength: 3,
            description: 'El nuevo nombre de la categoría.',
            example: 'Electrónica avanzada'
        },
        description: {
            type: 'string',
            description: 'La nueva descripción de la categoría.',
            example: 'Productos electrónicos de última generación.'
        },
        custom: {
            type: 'boolean',
            description: 'Indica si la categoría es personalizada.',
            example: false
        }
    },
    required: ['name'], // El nombre es obligatorio para actualizar
    additionalProperties: false
};

export default CategoryUpdate;