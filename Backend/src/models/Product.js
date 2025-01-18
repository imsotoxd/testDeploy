import { DataTypes } from 'sequelize';

const ProductModel = (sequelize) => {
  return sequelize.define(
    'Product',
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
      description: {
        type: DataTypes.STRING,
      },
      quantity: {
        type: DataTypes.INTEGER,
      },
      finalPrice: {
        type: DataTypes.FLOAT,
      },
      costPrice: {
        type: DataTypes.FLOAT,
      },
      expirationDate: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      minimumQuantity: {
        type: DataTypes.INTEGER,
      },
      activated: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
      },
      userId: {
        type: DataTypes.UUID,
        references: {
          model: 'User',
          key: 'id',
        },
      },
      categoryId: {
        type: DataTypes.UUID,
        references: {
          model: 'Category',
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

export default ProductModel;
