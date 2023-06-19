const { DataTypes } = require("sequelize");
const db = require("../config/database.js");
const User = require("./userModel.js");
const Position = require("./positionModel.js");


const UserPositions = db.define(
  "user_position", 
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
        model: User,
        key: "id",
      },
    },
    position_id: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: {
        model: Position,
        key: "id",
      },
    },
  }
);

module.exports = UserPositions;