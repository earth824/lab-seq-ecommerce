module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define(
    'Product',
    {
      name: {
        type: DataTypes.STRING(45),
        allowNull: false
      },
      desc: DataTypes.STRING,
      price: {
        type: DataTypes.DECIMAL(10, 2).UNSIGNED,
        allowNull: false
      },
      quantity: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false
      }
    },
    {
      timestamps: false,
      underscored: true
    }
  );

  Product.associate = db => {
    Product.belongsTo(db.Supplier, {
      foreignKey: {
        allowNull: false,
        name: 'supplierId'
      }
    });

    Product.hasMany(db.OrderItem, {
      foreignKey: {
        allowNull: false,
        name: 'productId'
      }
    });

    Product.belongsToMany(db.Order, {
      through: 'order_items',
      timestamps: false,
      foreignKey: {
        allowNull: false,
        name: 'productId',
        field: 'product_id'
      },
      otherKey: {
        allowNull: false,
        name: 'orderId',
        field: 'order_id'
      }
    });
  };

  return Product;
};
