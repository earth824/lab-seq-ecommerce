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
      through: 'orders',
      timestamps: false,
      foreignKey: {
        allowNull: false,
        name: 'customerId',
        field: 'customer_id'
      },
      otherKey: {
        name: 'employeeId',
        field: 'employee_id'
      }
    });
  };

  return Customer;
};
