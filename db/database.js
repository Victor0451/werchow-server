const Sequelize = require("sequelize");
const db = {};

const wSequelize = new Sequelize({
  host: "192.168.1.102",
  database: "werchow",
  username: "vlongo",
  password: "nokia5800",
  dialect: "mysql",

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
});

const werchowSequelize = new Sequelize({
  host: "192.168.1.102",
  database: "werchow-prueba",
  username: "vlongo",
  password: "nokia5800",
  dialect: "mysql",

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
});

const mutualSequelize = new Sequelize({
  host: "192.168.1.102",
  database: "mutual-prueba",
  username: "vlongo",
  password: "nokia5800",
  dialect: "mysql",

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
});

const sgiSequelize = new Sequelize({
  host: "192.168.1.102",
  database: "werchow-sgi",
  username: "vlongo",
  password: "nokia5800",
  dialect: "mysql",

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
});


const sepelioSequelize = new Sequelize({
  host: "192.168.1.102",
  database: "werchow-sepelio",
  username: "vlongo",
  password: "nokia5800",
  dialect: "mysql",

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
});

db.werchowSequelize = werchowSequelize;
db.mutualSequelize = mutualSequelize;
db.sgiSequelize = sgiSequelize;
db.sepelioSequelize = sepelioSequelize;
db.wSequelize = wSequelize;


db.Sequelize = Sequelize;

module.exports = db;
