const createProduct = {
  post: {
    tags: ['Productos'],
    summary: 'Crear nuevo producto',
    description: 'Crea un nuevo producto en el sistema.',
    security: [
      {
        BearerAuth: [],
      },
    ],
    requestBody: {
      required: true,
      content: {
        'application/json': {
          schema: {
            $ref: '#/components/schemas/ProductInput',
          },
        },
      },
    },
    responses: {
      201: {
        description: 'Producto creado correctamente',
        content: {
          'application/json': {
            schema: {
              $ref: '#/components/schemas/ProductOutput',
            },
          },
        },
      },
      400: {
        description: 'Datos incorrectos o falta de parámetros requeridos',
      },
      500: {
        description: 'Error interno del servidor',
      },
    },
  },
};

export default createProduct;
