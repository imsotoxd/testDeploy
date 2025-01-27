import {
  createUser,
  loginUser,
  logoutUserService,
  deleteUserService,
  getAllUsersService,
  getUserByIdService,
  updateUserService,
  restoreUserService,
} from '../services/userService.js';
import { generateAuthToken } from '../utils/jwt.js';

export const registerUser = async (req, res) => {
  try {
    const { firstname, lastname, email, password, birthdate } = req.body;

    const newUser = await createUser(
      firstname,
      lastname,
      email,
      password,
      birthdate
    );

    res
      .status(201)
      .json({ message: 'User created successfully', user: newUser });
  } catch (error) {
    if (error.message === 'Email already registered') {
      return res.status(409).json({
        message:
          'The email is already registered. Please use a different email.',
      });
    }
    if (error.name === 'ValidationError') {
      return res.status(422).json({
        message: 'Validation error',
        errors: error.errors,
      });
    }
    // Manejo de errores desconocidos
    console.error('Error in registerUser:', error);
    res.status(500).json({
      message: 'Internal server error',
    });
  }
};

export const loginUserController = async (req, res) => {
  try {
    const { email, password } = req.body;
    // Autenticación del usuario
    const user = await loginUser(email, password);
    if (!user) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }
    // Generación del token JWT
    const token = await generateAuthToken(user.id);
    // Respuesta exitosa con token
    res.status(200).json({
      message: 'Login successful',
      token,
      user: {
        id: user.id,
        firstname: user.firstname,
        lastname: user.lastname,
        email: user.email,
      },
    });
  } catch (error) {
    if (error.name === 'ValidationError') {
      return res.status(422).json({
        message: 'Validation error',
        errors: error.errors,
      });
    }
    // Manejo de errores desconocidos
    console.error('Error in loginUserController:', error);
    res.status(500).json({
      message: 'Internal server error',
    });
  }
};

export const logoutUserController = async (req, res) => {
  try {
    const userId = req.userId;
    await logoutUserService(userId); // Llamar al servicio de logout
    res.status(200).json({ message: 'Cierre de sesión exitoso' });
  } catch (error) {
    console.error('Error in logoutUserController:', error);
    res.status(500).json({ message: 'Error interno del servidor' });
  }
};

// Obtener todos los usuarios
export const getAllUsers = async (req, res) => {
  try {
    const users = await getAllUsersService();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Obtener usuario por ID
export const getUserById = async (req, res) => {
  try {
    const { id } = req.params;
    // Verificar si el id en la URL coincide con el userId del token
    if (id !== req.userId.toString()) {
      return res
        .status(403)
        .json({ message: 'No tienes permiso para ver este usuario.' });
    }
    const user = await getUserByIdService(id);
    if (!user) {
      return res.status(404).json({ message: 'Usuario no encontrado' });
    }
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Actualizar usuario
export const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const { firstname, lastname, email, password, birthdate } = req.body;

    // Realizar la actualización
    const updated = await updateUserService(
      id,
      firstname,
      lastname,
      email,
      password,
      birthdate
    );

    if (!updated) {
      return res
        .status(404)
        .json({ message: 'Usuario no encontrado para actualizar' });
    }
    res
      .status(200)
      .json({ message: 'Usuario actualizado correctamente', updated });
  } catch (error) {
    if (error.name === 'ValidationError') {
      return res.status(422).json({
        message: 'Validation error',
        errors: error.errors,
      });
    }
    // Manejo de errores desconocidos
    console.error('Error in updateUser:', error);
    res.status(500).json({
      message: 'Internal server error',
    });
  }
};

// Eliminar usuario
export const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    // Verificar si el id en la URL coincide con el userId del token
    if (id !== req.userId.toString()) {
      return res
        .status(403)
        .json({ message: 'No tienes permiso para eliminar este usuario.' });
    }
    const deleted = await deleteUserService(id);
    if (!deleted) {
      return res
        .status(404)
        .json({ message: 'Usuario no encontrado para eliminar' });
    }
    res.status(200).json({ message: 'Usuario eliminado correctamente' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const restoreUser = async (req, res) => {
  try {
    const { id } = req.params;
    const restored = await restoreUserService(id);
    if (!restored) {
      return res
        .status(404)
        .json({ message: 'Usuario no encontrado para restaurar' });
    }
    res.status(200).json({ message: 'Usuario restaurado correctamente' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
