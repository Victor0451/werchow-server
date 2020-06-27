const Sequelize = require("sequelize");
const db = require("../../db/database");

module.exports = db.sgiSequelize.define(
  "rehabilitaciones",
  {
    idrehab: {
      type: Sequelize.DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    contrato: {
      type: Sequelize.DataTypes.INTEGER,
    },
    dni: {
      type: Sequelize.DataTypes.INTEGER,
    },
    apellido: {
      type: Sequelize.DataTypes.STRING,
    },
    nombre: {
      type: Sequelize.DataTypes.STRING,
    },
    operador: {
      type: Sequelize.DataTypes.STRING,
    },
    vigencia: {
      type: Sequelize.DataTypes.DATE,
    },
    fecha: {
      type: Sequelize.DataTypes.DATE,
    },
    cuotas: {
      type: Sequelize.DataTypes.INTEGER,
    },
    empresa: {
      type: Sequelize.DataTypes.STRING,
    },
    idoperador: {
      type: Sequelize.DataTypes.INTEGER,
    },
  },
  {
    timestamps: false,
    freezeTableName: true,
  },
  {
    tableName: "rehabilitaciones",
  }
);
