module.exports = (sequelize, DataTypes) => {
  const Department = sequelize.define(
    'Department',
    {
      name: {
        type: DataTypes.STRING(45),
        allowNull: false,
        unique: true
      },
      budget: {
        type: DataTypes.DECIMAL(10, 2),
        defaultValue: '0.00'
      }
    },
    {
      timestamps: false
    }
  );

  Department.associate = db => {
    Department.hasMany(db.Employee, {
      foreignKey: {
        allowNull: false,
        name: 'departmentId'
      }
    });
  };

  return Department;
};
