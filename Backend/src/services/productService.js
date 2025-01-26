/* eslint-disable prettier/prettier */
import { Product } from '../models/index.js';
import { Op, Sequelize } from 'sequelize';

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

// Nuevo servicio para consultas de filtrado y ordenamiento
export const queryProducts = async (filter, sort) => {
  const whereClause = {};
  const orderClause = [];
  let totalQuantity = 0;

  if (filter.minimumQuantity) {
    whereClause.quantity = {
      [Op.and]: [
        { [Op.lte]: Sequelize.col('minimumQuantity') },
        { [Op.ne]: 0 }, // Excluir productos con quantity igual a cero
      ],
    };
  }

  if (filter.zeroQuantity) {
    whereClause.quantity = { [Op.eq]: 0 };
  }

  // Condición adicional: productos cuya cantidad sea distinta de cero
  if (filter.nonZeroQuantity) {
    whereClause.quantity = { [Op.ne]: 0 };
  }

  if (sort.by) {
    orderClause.push([sort.by, sort.order || 'ASC']);
  }

  const products = await Product.findAll({
    where: whereClause,
    order: orderClause,
  });

  // Sumar todas las cantidades de productos disponibles
  if (filter.nonZeroQuantity) {
    totalQuantity = products.reduce(
      (sum, product) => sum + product.quantity,
      0
    );
  }

  return { products, totalQuantity };
};
