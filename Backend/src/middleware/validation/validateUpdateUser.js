import { body } from 'express-validator';

export const firstnameValidationUpdate = body('firstname')
    .optional()
    .isLength({ min: 3 })
    .withMessage('El nombre debe tener al menos 3 caracteres.');

export const lastnameValidationUpdate = body('lastname')
    .optional()
    .isLength({ min: 3 })
    .withMessage('El apellido debe tener al menos 3 caracteres.');

export const emailValidationUpdate = body('email')
    .optional()
    .isEmail()
    .withMessage('El correo electrónico debe tener un formato válido.');

export const passwordValidationUpdate = body('password')
    .optional()
    .isLength({ min: 6 })
    .withMessage('La contraseña debe tener al menos 6 caracteres.');

export const birthdateValidationUpdate = body('birthdate')
    .optional()
    .isDate()
    .withMessage(
        'La fecha de nacimiento debe tener un formato válido (YYYY-MM-DD).'
    )
    .custom((value) => {
        const birthdate = new Date(value);
        const today = new Date();
        let age = today.getFullYear() - birthdate.getFullYear();
        const month = today.getMonth() - birthdate.getMonth();
        if (month < 0 || (month === 0 && today.getDate() < birthdate.getDate())) {
            age--;
        }
        if (age < 18) {
            throw new Error('Debes tener al menos 18 años.');
        }
        return true;
    });

export const validateUpdateUser = [
    firstnameValidationUpdate,
    lastnameValidationUpdate,
    emailValidationUpdate,
    passwordValidationUpdate,
    birthdateValidationUpdate,
];
