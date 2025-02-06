import { User } from '../models/index.js'; // Importar el modelo de usuario inicializado
import { hashPassword, comparePassword } from '../utils/bcrypt.js';
import { generateAuthToken } from '../utils/jwt.js';
import { createCategory } from './categoriesService.js';
import {predefinedCategories} from '../utils/categoryTypes.js';

// Crear un nuevo usuario
export const createUser = async (
  firstname,
  lastname,
  email,
  password,
  birthdate,
  nameCompany,
  businessArea
) => {
  if (!firstname || !lastname || !email || !password || !birthdate || !nameCompany || !businessArea) {
    throw new Error('Todos los campos son obligatorios');
  }

  // Verificar si el correo electrónico ya está registrado
  const existingUser = await User.findOne({ where: { email } });
  if (existingUser) {
    throw new Error('El correo ya está registrado');
  }

  // Cifrar la contraseña
  const hashedPassword = await hashPassword(password);

  // Guardar el nuevo usuario en la base de datos
  const user = await User.create({
    firstname,
    lastname,
    email,
    password: hashedPassword,
    birthdate,
    nameCompany,
    businessArea,
  });

  if (!user.id) {
    throw new Error('Error al crear el usuario');
  }

  // Crear categorías predeterminadas basadas en el businessArea
  
  const categoriesToCreate = predefinedCategories[businessArea];
  if (categoriesToCreate && user.id) {
    for (const categoryName of categoriesToCreate) {
      await createCategory({
        name: String(categoryName), // Asegúrate de que categoryName es una cadena
        description: '', // Puedes agregar una descripción si es necesario
        custom: false, // Categorías predeterminadas
        userId: user.id, // Asocia la categoría con el usuario
      });
    }
  }

  return user;
};

// Iniciar sesión de un usuario
export const loginUser = async (email, password) => {
  const user = await User.findOne({
    where: { email, activated: true },
  });
  // Comparar la contraseña
  const isMatch = await comparePassword(password, user.password);
  if (isMatch) {
    // Actualizar `activated` a `true`
    if (!user.session) {
      await user.update({ session: true });
      return user;
    } else {
      await user.update({ session: false });
      const error = new Error(
        'El usuario ya estaba conectado. Se ha cerrado la sesión correctamente.'
      );
      error.statusCode = 400;
      throw error;
    }
  }
  return null;
};

// Servicio de Logout
export const logoutUserService = async (userId) => {
  const user = await User.findByPk(userId);
  if (!user) {
    throw new Error('User not found');
  }
  await user.update({ session: false });
  return user;
};

// Obtener todos los usuarios
export const getAllUsersService = async () => {
  return await User.findAll({
    attributes: ['id', 'firstname', 'lastname', 'email', 'birthdate', 'nameCompany', 'businessArea'],
    where: { activated: true },
  });
};

// Obtener usuario por ID
export const getUserByIdService = async (id) => {
  return await User.findOne({
    where: { id, activated: true },
    attributes: ['id', 'firstname', 'lastname', 'email', 'birthdate', 'nameCompany', 'businessArea'],
  });
};

// Actualizar usuario
export const updateUserService = async (
  id,
  firstname,
  lastname,
  email,
  password,
  birthdate,
  nameCompany,
  businessArea,
) => {
  const user = await User.findOne({ where: { id, activated: true } });
  if (!user) {
    throw new Error('User not found');
  }
  let passwordHash;
  if (password) {
    passwordHash = await hashPassword(password);
  }

  const data = {
    firstname,
    lastname,
    email,
    password: passwordHash,
    birthdate,
    nameCompany,
    businessArea,
  };
  await User.update(data, { where: { id } });
  return data;
};

// Eliminar usuario (soft delete)
export const deleteUserService = async (id) => {
  const user = await User.findOne({ where: { id, activated: true } });
  if (!user) {
    throw new Error('User not found');
  }

  await user.update({ activated: false });
  return user;
};

// Restaurar usuario
export const restoreUserService = async (id) => {
  const user = await User.findOne({ where: { id, activated: false } });
  if (!user) {
    throw new Error('User not found');
  }

  await user.update({ activated: true });
  return user;
};

// Generar el token JWT (ya no es necesario redefinir la función)
export const generateAuthTokenForUser = (userId) => {
  return generateAuthToken(userId); // Usar la función importada
};
