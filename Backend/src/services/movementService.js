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
export const getIdMovementService = async (id) => { };

// Actualizar un movimiento
export const updateMovementService = async (id, movementData) => { };

// Eliminar un movimiento
export const deleteMovementService = async (id) => { };

// Obtener los movimientos por producto
export const productMovementService = async (productId) => { };
