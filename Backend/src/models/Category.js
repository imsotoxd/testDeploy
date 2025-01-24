import { DataTypes } from 'sequelize';

const CategoryModel = (sequelize) => {
  return sequelize.define(
    'Category',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
      },
      description: {
        type: DataTypes.STRING,
      },
      custom: {
        type: DataTypes.BOOLEAN,
      },
    },
    {
      timestamps: true,
      freezeTableName: true,
    }
  );
};

export default CategoryModel;
