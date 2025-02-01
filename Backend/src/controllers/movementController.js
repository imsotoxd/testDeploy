// movementController.js

import { createMovementService, getMovementService } from '../services/movementService.js';

export const createMovementController = async (req, res) => {
    try {
        const { sku, name, type, userId, productId } = req.body;

        const movement = await createMovementService({ sku, name, type, userId, productId });

        res.status(201).json({
            success: true,
            message: 'Movimiento creado exitosamente.',
            data: movement,
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message,
        });
    }
};

// Obtener todos los movimientos
export const getMovementController = async (req, res) => {
    try {
        const movements = await getMovementService();

        res.status(200).json({
            success: true,
            data: movements,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};

// Obtener un movimiento por ID
export const getIdMovementController = async (req, res) => { };

// Actualizar un movimiento
export const updateMovementController = async (req, res) => { };

// Eliminar un movimiento
export const deleteMovementController = async (req, res) => { };

// Obtener los movimientos por producto
export const productMovementController = async (req, res) => { };
