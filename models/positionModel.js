const { DataTypes } = require("sequelize");
const db = require("../config/database.js");

const Positions = db.define(
  "position", 
  {
    id: {
      primaryKey: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
    },
    position_name: {
      allowNull: false,
      type: DataTypes.STRING,
    },
  }
);

module.exports = Positions;
