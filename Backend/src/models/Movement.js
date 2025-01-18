import { DataTypes } from 'sequelize';

const MovementModel = (sequelize) => {
  return sequelize.define(
    'Movement',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      sku: {
        type: DataTypes.UUID,
      },
      name: {
        type: DataTypes.STRING,
      },
      type: {
        type: DataTypes.ENUM('expired', 'sale', 'purchase', 'return'),
      },
      userId: {
        type: DataTypes.UUID,
        references: {
          model: 'User',
          key: 'id',
        },
      },
      productId: {
        type: DataTypes.UUID,
        references: {
          model: 'Product',
          key: 'id',
        },
      },
    },
    {
      timestamps: true,
      freezeTableName: true,
    }
  );
};

export default MovementModel;
