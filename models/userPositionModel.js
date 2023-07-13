const { DataTypes } = require("sequelize");
const db = require("../config/database.js");
const Users = require("./userModel.js");
const Positions = require("./positionModel.js");


const UserPositions = db.define(
  "user_positions", 
  {
    id: {
      primaryKey: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
    },
    user_id: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: {
        model: Users,
        key: "id",
      },
    },
    position_id: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: {
        model: Positions,
        key: "id",
      },
    },
  }
);

module.exports = UserPositions;