const Sequelize = require("sequelize");
const db = require("../../db/database");

module.exports = db.sepelioSequelize.define(
  "historial_stock_ataud",
  {
    idhistorial: {
      type: Sequelize.DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    idataud: {
      type: Sequelize.DataTypes.INTEGER,
    },
    fecha_carga: {
      type: Sequelize.DataTypes.DATE,
    },
    stock_anterior: {
      type: Sequelize.DataTypes.INTEGER,
    },
    stock_nuevo: {
      type: Sequelize.DataTypes.INTEGER,
    },
    remito: {
      type: Sequelize.DataTypes.INTEGER,
    },
    fecha_recepcion: {
      type: Sequelize.DataTypes.DATE,
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
    tableName: "historial_stock_ataud",
  }
);
