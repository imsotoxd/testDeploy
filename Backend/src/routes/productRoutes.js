import express from 'express';
import { authenticateToken } from '../middleware/authMiddleware.js';
import { verifyAdmin } from '../middleware/verifyAdmin.js';
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
} from '../controllers/productController.js';

const router = express.Router();

router.post(
  '/products',
  authenticateToken,
  validateProduct,
  handleValidationErrors,
  createProduct
);
router.get('/products', authenticateToken, getAllProducts);
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

export default router;
