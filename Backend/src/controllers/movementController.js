// movementController.js

import { createMovementService, getMovementService, deleteMovementService, getIdMovementService, productMovementService, updateMovementService } from '../services/movementService.js';

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
export const getIdMovementController = async (req, res) => {
    try {
        const { id } = req.params;
        const movement = await getIdMovementService(id);
        if (!movement) {
            return res.status(404).json({
                success: false,
                message: 'Movimiento no encontrado',
            });
        }
        res.status(200).json({
            success: true,
            data: movement,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};

// Actualizar un movimiento
export const updateMovementController = async (req, res) => {
    try {
        const { id } = req.params;
        const movementData = req.body;
        const updatedMovement = await updateMovementService(id, movementData);
        if (!updatedMovement) {
            return res.status(404).json({
                success: false,
                message: 'Movimiento no encontrado',
            });
        }
        res.status(200).json({
            success: true,
            message: 'Movimiento actualizado correctamente',
            data: updatedMovement,
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message,
        });
    }
};

// Eliminar un movimiento
export const deleteMovementController = async (req, res) => {
    try {
        const { id } = req.params;
        await deleteMovementService(id);
        res.status(200).json({
            success: true,
            message: 'Movimiento eliminado correctamente',
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message,
        });
    }
};

// Obtener los movimientos por producto
export const productMovementController = async (req, res) => {
    try {
        const { productId } = req.params;
        const movements = await productMovementService(productId);
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
