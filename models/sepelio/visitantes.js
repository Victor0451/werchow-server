const Sequelize = require("sequelize");
const db = require("../../db/database");

module.exports = db.sepelioSequelize.define(
  "visitantes",
  {
    idvisitante: {
      type: Sequelize.DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    idservicio: {
      type: Sequelize.DataTypes.INTEGER,
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
    telefono: {
      type: Sequelize.DataTypes.INTEGER,
    },
    temperatura: {
      type: Sequelize.DataTypes.STRING,
    },
    fecha: {
      type: Sequelize.DataTypes.DATE,
    },
    operador: {
      type: Sequelize.DataTypes.STRING,
    },
    parentezco: {
      type: Sequelize.DataTypes.STRING,
    },
  },
  {
    timestamps: false,
    freezeTableName: true,
  },
  {
    tableName: "visitantes",
  }
);
