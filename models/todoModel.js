const { DataTypes } = require("sequelize");
const db = require("../config/database.js");
const Users = require("./userModel.js");

const Todos = db.define(
  "todos",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },

    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    content: {
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
  },
  {
    timestamps: false, // поля createdAt и updatedAt не будут создаваться и не будут записываться
  }
);

module.exports = Todos;
