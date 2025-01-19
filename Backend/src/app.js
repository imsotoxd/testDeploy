// ./src/app.js

import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

// Import Routes
import userRoutes from './routes/userRoutes.js';

// Configuracion
dotenv.config();
const app = express();
app.use(express.json());

// Configurar CORS
const allowedOrigin = [
  // 'https://s17-09-n-node-react-2.onrender.com', link deploy
  // 'https://s17-09-n-node-react.onrender.com',
  // 'http://localhost:5173', ruta local
  process.env.CLIENT_URL, // Usar una variable de entorno para la URL del cliente
];

app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin || allowedOrigin.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error('Not allowed by CORS'));
      }
    },
    methods: 'GET,POST,PUT,DELETE',
    preflightContinue: false,
    optionsSuccessStatus: 204,
    credentials: true,
    allowedHeaders: [
      'Content-Type',
      'Authorization',
      'Content-Disposition',
      'Access-Control-Allow-Origin',
      'Access-Control-Allow-Credentials',
    ],
  })
);

// Swagger
import setupSwaggerV1 from '../swagger/v1/main.js';
setupSwaggerV1(app);

// Morgan
import morgan from 'morgan';
app.use(
  morgan(':method :url :status :res[content-length] - :response-time ms')
);

// Routes
app.use('/api/v1/users', userRoutes);

export default app;
