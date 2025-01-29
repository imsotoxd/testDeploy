/* eslint-disable prettier/prettier */
import {
  createProduct as createProductService,
  getAllProducts as getAllProductsService,
  getProductById as getProductByIdService,
  updateProduct as updateProductService,
  deleteProduct as deleteProductService,
  restoreProduct as restoreProductService,
  queryProducts as queryProductsService,
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
        .json({ message: 'ID de usuario no válido: el usuario no existe' });
    }
    // Verificar si la categoría existe
    const categoryExists = await Category.findByPk(categoryId);
    if (!categoryExists) {
      return res
        .status(400)
        .json({ message: 'ID de categoría no válido: la categoría no existe' });
    }
    // Crear el nuevo producto
    const newProduct = await createProductService({
      userId,
      categoryId,
      ...productData,
    });
    res
      .status(201)
      .json({ message: 'Producto creado con éxito', product: newProduct });
  } catch (error) {
    res.status(500).json({ message: 'Error interno del servidor', error });
  }
};

// Obtener la lista de todos los productos
export const getAllProducts = async (req, res) => {
  try {
    const userId = req.userId;
    const products = await getAllProductsService(userId);
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: 'Error interno del servidor', error });
  }
};

// Obtener los detalles de un producto por su ID
export const getProductById = async (req, res) => {
  try {
    const userId = req.userId;
    const { id } = req.params;
    const product = await getProductByIdService(id);
    if (!product || product.userId !== userId) {
      return res.status(403).json({ message: 'No tienes permiso para acceder a este producto.' });
    }
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: 'Error interno del servidor', error });
  }
};

// Actualizar la información de un producto existente
export const updateProduct = async (req, res) => {
  try {
    const userId = req.userId;
    const { id } = req.params;
    const updatedProduct = await updateProductService(userId, id, req.body);
    res.status(200).json({
      message: 'Producto actualizado con éxito',
      product: updatedProduct,
    });
  }  catch (error) {
    if (error.message === 'Producto no encontrado o no tienes permiso para actualizarlo') {
      res.status(403).json({ message: error.message });
    } else {
      res.status(500).json({ message: 'Error interno del servidor', error });
    }
  }
};

// Eliminar un producto (soft delete)
export const deleteProduct = async (req, res) => {
  try {
    const userId = req.userId;
    const { id } = req.params;
    const deletedProduct = await deleteProductService(userId, id);
    res.status(200).json({
      message: 'El producto se eliminó con éxito',
      product: deletedProduct,
    });
  } catch (error) {
    if (error.message === 'Producto no encontrado o no tienes permiso para eliminarlo') {
      res.status(403).json({ message: error.message });
    } else {
      res.status(500).json({ message: 'Error interno del servidor', error });
    }
  }
};

// Restaurar un producto eliminado
export const restoreProduct = async (req, res) => {
  try {
    const userId = req.userId;
    const { id } = req.params;
    const restoredProduct = await restoreProductService(userId, id);
    res.status(200).json({
      message: 'Producto restaurado con éxito',
      product: restoredProduct,
    });
  } catch (error) {
    if (error.message === 'Producto no encontrado o no tienes permiso para restaurarlo') {
      res.status(403).json({ message: error.message });
    } else {
      res.status(500).json({ message: 'Error interno del servidor', error });
    }
  }
};

// Nuevo controlador para consultas de filtrado y ordenamiento
export const queryProducts = async (req, res) => {
  try {
    const userId = req.userId;    
    const filter = req.query.filter || {};
    const sort = req.query.sort || {};
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;

    const { products, totalQuantity, totalAvailableQuantity, totalItems, currentPage, totalPages } =
      await queryProductsService(userId, filter, sort, page, limit);

    const response = {
      products,
      totalQuantity, // Cantidad total de la página actual
      totalAvailableQuantity, // Cantidad total disponible de todos los productos sin importar la paginación
      totalItems, // Total de productos disponibles sin importar la paginación
      currentPage,
      totalPages,
      page,
      limit,
    };

    // Incluir el total de productos en la lista si se aplica un filtro
    if (
      filter.minimumQuantity ||
      filter.zeroQuantity ||
      filter.nonZeroQuantity
    ) {
      response.total = products.length;
    }

    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ message: 'Error interno del servidor', error });
  }
};
