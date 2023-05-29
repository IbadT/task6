const Todos = require("./todoModel.js");
const Users = require("./userModel.js");
const Phones = require("./phoneModel.js");

Users.hasMany(Todos, { foreignKey: "user_id" });
Todos.belongsTo(Users, { foreignKey: 'id' });

Users.hasMany(Phones, { foreignKey: 'user_id' });
Phones.belongsTo(Users, { foreignKey: 'id' });

const models = {
  Users,
  Todos,
  Phones
};

module.exports = models;