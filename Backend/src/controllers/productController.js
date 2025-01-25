import {
  createProduct as createProductService,
  getAllProducts as getAllProductsService,
  getProductById as getProductByIdService,
  updateProduct as updateProductService,
  deleteProduct as deleteProductService,
  restoreProduct as restoreProductService,
} from '../services/productService.js';

import { User, Category } from '../models/index.js';

// Crear un nuevo producto
export const createProduct = async (req, res) => {
  try {
    const { userId, categoryId, ...productData } = req.body;
    // Verificar si el usuario existe
    const userExists = await User.findByPk(userId);
    if (!userExists) {
      return res
        .status(400)
        .json({ message: 'Invalid userId: User does not exist' });
    }
    // Verificar si la categoría existe
    const categoryExists = await Category.findByPk(categoryId);
    if (!categoryExists) {
      return res
        .status(400)
        .json({ message: 'Invalid categoryId: Category does not exist' });
    }
    // Crear el nuevo producto
    const newProduct = await createProductService({
      userId,
      categoryId,
      ...productData,
    });
    res
      .status(201)
      .json({ message: 'Product created successfully', product: newProduct });
  } catch (error) {
    res.status(500).json({ message: 'Internal server error', error });
  }
};

// Obtener la lista de todos los productos
export const getAllProducts = async (req, res) => {
  try {
    const products = await getAllProductsService();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: 'Internal server error', error });
  }
};

// Obtener los detalles de un producto por su ID
export const getProductById = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await getProductByIdService(id);
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: 'Internal server error', error });
  }
};

// Actualizar la información de un producto existente
export const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedProduct = await updateProductService(id, req.body);
    res.status(200).json({
      message: 'Product updated successfully',
      product: updatedProduct,
    });
  } catch (error) {
    res.status(500).json({ message: 'Internal server error', error });
  }
};

// Eliminar un producto (soft delete)
export const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedProduct = await deleteProductService(id);
    res.status(200).json({
      message: 'Product deleted successfully',
      product: deletedProduct,
    });
  } catch (error) {
    res.status(500).json({ message: 'Internal server error', error });
  }
};

// Restaurar un producto eliminado
export const restoreProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const restoredProduct = await restoreProductService(id);
    res.status(200).json({
      message: 'Product restored successfully',
      product: restoredProduct,
    });
  } catch (error) {
    res.status(500).json({ message: 'Internal server error', error });
  }
};
