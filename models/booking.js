"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class booking extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  booking.init(
    {
      uid: DataTypes.INTEGER,
      symptoms: DataTypes.STRING,
      option_doctor: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: {
            args: true,
            msg: "Docter Is Required",
          },
          isIn: {
            args: [["Dentist", "General Practitioners"]],
            msg: "Must be Dentist or General Practitioners",
          },
        },
      },
      appointment_date: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: "booking",
    }
  );
  return booking;
};
