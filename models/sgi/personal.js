const Sequelize = require("sequelize");
const db = require("../../db/database");

module.exports = db.sgiSequelize.define(
  "personal",
  {
    idpersonal: {
      type: Sequelize.DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nombre: {
      type: Sequelize.DataTypes.STRING,
    },
    apellido: {
      type: Sequelize.DataTypes.STRING,
    },
    dni: {
      type: Sequelize.DataTypes.INTEGER,
    },
    rol: {
      type: Sequelize.DataTypes.STRING,
    },
    alta: {
      type: Sequelize.DataTypes.DATE,
    },
    baja: {
      type: Sequelize.DataTypes.DATE,
    },
    legajo: {
      type: Sequelize.DataTypes.STRING,
    },
  },
  {
    timestamps: false,
    freezeTableName: true,
  },
  {
    tableName: "personal",
  }
);
