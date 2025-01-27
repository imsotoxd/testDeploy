import { Category } from "../models/index.js"; '../models/index.js';

export const createCategory = async (name, description, custom) => {
    return await Category.create({
        name,
        description,
        custom
    });
};

export const getAllCategories = async () => {
    return await Category.findAll();
};

export const getCategoryById = async (id) => {
    const category = await Category.findOne({
        where: { id },
    });
    if (!category) throw new Error('Categoría no encontrada.');
    return category;
};

export const updateCategory = async (id, data) => {
    const category = await Category.findByPk(id);
    if (!category) throw new Error('Categoría no encontrada.');
    await category.update(data);
    return category;
};

export const deleteCategory = async (id) => {
    const category = await Category.findByPk(id);
    if (!category) throw new Error('Categoría no encontrada.');
    await category.destroy();
};