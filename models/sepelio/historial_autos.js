const Sequelize = require("sequelize");
const db = require("../../db/database");

module.exports = db.sepelioSequelize.define(
  "historial_autos",
  {
    idhistorial: {
      type: Sequelize.DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    patente: {
      type: Sequelize.DataTypes.STRING,
    },
    idauto: {
      type: Sequelize.DataTypes.INTEGER,
    },
    fecha: {
      type: Sequelize.DataTypes.DATE,
    },
    accion: {
      type: Sequelize.DataTypes.STRING,
    },
    operador: {
      type: Sequelize.DataTypes.STRING,
    },
  },
  {
    timestamps: false,
    freezeTableName: true,
  },
  {
    tableName: "historial_autos",
  }
);
