const CategoryDelete = {
    type: 'object',
    properties: {
        id: {
            type: 'string',
            description: 'El ID de la categoría a eliminar.',
            example: '077eff87-4076-4c01-938c-5623c91aedc2'
        }
    },
    required: ['id'], // El ID es obligatorio para eliminar
    additionalProperties: false, // Para evitar propiedades adicionales
    tags: ['Categoria']
};

export default CategoryDelete;
