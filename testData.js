const {   
        Users,
        Todos,
        Phones,
        Positions,
        UserPositions 
    } = require('./models/_models.js');
const fs = require('fs');
const data = JSON.parse(fs.readFileSync("./data/data.json", "utf8"));

(async () => {
    Todos.create(data[0]);
    Users.create(data[1]);
    Phones.create(data[2]);
    Positions.create(data[3]);
    UserPositions.create(data[4]);
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