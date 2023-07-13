const { DataTypes } = require("sequelize");
const db = require("../config/database.js");

const Positions = db.define(
  "positions", 
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    position_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  }
);

module.exports = Positions;
