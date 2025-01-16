import {
  firstnameValidation,
  lastnameValidation,
  emailValidation,
  passwordValidation,
  birthdateValidation,
  validateRegisterUser,
  validateLoginUser,
} from './fieldsValidation.js';

import {
  validateUpdateUser
} from './validateUpdateUser.js';

// Validaciones para registrar un usuario
export { validateRegisterUser };

// Validaciones para iniciar sesión de un usuario
export { validateLoginUser };

// Validaciones para actualizar un usuario
export { validateUpdateUser };