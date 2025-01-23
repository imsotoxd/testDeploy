import {
    createCategory,
    getAllCategories,
    getCategoryById,
    updateCategory,
    deleteCategory,
} from '../services/categoriesService.js';

export const createCategoryController = async (req, res) => {
    try {
        const { name, description, custom } = req.body;

        const category = await createCategory(name, description, custom);

        res.status(201).json({
            success: true,
            message: 'Categoría creada exitosamente.',
            data: category,
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message,
        });
    }
};

export const getAllCategoriesController = async (req, res) => {
    try {
        const categories = await getAllCategories();
        res.status(200).json({
            success: true,
            data: categories,
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message,
        });
    }
};

export const getCategoryByIdController = async (req, res) => {
    try {
        const { id } = req.params;
        const category = await getCategoryById(id);
        res.status(200).json({
            success: true,
            data: category,
        });
    } catch (error) {
        res.status(404).json({
            success: false,
            message: error.message,
        });
    }
};

export const updateCategoryController = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedCategory = await updateCategory(id, req.body);
        res.status(200).json({
            success: true,
            message: 'Categoría actualizada exitosamente.',
            data: updatedCategory,
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message,
        });
    }
};

export const deleteCategoryController = async (req, res) => {
    try {
        const { id } = req.params;
        await deleteCategory(id);
        res.status(200).json({
            success: true,
            message: 'Categoría eliminada exitosamente.',
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message,
        });
    }
};