const restoreProduct = {
  put: {
    tags: ['Productos'],
    summary: 'Restaurar producto',
    description: 'Restaura un producto eliminado en el sistema.',
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
        description: 'Producto restaurado correctamente',
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

export default restoreProduct;
