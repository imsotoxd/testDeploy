import { body } from 'express-validator';

export const validateProduct = [
  body('name').notEmpty().withMessage('The product name is required'),
  body('description')
    .notEmpty()
    .withMessage('The product description is required'),
  body('sku').notEmpty().withMessage('The product SKU is required'),
  body('quantity')
    .isInt({ min: 0 })
    .withMessage('Quantity must be a non-negative integer'),
  body('finalPrice')
    .isFloat({ gt: 0 })
    .withMessage('Final price must be a positive number'),
  body('costPrice')
    .isFloat({ gt: 0 })
    .withMessage('Cost price must be a positive number'),
  body('expirationDate')
    .optional()
    .isDate()
    .withMessage('Expiration date must be a valid date'),
  body('minimumQuantity')
    .isInt({ min: 0 })
    .withMessage('Minimum quantity must be a non-negative integer'),
];

export const validateProductUpdate = [
  body('name')
    .optional()
    .notEmpty()
    .withMessage('The product name is required'),
  body('description')
    .optional()
    .notEmpty()
    .withMessage('The product description is required'),
  body('sku').optional().notEmpty().withMessage('The product SKU is required'),
  body('quantity')
    .optional()
    .isInt({ min: 0 })
    .withMessage('Quantity must be a non-negative integer'),
  body('finalPrice')
    .optional()
    .isFloat({ gt: 0 })
    .withMessage('Final price must be a positive number'),
  body('costPrice')
    .optional()
    .isFloat({ gt: 0 })
    .withMessage('Cost price must be a positive number'),
  body('expirationDate')
    .optional()
    .isDate()
    .withMessage('Expiration date must be a valid date'),
  body('minimumQuantity')
    .optional()
    .isInt({ min: 0 })
    .withMessage('Minimum quantity must be a non-negative integer'),
];
