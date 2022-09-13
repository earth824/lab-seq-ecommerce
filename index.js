const {
  Customer,
  Department,
  Supplier,
  Employee,
  Order,
  Product,
  OrderItem
} = require('./models');

const run = async () => {
  // const data = await Customer.findAll();
  // const data = await Department.findAll({ include: Employee });
  // const data = await Supplier.findAll();
  // const data = await Employee.findAll({
  //   include: Department
  // });
  // const data = await Order.findAll({
  //   include: [
  //     {
  //       model: Employee,
  //       include: Department
  //     },
  //     Customer
  //   ]
  // });
  const data = await Employee.findAll({ include: [Customer, Order] });
  // const data = await OrderItem.findAll({ where: { id: 1 } });
  console.log(JSON.stringify(data, null, 2));
};

run();
