"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class patient extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  patient.init(
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
      refresh_token: DataTypes.STRING,
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
      age: DataTypes.INTEGER,
      birth_date: DataTypes.DATE,
      marital_status: DataTypes.STRING,
      weight: DataTypes.INTEGER,
      height: DataTypes.INTEGER,
      phone_number: DataTypes.STRING,
      gender: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: {
            args: true,
            msg: "Gender Is Required",
          },
          isIn: {
            args: [["male", "female"]],
            msg: "Must be male or female",
          },
        },
      },
      blood: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: {
            args: true,
            msg: "Blood Is Required",
          },
          isIn: {
            args: [["O", "A", "B", "AB"]],
            msg: "Must be O, A, B or AB",
          },
        },
      },
      address: DataTypes.STRING,
      province: DataTypes.STRING,
      city: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "patient",
    }
  );
  return patient;
};
