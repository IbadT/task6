const {   
        Users,
        Todos,
        Phones,
        Positions,
        UserPositions 
    } = require('./models/_models.js');
const fs = require('fs');

(async () => {
    fs.readFile("./data/data.json", 'utf8', (err, stringData) => {
        if(err) throw new Error(err);
        const data = JSON.parse(stringData);
      
        Users.sync({force: true}).then(async () => {
          console.log("Done");
          await Users.create(data[1])
        })
      
        Todos.sync({force: true}).then(async () => {
          console.log("Done");
          await Todos.create(data[0])
        })
        
        Phones.sync({force: true}).then(async () => {
          console.log("Done");
          await Phones.create(data[2])
        })
        
        Positions.sync({force: true}).then(async () => {
          console.log("Done");
          await Positions.create(data[3]);
        })
        
        UserPositions.sync({force: true}).then(async () => {
          console.log("Done");
          await UserPositions.create(data[4])
        })
      })
})();



















// const { Sequelize } = require("sequelize");
// const sequelize = new Sequelize("testdb", "postgres", "admin", {
//   host: "localhost",
//   dialect: "postgres",
// });

// const fs = require("fs");
// const jsonData = JSON.parse(fs.readFileSync("./data/data.json", "utf8"));

// const Test = sequelize.define("test", {
//     id: {
//         primaryKey: true,
//         allowNull: false,
//         type: Sequelize.INTEGER,
//         autoIncrement: true
//     },
//     test: {
//         type: Sequelize.STRING,
//         allowNull: false,
//     },
//     item: {
//         type: Sequelize.INTEGER,
//         allowNull: false
//     }
// });

// (async () => {
//     Test.create(jsonData[5]);
// })()