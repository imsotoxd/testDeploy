const getAllProducts = {
  get: {
    tags: ['Productos'],
    summary: 'Obtener todos los productos',
    description: 'Obtiene la lista de todos los productos en el sistema.',
    security: [
      {
        BearerAuth: [],
      },
    ],
    responses: {
      200: {
        description: 'Lista de productos obtenida correctamente',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: {
                $ref: '#/components/schemas/ProductOutput',
              },
            },
          },
        },
      },
      500: {
        description: 'Error interno del servidor',
      },
    },
  },
};

export default getAllProducts;
