const Sequelize = require("sequelize");
const db = require("../../db/database");

module.exports = db.sepelioSequelize.define(
  "caja_sepelio",
  {
    idcaja: {
      type: Sequelize.DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    operador: {
      type: Sequelize.DataTypes.STRING
    },
    detalle: {
      type: Sequelize.DataTypes.STRING
    },
    monto: {
      type: Sequelize.DataTypes.INTEGER
    },
    gastos: {
      type: Sequelize.DataTypes.INTEGER
    },
    totalcaja: {
      type: Sequelize.DataTypes.INTEGER
    },
    estado: {
      type: Sequelize.DataTypes.TINYINT
    },
    fecha: {
      type: Sequelize.DataTypes.DATE
    },
    empresa: {
      type: Sequelize.DataTypes.STRING
    },
    tipofactura: {
      type: Sequelize.DataTypes.STRING
    },
    nfactura: {
      type: Sequelize.DataTypes.INTEGER
    },
    ptoventa: {
      type: Sequelize.DataTypes.INTEGER
    },
    concepto: {
      type: Sequelize.DataTypes.STRING
    }
  },
  {
    timestamps: false,
    freezeTableName: true
  },
  {
    tableName: "caja_sepelio"
  }
);
