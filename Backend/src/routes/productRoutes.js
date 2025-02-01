/* eslint-disable prettier/prettier */
import express from 'express';
import { authenticateToken } from '../middleware/authMiddleware.js';
import { handleValidationErrors } from '../middleware/handleValidationErrors.js';
import {
  validateProduct,
  validateProductUpdate,
} from '../middleware/validation/productValidation.js';
import {
  createProduct,
  getAllProducts,
  getProductById,
  updateProduct,
  deleteProduct,
  restoreProduct,
  queryProducts,
} from '../controllers/productController.js';

const router = express.Router();

router.post(
  '/products',
  authenticateToken,
  validateProduct,
  handleValidationErrors,
  createProduct
);
router.get('/products/all', authenticateToken, getAllProducts);
router.get('/products/:id', authenticateToken, getProductById);
router.put(
  '/products/update/:id',
  authenticateToken,
  validateProductUpdate,
  handleValidationErrors,
  updateProduct
);
router.delete('/products/delete/:id', authenticateToken, deleteProduct);
router.put('/products/restore/:id', authenticateToken, restoreProduct);

// Nueva ruta para consultas de filtrado y ordenamiento
router.get('/product/query', authenticateToken, queryProducts);

export default router;
