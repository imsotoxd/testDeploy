// ./src/routes/userRoutes.js

import express from 'express';
import {
  registerUser,
  loginUserController,
  logoutUserController,
  deleteUser,
  getAllUsers,
  getUserById,
  updateUser,
  restoreUser,
} from '../controllers/userController.js';

// Middlewares
import { authenticateToken } from '../middleware/authMiddleware.js';
import { handleValidationErrors } from '../middleware/handleValidationErrors.js';
import {
  validateRegisterUser,
  validateLoginUser,
  validateUpdateUser,
} from '../middleware/validation/userValidation.js';

const router = express.Router();

router.post(
  '/register',
  validateRegisterUser,
  handleValidationErrors,
  registerUser
);
router.post(
  '/login',
  validateLoginUser,
  handleValidationErrors,
  loginUserController
);
router.post('/logout', authenticateToken, logoutUserController);

router.get('/', authenticateToken, getAllUsers);
router.get('/:id', authenticateToken, getUserById);
router.put(
  '/update/:id',
  validateUpdateUser,
  handleValidationErrors,
  authenticateToken,
  updateUser
);
router.delete('/delete/:id', authenticateToken, deleteUser);
router.put('/restore/:id', authenticateToken, restoreUser);

export default router;
