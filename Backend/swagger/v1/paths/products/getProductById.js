const getProductById = {
  get: {
    tags: ['Productos'],
    summary: 'Obtener producto por ID',
    description: 'Obtiene los detalles de un producto por su ID.',
    security: [
      {
        BearerAuth: [],
      },
    ],
    parameters: [
      {
        name: 'id',
        in: 'path',
        required: true,
        description: 'ID del producto',
        schema: {
          type: 'string',
          example: '077eff87-4076-4c01-938c-5623c91aedc2',
        },
      },
    ],
    responses: {
      200: {
        description: 'Detalles del producto obtenidos correctamente',
        content: {
          'application/json': {
            schema: {
              $ref: '#/components/schemas/ProductOutput',
            },
          },
        },
      },
      404: {
        description: 'Producto no encontrado',
      },
      500: {
        description: 'Error interno del servidor',
      },
    },
  },
};

export default getProductById;
