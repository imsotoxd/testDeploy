import { Product } from '../models/index.js';

// Crear un nuevo producto
export const createProduct = async (productData) => {
  return await Product.create(productData);
};

// Obtener la lista de todos los productos
export const getAllProducts = async () => {
  return await Product.findAll();
};

// Obtener los detalles de un producto por su ID
export const getProductById = async (id) => {
  return await Product.findByPk(id);
};

// Actualizar la información de un producto existente
export const updateProduct = async (id, productData) => {
  const product = await Product.findByPk(id);
  if (!product) {
    throw new Error('Product not found');
  }
  return await product.update(productData);
};

// Eliminar un producto (soft delete)
export const deleteProduct = async (id) => {
  const product = await Product.findByPk(id);
  if (!product) {
    throw new Error('Product not found');
  }
  return await product.update({ activated: false });
};

// Restaurar un producto eliminado
export const restoreProduct = async (id) => {
  const product = await Product.findByPk(id);
  if (!product) {
    throw new Error('Product not found');
  }
  return await product.update({ activated: true });
};
