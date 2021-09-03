const Sequelize = require("sequelize");
const db = require("../../db/database");

module.exports = db.sgiSequelize.define(
  "historial_liquidaciones",
  {
    idliquidacion: {
      type: Sequelize.DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    fecha: {
      type: Sequelize.DataTypes.DATE,
    },
    operador: {
      type: Sequelize.DataTypes.STRING,
    },
    mes: {
      type: Sequelize.DataTypes.INTEGER,
    },
    ano: {
      type: Sequelize.DataTypes.INTEGER,
    },
    cobranza: {
      type: Sequelize.DataTypes.INTEGER,
    },
    total: {
      type: Sequelize.DataTypes.INTEGER,
    },
    comision: {
      type: Sequelize.DataTypes.INTEGER,
    },
    entidad: {
      type: Sequelize.DataTypes.STRING,
    },
  },
  {
    timestamps: false,
    freezeTableName: true,
  },
  {
    tableName: "historial_liquidaciones",
  }
);
