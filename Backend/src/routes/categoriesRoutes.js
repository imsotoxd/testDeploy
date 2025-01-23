import express from 'express';
import {
    createCategoryController,
    getAllCategoriesController,
    getCategoryByIdController,
    updateCategoryController,
    deleteCategoryController,
} from '../controllers/categoriesController.js';
import { validateCategory } from '../middleware/validation/categoryValidation.js';
import { authenticateToken } from '../middleware/authMiddleware.js';
import { handleValidationErrors } from '../middleware/handleValidationErrors.js';


const router = express.Router();

router.post('/', authenticateToken, validateCategory, handleValidationErrors, createCategoryController);
router.get('/all', getAllCategoriesController);
router.get('/:id', getCategoryByIdController);
router.put('/update/:id', authenticateToken, validateCategory, handleValidationErrors, updateCategoryController);
router.delete('/delete/:id', authenticateToken, deleteCategoryController);

export default router;