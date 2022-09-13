module.exports = (sequelize, DataTypes) => {
  const Customer = sequelize.define(
    'Customer',
    {
      name: {
        type: DataTypes.STRING(45),
        allowNull: false
      },
      address: DataTypes.STRING(45)
    },
    {
      timestamps: false
    }
  );

  Customer.associate = db => {
    Customer.hasMany(db.Order, {
      foreignKey: {
        allowNull: false,
        name: 'customerId'
      }
    });

    Customer.belongsToMany(db.Employee, {
      through: db.Order,
      foreignKey: {
        allowNull: false,
        name: 'customerId'
      },
      otherKey: {
        allowNull: false,
        name: 'employeeId'
      }
    });
  };

  return Customer;
};
