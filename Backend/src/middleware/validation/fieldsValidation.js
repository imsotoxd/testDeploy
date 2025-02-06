import { body } from 'express-validator';

export const firstnameValidation = body('firstname')
  .notEmpty()
  .withMessage('El nombre es obligatorio.')
  .isLength({ min: 3 })
  .withMessage('El nombre debe tener al menos 3 caracteres.');

export const lastnameValidation = body('lastname')
  .notEmpty()
  .withMessage('El apellido es obligatorio.')
  .isLength({ min: 3 })
  .withMessage('El apellido debe tener al menos 3 caracteres.');

export const emailValidation = body('email')
  .notEmpty()
  .withMessage('El correo electrónico no puede estar vacío.')
  .isEmail()
  .withMessage('El correo electrónico debe tener un formato válido.');

export const passwordValidation = body('password')
  .notEmpty()
  .withMessage('La contraseña no puede estar vacía.')
  .isLength({ min: 6 })
  .withMessage('La contraseña debe tener al menos 6 caracteres.');

export const birthdateValidation = body('birthdate')
  .notEmpty()
  .withMessage('La fecha de nacimiento es obligatoria.')
  .isDate()
  .withMessage('La fecha de nacimiento debe tener un formato válido (YYYY-MM-DD).')
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

export const nameCompanyValidation = body('nameCompany')
  .notEmpty()
  .withMessage('El nombre de la empresa es obligatorio.')
  .isLength({ min: 3 })
  .withMessage('El nombre de la empresa debe tener al menos 3 caracteres.');

export const businessAreaValidation = body('businessArea')
  .notEmpty()
  .withMessage('El área de negocio es obligatoria.')
  .isIn(['Alimentos y bebidas', 'Bienes e insumos', 'Tecnología', 'Salud'])
  .withMessage('El área de negocio debe ser una de las opciones válidas.');

export const validateRegisterUser = [
  firstnameValidation,
  lastnameValidation,
  emailValidation,
  passwordValidation,
  birthdateValidation,
  nameCompanyValidation,
  businessAreaValidation,
];

export const validateLoginUser = [emailValidation, passwordValidation];
