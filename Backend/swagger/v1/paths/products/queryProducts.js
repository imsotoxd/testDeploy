const queryProducts = {
  get: {
    tags: ['Productos'],
    summary: 'Consultar productos con filtrado y ordenamiento',
    description:
      'Obtiene una lista de productos aplicando filtros y ordenamientos.',
    security: [
      {
        BearerAuth: [],
      },
    ],
    parameters: [
      {
        name: 'filter[minimumQuantity]',
        in: 'query',
        required: false,
        description:
          'Filtrar productos cuya cantidad sea igual o menor a la cantidad mínima y excluir aquellos con cantidad igual a cero',
        schema: {
          type: 'boolean',
          example: true,
        },
      },
      {
        name: 'filter[zeroQuantity]',
        in: 'query',
        required: false,
        description: 'Filtrar productos cuya cantidad sea igual a cero',
        schema: {
          type: 'boolean',
          example: true,
        },
      },
      {
        name: 'filter[nonZeroQuantity]',
        in: 'query',
        required: false,
        description: 'Filtrar productos cuya cantidad sea distinta de cero',
        schema: {
          type: 'boolean',
          example: true,
        },
      },
      {
        name: 'sort[by]',
        in: 'query',
        required: false,
        description:
          'Campo por el cual ordenar los productos (e.g., quantity, finalPrice)',
        schema: {
          type: 'string',
          example: 'quantity',
        },
      },
      {
        name: 'sort[order]',
        in: 'query',
        required: false,
        description: 'Orden (ascendente o descendente)',
        schema: {
          type: 'string',
          example: 'asc',
        },
      },
    ],
    responses: {
      200: {
        description:
          'Lista de productos filtrada y ordenada obtenida correctamente',
        content: {
          'application/json': {
            schema: {
              type: 'object',
              properties: {
                total: {
                  type: 'integer',
                  description: 'Total de productos filtrados',
                  example: 10,
                },
                totalQuantity: {
                  type: 'integer',
                  description:
                    'Suma total de cantidades de productos disponibles',
                  example: 150,
                },
                products: {
                  type: 'array',
                  items: {
                    $ref: '#/components/schemas/ProductOutput',
                  },
                },
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

export default queryProducts;
