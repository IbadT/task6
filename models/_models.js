const Todos = require("./todoModel.js");
const Users = require("./userModel.js");
const Phones = require("./phoneModel.js");
const Positions = require("./positionModel.js");
const UserPositions = require("./userPositionModel.js");

Users.hasMany(Todos, { foreignKey: "user_id" });// user_id
Todos.belongsTo(Users, { foreignKey: "id" }); // id

Users.hasMany(Phones, { foreignKey: "user_id" });// user_id
Phones.belongsTo(Users, { foreignKey: "id" }); // id

Users.belongsToMany(Positions, { through: "UserPositions" });
Positions.belongsToMany(Users, { through: "UserPositions" });







// Position.sync({ force: true }).then(async () => {
//   console.log('Position is created');
//   await Position.create({
//     "position_name": "Backend"
//   })
// });

// Position.sync().then(async () => {
//   console.log('!!!! POSITION !!!!');
//   await Position.create({
//     'position_name': 'Backend'
//   })
// })

// UserPosition.sync().then(async () => {
//   console.log('UserPosition is created');
//   await UserPosition.findAll().then(data => console.log(data[0].dataValues));
// })


// UserPosition.sync({ force: true }).then(async () => {
//   console.log('UserPosition was created')
//   // await UserPosition.create({
//   //   "userId": 1,
//   //   "positionId": 1
//   // })
// })




///////////////////////////////////////////////////



// const fs = require('fs');
// fs.readFile('./data/data.json', 'utf8', (err, data) => {
//   if(err) throw new Error(err);
//   Todos.sync({ force: true }).then(async () => {
//     console.log("Table Todos was created...");
//     await Todos.create(data[0]);
//   })
  
//   Users.sync({ force: true }).then(async () => {
//     console.log("Table Users was created...");
//     await Users.create(data[1]);
//   })
  
//   Phones.sync({ force: true }).then(async () => {
//     console.log("Table Phones was created...");
//     await Phones.create(data[2]);
//   })
  
//   Positions.sync({ force: true }).then(async () => {
//     console.log("Table Positions was created...");
//     await Positions.create(data[3]);
//   })
  
//   UserPositions.sync({ force: true }).then(async () => {
//     console.log("Table UserPositions was created...");
//     await UserPositions.create(data[4]);
//   })
// })




/////////////////////////////////////////////////




// const fs = require('fs');
// const data = JSON.parse(fs.readFileSync('./data/data.json', 'utf8'));

// Todos.sync({ force: true }).then(async () => {
//   console.log("Table Todos was created...");
//   await Todos.create(data[0]);
// })

// Users.sync({ force: true }).then(async () => {
//   console.log("Table Users was created...");
//   await Users.create(data[1]);
// })

// Phones.sync({ force: true }).then(async () => {
//   console.log("Table Phones was created...");
//   await Phones.create(data[2]);
// })

// Positions.sync({ force: true }).then(async () => {
//   console.log("Table Positions was created...");
//   await Positions.create(data[3]);
// })

// UserPositions.sync({ force: true }).then(async () => {
//   console.log("Table UserPositions was created...");
//   await UserPositions.create(data[4]);
// })





const models = {
  Users,
  Todos,
  Phones,
  Positions,
  UserPositions
};

module.exports = models;