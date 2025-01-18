import app from './app.js';
import dotenv from 'dotenv';
import { sequelize } from './models/index.js'; // Importar la instancia de sequelize

dotenv.config();

const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || 'localhost';

// Conectar a la base de datos y sincronizar modelos
sequelize
  .authenticate()
  .then(() => {
    console.log('✅ Conexión a la base de datos exitosa');
    return sequelize.sync({ alter: true });
  })
  .then(() => {
    console.log('✅ Modelos sincronizados con la base de datos');
    app.listen(PORT, () => {
      console.log('\n==================================================');
      console.log(`🚀 Servidor corriendo en: http://${HOST}:${PORT}`);
      console.log(`📃 Swagger Docs: http://${HOST}:${PORT}/api-docs`);
      console.log('==================================================\n');
    });
  })
  .catch((error) => {
    console.error('❌ No se pudo conectar a la base de datos', error);
  });
