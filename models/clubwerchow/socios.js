const Sequelize = require("sequelize");
const db = require("../../db/database");

module.exports = db.clubWerchowSequelize.define(
  "socios",
  {
    idsocio: {
      type: Sequelize.DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    apellido: {
      type: Sequelize.DataTypes.STRING,
    },
    nombre: {
      type: Sequelize.DataTypes.STRING,
    },
    dni: {
      type: Sequelize.DataTypes.INTEGER,
    },
    mail: {
      type: Sequelize.DataTypes.STRING,
    },
    telefono: {
      type: Sequelize.DataTypes.INTEGER,
    },
    socio: {
      type: Sequelize.DataTypes.TINYINT,
    },
    nosocio: {
      type: Sequelize.DataTypes.TINYINT,
    },
    referido: {
      type: Sequelize.DataTypes.TINYINT,
    },
    fecha_solicitud: {
      type: Sequelize.DataTypes.DATE,
    },
  },
  {
    timestamps: false,
    freezeTableName: true,
  },
  {
    tableName: "socios",
  }
);
