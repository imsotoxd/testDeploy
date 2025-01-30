import { DataTypes } from 'sequelize';

const UserModel = (sequelize) => {
  return sequelize.define(
    'User',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      firstname: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      lastname: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      birthdate: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      activated: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
      },
      session: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
       nameCompany: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      businessArea: {
        type: DataTypes.ENUM('Alimentos y bebidas', 'Bienes e insumos', 'Tecnología', 'Salud'),
        allowNull: false,
      },
    },
    {
      timestamps: true,
      freezeTableName: true,
      indexes: [{ unique: true, fields: ['email'] }],
    }
  );
};

export default UserModel;
