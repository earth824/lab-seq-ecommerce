module.exports = (sequelize, DataTypes) => {
  const Order = sequelize.define(
    'Order',
    {
      date: {
        type: DataTypes.DATEONLY,
        allowNull: false
      }
    },
    {
      timestamps: false,
      underscored: true
    }
  );

  Order.associate = db => {
    Order.belongsTo(db.Employee, {
      foreignKey: 'employeeId'
    });

    Order.belongsTo(db.Customer, {
      foreignKey: {
        allowNull: false,
        name: 'customerId'
      }
    });

    Order.hasMany(db.OrderItem, {
      foreignKey: {
        allowNull: false,
        name: 'orderId'
      }
    });

    Order.belongsToMany(db.Product, {
      through: 'order_items',
      timestamps: false,
      foreignKey: {
        allowNull: false,
        name: 'orderId',
        field: 'order_id'
      },
      otherKey: {
        allowNull: false,
        name: 'productId',
        field: 'product_id'
      }
    });
  };

  return Order;
};
