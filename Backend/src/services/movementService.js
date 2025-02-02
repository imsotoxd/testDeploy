// movementService.js
import { Movement } from '../models/index.js';

// Servicio para crear un movimiento
export const createMovementService = async ({ sku, name, type, userId, productId }) => {
    try {
        const movement = await Movement.create({
            sku,
            name,
            type,
            userId,
            productId,
        });
        return movement;
    } catch (error) {
        throw new Error(`Error al crear movimiento: ${error.message}`);
    }
};

// Servicio para obtener todos los movimientos
export const getMovementService = async () => {
    try {
        const movements = await Movement.findAll();
        return movements;
    } catch (error) {
        throw new Error(`Error al obtener movimientos: ${error.message}`);
    }
};

// Obtener un movimiento por ID
export const getIdMovementService = async (id) => {
    try {
        const movement = await Movement.findByPk(id);
        return movement;
    } catch (error) {
        throw new Error(`Error al obtener el movimiento: ${error.message}`);
    }
};

// Actualizar un movimiento
export const updateMovementService = async (id, movementData) => {
    try {
        const movement = await Movement.findByPk(id);
        if (!movement) {
            throw new Error('Movimiento no encontrado.');
        }
        await movement.update(movementData);
        return movement;
    } catch (error) {
        throw new Error(`Error al actualizar el movimiento: ${error.message}`);
    }
};

// Eliminar un movimiento
export const deleteMovementService = async (id) => {
    try {
        const movement = await Movement.findByPk(id);
        if (!movement) {
            throw new Error('Movimiento no encontrado.');
        }
        await movement.destroy();
    } catch (error) {
        throw new Error(`Error al eliminar el movimiento: ${error.message}`);
    }
};

// Obtener los movimientos por producto
export const productMovementService = async (productId) => {
    try {
        const movements = await Movement.findAll({
            where: { productId },
        });
        return movements;
    } catch (error) {
        throw new Error(`Error al obtener movimientos para el producto: ${error.message}`);
    }
};
