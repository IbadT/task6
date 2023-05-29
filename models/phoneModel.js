const { DataTypes } = require("sequelize");
const db = require("../config/database.js");
const Users = require("./userModel.js");

const Phones = db.define(
  "phones",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    number: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    model: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      referesces: {
        model: Users,
        key: "id",
      },
    },
    // created_at: {
    //   type: DataTypes.DATE,
    //   allowNull: false,
    //   defaultValue: sequelize.literal("CURRENT_TIMESTAMP"),
    // },
    // updated_at: {
    //   type: DataTypes.DATE,
    //   allowNull: false,
    //   defaultValue: sequelize.literal("CURRENT_TIMESTAMP"),
    // },
  },
  {
    timestamps: false,
  }
);

module.exports = Phones;

// ALTER TABLE phones ALTER COLUMN number TYPE varchar(255);