const updateProduct = {
  put: {
    tags: ['Productos'],
    summary: 'Actualizar producto',
    description:
      'Actualiza la información de un producto existente en el sistema.',
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
    requestBody: {
      required: true,
      content: {
        'application/json': {
          schema: {
            $ref: '#/components/schemas/ProductUpdate',
          },
        },
      },
    },
    responses: {
      200: {
        description: 'Producto actualizado correctamente',
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

export default updateProduct;
