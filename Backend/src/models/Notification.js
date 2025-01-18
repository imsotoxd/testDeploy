import { DataTypes } from 'sequelize';

const NotificationModel = (sequelize) => {
  return sequelize.define(
    'Notification',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      sku: {
        type: DataTypes.UUID,
      },
      notificationId: {
        type: DataTypes.UUID,
        references: {
          model: 'Product',
          key: 'id',
        },
      },
      readStatus: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
    },
    {
      timestamps: true,
      freezeTableName: true,
    }
  );
};

export default NotificationModel;
