import { body } from 'express-validator';

// Validación para el nombre de la categoría
export const nameValidation = body('name')
    .notEmpty()
    .withMessage('El nombre de la categoría es obligatorio.')
    .isLength({ min: 3 })
    .withMessage('El nombre de la categoría debe tener al menos 3 caracteres.')
    .isLength({ max: 50 })
    .withMessage('El nombre de la categoría no puede exceder los 50 caracteres.');

// Validación para la descripción de la categoría
export const descriptionValidation = body('description')
    .optional()
    .isLength({ max: 200 })
    .withMessage('La descripción no puede exceder los 200 caracteres.');

// Validación para el campo "custom"
export const customValidation = body('custom')
    .optional()
    .isBoolean()
    .withMessage('El campo custom debe ser un valor booleano (true o false).');

// Middleware combinado para validar categorías
export const validateCategory = [
    nameValidation,
    descriptionValidation,
    customValidation,
];