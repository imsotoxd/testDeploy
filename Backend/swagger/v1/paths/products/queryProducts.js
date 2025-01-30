const queryProducts = {
  get: {
    tags: ['Productos'],
    summary: 'Consultar productos con filtrado, ordenamiento y paginación',
    description: 'Obtiene una lista de productos aplicando filtros, ordenamientos y paginación.',
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
        description: 'Filtrar productos cuya cantidad sea igual o menor a la cantidad mínima y excluir aquellos con cantidad igual a cero',
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
        name: 'filter[totalProducts]',
        in: 'query',
        required: false,
        description: 'Filtrar para traer todos los productos activos',
        schema: {
          type: 'boolean',
          example: true,
        },
      },
      {
        name: 'sort[by]',
        in: 'query',
        required: false,
        description: 'Campo por el cual ordenar los productos (e.g., quantity, finalPrice)',
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
      {
        name: 'page',
        in: 'query',
        required: false,
        description: 'Número de página',
        schema: {
          type: 'integer',
          example: 1,
        },
      },
      {
        name: 'limit',
        in: 'query',
        required: false,
        description: 'Cantidad de productos por página',
        schema: {
          type: 'integer',
          example: 10,
        },
      },
    ],
    responses: {
      200: {
        description: 'Lista de productos filtrada, ordenada y paginada obtenida correctamente',
        content: {
          'application/json': {
            schema: {
              type: 'object',
              properties: {
                total: {
                  type: 'integer',
                  description: 'Total de productos filtrados',
                  example: 100,
                },
                totalQuantity: {
                  type: 'integer',
                  description: 'Cantidad total de la página actual',
                  example: 300,
                },
                totalAvailableQuantity: {
                  type: 'integer',
                  description: 'Cantidad total disponible de todos los productos sin importar la paginación',
                  example: 500,
                },
                totalItems: {
                  type: 'integer',
                  description: 'Total de productos disponibles sin importar la paginación',
                  example: 20,
                },
                products: {
                  type: 'array',
                  items: {
                    $ref: '#/components/schemas/ProductOutput',
                  },
                },
                currentPage: {
                  type: 'integer',
                  description: 'Número de página actual',
                  example: 1,
                },
                totalPages: {
                  type: 'integer',
                  description: 'Total de páginas disponibles',
                  example: 10,
                },
                page: {
                  type: 'integer',
                  description: 'Número de página actual (deprecated)',
                  example: 1,
                },
                limit: {
                  type: 'integer',
                  description: 'Cantidad de productos por página',
                  example: 10,
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
