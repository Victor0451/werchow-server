const Sequelize = require('sequelize');
const db = {};

const sequelize = new Sequelize({
    host: '192.168.1.102',
    database: 'werchow-sgi',
    username: 'root',
    password: 'root',
    dialect: 'mysql',


    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;


module.exports = db;