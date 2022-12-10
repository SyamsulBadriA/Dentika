"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class admin extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  admin.init(
    {
      name: DataTypes.STRING,
      email: {
        type: DataTypes.STRING,
        unique: {
          args: true,
          msg: "Email has been Register",
        },
        validate: {
          isEmail: {
            args: true,
            msg: "Valid Email is Required",
          },
          notEmpty: {
            args: true,
            msg: "Email Is Required",
          },
        },
      },
      password: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: {
            args: true,
            msg: "Password Is Required",
          },
          len: {
            args: [6, 10],
            msg: "Password Must be 6 - 10 Characters",
          },
        },
      },
      refresh_token: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "admin",
    }
  );
  return admin;
};
