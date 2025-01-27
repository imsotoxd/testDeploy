const ProductInput = {
  type: 'object',
  properties: {
    sku: {
      type: 'string',
      description: 'SKU del producto.',
      example: 'SKU-010',
    },
    name: {
      type: 'string',
      description: 'Nombre del producto.',
      example: 'Cinta Métrica',
    },
    description: {
      type: 'string',
      description: 'Descripción del producto.',
      example: 'Cinta métrica de 5 metros, fácil de usar.',
    },
    quantity: {
      type: 'integer',
      description: 'Cantidad del producto en inventario.',
      example: 10,
    },
    finalPrice: {
      type: 'number',
      format: 'float',
      description: 'Precio final de venta del producto.',
      example: 10,
    },
    costPrice: {
      type: 'number',
      format: 'float',
      description: 'Costo de compra del producto.',
      example: 6,
    },
    expirationDate: {
      type: 'string',
      format: 'date-time',
      description: 'Fecha de expiración del producto.',
      example: null,
    },
    minimumQuantity: {
      type: 'integer',
      description: 'Cantidad mínima requerida del producto.',
      example: 15,
    },
    activated: {
      type: 'boolean',
      description: 'Indica si el producto está activo.',
      example: true,
    },
    userId: {
      type: 'string',
      description: 'ID del usuario que creó el producto.',
      example: '066e8a3f-d8b7-423a-ad58-f0219977dc94',
    },
    categoryId: {
      type: 'string',
      description: 'ID de la categoría a la que pertenece el producto.',
      example: '06b8892d-7c6e-4448-9dfc-3d4e678efc09',
    },
  },
  required: [
    'name',
    'sku',
    'quantity',
    'finalPrice',
    'costPrice',
    'categoryId',
    'userId',
  ],
  additionalProperties: false,
};

export default ProductInput;
