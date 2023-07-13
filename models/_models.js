const Todos = require("./todoModel.js");
const Users = require("./userModel.js");
const Phones = require("./phoneModel.js");
const Positions = require("./positionModel.js");
const UserPositions = require("./userPositionModel.js");

Users.hasMany(Todos, { foreignKey: "user_id" });
Todos.belongsTo(Users, { foreignKey: "id" }); 

Users.hasMany(Phones, { foreignKey: "user_id" });
Phones.belongsTo(Users, { foreignKey: "id" }); 

Users.belongsToMany(Positions, { through: "UserPositions" });
Positions.belongsToMany(Users, { through: "UserPositions" });






// fs.readFile("./data/data.json", 'utf8', (err, stringData) => {
//   if(err) throw new Error(err);
//   const data = JSON.parse(stringData);

//   Users.sync({force: true}).then(async () => {
//     console.log("Done");
//     await Users.create(data[1])
//   })

//   Todos.sync({force: true}).then(async () => {
//     console.log("Done");
//     await Todos.create(data[0])
//   })
  
//   Phones.sync({force: true}).then(async () => {
//     console.log("Done");
//     await Phones.create(data[2])
//   })
  
//   Positions.sync({force: true}).then(async () => {
//     console.log("Done");
//     await Positions.create(data[3]);
//   })
  
//   UserPositions.sync({force: true}).then(async () => {
//     console.log("Done");
//     await UserPositions.create(data[4])
//   })
// })




// Users.sync({force: true}).then(async () => {
//   console.log("Done");
//   await Users.create(data[1])
// }).catch((error) => {
//   console.log('Error creating table:', error);
// });

// Todos.sync({force: true}).then(async () => {
//   console.log("Done");
//   await Todos.create(data[0])
// }).catch((error) => {
//   console.log('Error creating table:', error);
// });

// Phones.sync({force: true}).then(async () => {
//   console.log("Done");
//   await Phones.create(data[2])
// }).catch((error) => {
//   console.log('Error creating table:', error);
// });

// Positions.sync({force: true}).then(async () => {
//   console.log("Done");
//   await Positions.create(data[3]);
// }).catch((error) => {
//   console.log('Error creating table:', error);
// });

// UserPositions.sync({force: true}).then(async () => {
//   console.log("Done");
//   await UserPositions.create(data[4])
// }).catch((error) => {
//   console.log('Error creating table:', error);
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


// UserPositions.sync({ force: true }).then(async () => {
//   console.log('UserPosition was created')
//   await UserPositions.create({
//     "user_id": 1,
//     "position_id": 1
//   })
// })


// Users.sync({force: true}).then(async () => {
//   console.log('Users be edited')
//   await Users.create(  
//     {
//       name: "John",
//       age: 12,
//       login: "ibadt",
//       password: "12345678"
//     }
//   )
// })

// Positions.sync({ force: true }).then(async () => {
//   console.log('Position is created');
//   await Positions.create({
//     "id": 1,
//     "position_name": "Backend"
//   })
// });



// Todos.sync({ force: true }).then(async () => {
//   console.log('Todos is created');
//   await Positions.create({
//     "title": "Backend",
//     "content": "Content",
//     "user_id": 1,
//   })
// });

// Phones.sync({ force: true }).then(async () => {
//   console.log('Phones is created');
//   await Positions.create({
//     "position_name": "Backend"
//   })
// });

// UserPositions.sync({ force: true }).then(async () => {
//   console.log('UserPositions is created');
//   await Positions.create({
//     "position_name": "Backend"
//   })
// });










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