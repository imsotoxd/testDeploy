import { User } from '../models/index.js'; // Importar el modelo de usuario inicializado
import { hashPassword, comparePassword } from '../utils/bcrypt.js';
import { generateAuthToken } from '../utils/jwt.js';

// Crear un nuevo usuario
export const createUser = async (
  firstname,
  lastname,
  email,
  password,
  birthdate
) => {
  if (!firstname || !lastname || !email || !password || !birthdate) {
    throw new Error('All fields are required');
  }

  // Cifrar la contraseña
  const hashedPassword = await hashPassword(password);

  // Guardar el nuevo usuario en la base de datos
  return await User.create({
    firstname,
    lastname,
    email,
    password: hashedPassword,
    birthdate,
    activated: 1,
  });
};

// Iniciar sesión de un usuario
export const loginUser = async (email, password) => {
  const user = await User.findOne({ where: { email, activated: 1 } });
  console.log(user)
  if (!user) {
    return null;
  }

  // Comparar la contraseña
  const isMatch = await comparePassword(password, user.password);
  if (isMatch) {
    return user;
  }

  return null;
};

// Obtener todos los usuarios
export const getAllUsersService = async () => {
  return await User.findAll({
    attributes: ['id', 'firstname', 'lastname', 'email', 'birthdate'],
    where: { activated: 1 },
  });
};

// Obtener usuario por ID
export const getUserByIdService = async (id) => {
  return await User.findOne({
    where: { id, activated: 1 },
    attributes: ['id', 'firstname', 'lastname', 'email', 'birthdate'],
  });
};

// Actualizar usuario
export const updateUserService = async (
  id,
  firstname,
  lastname,
  email,
  password,
  birthdate
) => {
  const user = await User.findOne({ where: { id, activated: true } });
  if (!user) {
    throw new Error('User not found');
  }

  const passwordHash = await hashPassword(password);
  await user.update({
    firstname,
    lastname,
    email,
    password: passwordHash,
    birthdate,
  });
  return user;
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
