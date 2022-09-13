module.exports = (sequelize, DataTypes) => {
  const Supplier = sequelize.define(
    'Supplier',
    {
      name: {
        type: DataTypes.STRING(45),
        allowNull: false
      },
      address: {
        type: DataTypes.STRING(45),
        allowNull: false
      },
      phoneNumber: {
        type: DataTypes.STRING(45),
        allowNull: false
      }
    },
    {
      timestamps: false,
      underscored: true
    }
  );

  Supplier.associate = db => {
    Supplier.hasMany(db.Product, {
      foreignKey: {
        allowNull: false,
        name: 'supplierId'
      }
    });
  };

  return Supplier;
};
