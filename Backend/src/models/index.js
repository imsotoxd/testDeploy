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

Category.hasMany(Product, { foreignKey: 'categoryId' });
User.hasMany(Category, { foreignKey: 'userId' });
Category.belongsTo(User, { foreignKey: 'userId' });
User.hasMany(Product, { foreignKey: 'userId' });
User.hasMany(Movement, { foreignKey: 'userId' });
Product.hasMany(Movement, { foreignKey: 'productId' });
Product.hasMany(Notification, { foreignKey: 'notificationId' });

export { sequelize, User, Product, Category, Movement, Notification };
