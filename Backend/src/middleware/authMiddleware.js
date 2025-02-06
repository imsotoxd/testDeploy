// ./src/middleware/authMiddleware.js

import { verifyAuthToken } from '../utils/jwt.js';

export const authenticateToken = (req, res, next) => {
  const token = req.header('Authorization')?.replace('Bearer ', '');

  if (!token) {
    return res
      .status(401)
      .json({ message: 'Acceso denegado. Token no proporcionado.' });
  }

  const decoded = verifyAuthToken(token);
  if (!decoded) {
    return res.status(400).json({ message: 'Token invalido' });
  }

  req.userId = decoded.userId;
  req.userRol = decoded.userRol;
  next();
};
