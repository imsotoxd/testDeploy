import { body } from 'express-validator';

// Validación para el SKU (opcional, pero si se envía, debe ser un UUID válido)
export const skuValidation = body('sku')
    .optional()
    .isUUID()
    .withMessage('El SKU debe ser un UUID válido.');

// Validación para el nombre del movimiento
export const nameValidation = body('name')
    .notEmpty()
    .withMessage('El nombre del movimiento es obligatorio.')
    .isLength({ min: 3 })
    .withMessage('El nombre del movimiento debe tener al menos 3 caracteres.')
    .isLength({ max: 100 })
    .withMessage('El nombre del movimiento no puede exceder los 100 caracteres.');

// Validación para el tipo de movimiento
export const typeValidation = body('type')
    .notEmpty()
    .withMessage('El tipo de movimiento es obligatorio.')
    .isIn(['expired', 'sale', 'purchase', 'return'])
    .withMessage('El tipo de movimiento no es válido. Los valores permitidos son: expired, sale, purchase, return.');

// Validación para el ID del usuario
export const userIdValidation = body('userId')
    .notEmpty()
    .withMessage('El ID del usuario es obligatorio.')
    .isUUID()
    .withMessage('El ID del usuario debe ser un UUID válido.');

// Validación para el ID del producto
export const productIdValidation = body('productId')
    .notEmpty()
    .withMessage('El ID del producto es obligatorio.')
    .isUUID()
    .withMessage('El ID del producto debe ser un UUID válido.');

// Middleware combinado para validar un movimiento
export const validateMovement = [
    skuValidation,
    nameValidation,
    typeValidation,
    userIdValidation,
    productIdValidation,
];
