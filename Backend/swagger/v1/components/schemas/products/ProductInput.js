const ProductInput = {
  type: 'object',
  properties: {
    sku: {
      type: 'string',
      description: 'SKU del producto.',
      example: 'abc123',
    },
    name: {
      type: 'string',
      description: 'Nombre del producto.',
      example: 'Martillo',
    },
    description: {
      type: 'string',
      description: 'Descripción del producto.',
      example: 'Martillo de acero para construcción.',
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
      example: 19.99,
    },
    costPrice: {
      type: 'number',
      format: 'float',
      description: 'Costo de compra del producto.',
      example: 14.99,
    },
    expirationDate: {
      type: 'string',
      format: 'date-time',
      description: 'Fecha de expiración del producto.',
      example: '2025-12-31T00:00:00.000Z',
    },
    minimumQuantity: {
      type: 'integer',
      description: 'Cantidad mínima requerida del producto.',
      example: 5,
    },
    activated: {
      type: 'boolean',
      description: 'Indica si el producto está activo.',
      example: true,
    },
    userId: {
      type: 'string',
      description: 'ID del usuario que creó el producto.',
      example: '077eff87-4076-4c01-938c-5623c91aedc2',
    },
    categoryId: {
      type: 'string',
      description: 'ID de la categoría a la que pertenece el producto.',
      example: '077eff87-4076-4c01-938c-5623c91aedc2',
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
