"use strict";

const model = (sequelize, DataTypes) => {
  const Customer = sequelize.define(
    "Customer",
    {
      customer_id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV1,
        primaryKey: true,
      },
      email: { type: DataTypes.STRING, unique: true, allowNull: false },
      password: { type: DataTypes.STRING, allowNull: false },
      first_name: DataTypes.STRING,
      last_name: DataTypes.STRING,
      billing_address_id: DataTypes.INTEGER,
      shipping_address_id: DataTypes.INTEGER,
    },
    {
      indexes: [
        { unique: true, fields: ["email"] },
        { unique: true, fields: ["customer_id"] },
      ],
    }
  );

  return Customer;
};

module.exports = model;
// old way.
// const { Model } = require("sequelize");
// module.exports = (sequelize, DataTypes) => {
//   class Customer extends Model {
//     /**
//      * Helper method for defining associations.
//      * This method is not a part of Sequelize lifecycle.
//      * The `models/index` file will call this method automatically.
//      */
//     static associate(models) {
//       // define association here
//     }
//   }
//   Customer.init(
//     {
//       customer_id: {
//         type: DataTypes.UUID,
//         defaultValue: DataTypes.UUIDV1,
//         primaryKey: true,
//       },
//       email: { type: DataTypes.STRING, unique: true, allowNull: false },
//       password: { type: DataTypes.STRING, allowNull: false },
//       first_name: DataTypes.STRING,
//       last_name: DataTypes.STRING,
//       billing_address_id: DataTypes.INTEGER,
//       shipping_address_id: DataTypes.INTEGER,
//     },
//     {
//       sequelize,
//       modelName: "Customer",
//       indexes: [],
//     }
//   );
//   return Customer;
// };
