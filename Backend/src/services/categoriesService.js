import { Category } from "../models/index.js";
import { predefinedCategories } from '../utils/categoryTypes.js';

export const createCategory = async (name, description = '', custom = true) => {
    const existingCategories = await getAllCategories();
    if (existingCategories.length > 15) {
        const error = new Error(
            'Se alcanzó el máximo de categorías. Para más, use el plan de pago.'
        );
        error.statusCode = 400;
        throw error;
    }
    return await Category.create({
        name,
        description,
        custom,
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

export const bulkCreateCategories = async (names) => {
    try {
        const existingCategories = await getAllCategories();

        const flatNames = names.flat();

        const existingCategoryNames = existingCategories.map(category => category.name);
        const newCategoryNames = flatNames.filter(name => !existingCategoryNames.includes(name));

        if (existingCategories.length + newCategoryNames.length > 15) {
            const error = new Error(
                'Se alcanzó el máximo de categorías. Para más, use el plan de pago.'
            );
            error.statusCode = 400;
            throw error;
        }

        const newCategories = newCategoryNames.map((name) => ({
            name,
            description: '',
            custom: true,
        }));

        console.log(newCategories);

        return await Category.bulkCreate(newCategories, { validate: true });
    } catch (error) {
        console.error(error);
        throw error;
    }
};

export const createDefaultCategories = async (type) => {
    try {
        if (!predefinedCategories[type]) {
            const error = new Error(`El tipo de categoría "${type}" no es válido.`);
            error.statusCode = 400;
            throw error;
        }

        const existingCategories = await getAllCategories();
        if (existingCategories.length > 15) {
            const error = new Error(
                'Se alcanzó el máximo de categorías. Para más, use el plan de pago.'
            );
            error.statusCode = 400;
            throw error;
        }

        const categoriesToCreate = predefinedCategories[type].map((name) => ({
            name,
            description: `Descripción para ${name}`,
            custom: false,
        }));

        return await Category.bulkCreate(categoriesToCreate);
    } catch (error) {
        throw error;
    }
};
