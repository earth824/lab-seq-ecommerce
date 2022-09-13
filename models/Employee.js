module.exports = (sequelize, DataTypes) => {
  const Employee = sequelize.define(
    'Employee',
    {
      name: {
        type: DataTypes.STRING(45),
        allowNull: false
      },
      address: DataTypes.STRING(45),
      salary: DataTypes.DECIMAL(10, 2)
    },
    {
      timestamps: false,
      underscored: true
    }
  );

  Employee.associate = db => {
    Employee.belongsTo(db.Department, {
      foreignKey: {
        allowNull: false,
        name: 'departmentId'
      }
    });

    Employee.hasMany(db.Order, {
      foreignKey: 'employeeId'
    });

    Employee.belongsToMany(db.Customer, {
      through: 'orders',
      timestamps: false,
      foreignKey: {
        name: 'employeeId',
        field: 'employee_id'
      },
      otherKey: {
        allowNull: false,
        name: 'customerId',
        field: 'customer_id'
      }
    });
  };

  return Employee;
};
