import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';
import UserModel from './User.js';
import ProductModel from './Product.js';
import CategoryModel from './Category.js';
import MovementModel from './Movement.js';
import NotificationModel from './Notification.js';

dotenv.config();

const sequelize = new Sequelize(process.env.DATABASE_URL, {
  dialect: 'mysql',
  logging: false,
});

const User = UserModel(sequelize, Sequelize);
const Product = ProductModel(sequelize, Sequelize);
const Category = CategoryModel(sequelize, Sequelize);
const Movement = MovementModel(sequelize, Sequelize);
const Notification = NotificationModel(sequelize, Sequelize);

User.hasMany(Product, { foreignKey: 'userId' });
Product.belongsTo(User, { foreignKey: 'userId' });

User.hasMany(Category, { foreignKey: 'userId' });
Category.belongsTo(User, { foreignKey: 'userId' });

Category.hasMany(Product, { foreignKey: 'categoryId' });
Product.belongsTo(Category, { foreignKey: 'categoryId' });

User.hasMany(Movement, { foreignKey: 'userId' });
Movement.belongsTo(User, { foreignKey: 'userId' });

Product.hasMany(Movement, { foreignKey: 'productId' });
Movement.belongsTo(Product, { foreignKey: 'productId' });

Product.hasMany(Notification, { foreignKey: 'notificationId' });
Notification.belongsTo(Product, { foreignKey: 'productId' });

export { sequelize, User, Product, Category, Movement, Notification };
