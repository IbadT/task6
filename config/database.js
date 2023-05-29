// const Pool = require('pg').Pool;
// const pool = new Pool({
//     user: 'postgres', 
//     password: 'admin', 
//     host: 'localhost',
//     port: 5432,
//     database: 'testdb'
// })

// module.exports = pool;



///////////////////////////////////////////////////////////////////////


// const { Sequelize } = require('sequelize');

// module.exports = new Sequelize(
//     'testdb',
//     'postgres',
//     'admin',
//     {
//         host: 'localhost',
//         dialect: 'postgres',
//     }
// )


// const sequelize = new Sequelize('postgres://postgres:admin@localhost:5432/testdb');
// module.exports = sequelize;








// const Pool = require('pg').Pool;

// const pool = new Pool({
//     user: 'postgres',
//     password: 'admin',
//     port: 5432,
//     host: 'localhost',
//     database: 'testdb'
// });

// module.exports = pool;


const Sequelize = require('sequelize');

module.exports = new Sequelize(
    'testdb',
    'postgres',
    'admin',
    {
        host: 'localhost',
        dialect: 'postgres'
    }
)