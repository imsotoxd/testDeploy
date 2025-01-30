import express from 'express';
import {
    createCategoryController,
    getAllCategoriesController,
    getCategoryByIdController,
    updateCategoryController,
    deleteCategoryController,
    bulkCreateCategoriesController,
    createDefaultCategoriesController,
} from '../controllers/categoriesController.js';
import { validateCategory } from '../middleware/validation/categoryValidation.js';
import { authenticateToken } from '../middleware/authMiddleware.js';
import { handleValidationErrors } from '../middleware/handleValidationErrors.js';

const router = express.Router();

router.post('/', authenticateToken, validateCategory, handleValidationErrors, createCategoryController);
router.post('/bulk', authenticateToken, bulkCreateCategoriesController);
router.post('/defaults', authenticateToken, handleValidationErrors, createDefaultCategoriesController);

router.get('/all', authenticateToken, getAllCategoriesController);
router.get('/:id', authenticateToken, getCategoryByIdController);
router.put('/update/:id', authenticateToken, validateCategory, handleValidationErrors, updateCategoryController);
router.delete('/delete/:id', authenticateToken, deleteCategoryController);

export default router;
