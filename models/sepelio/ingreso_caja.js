const Sequelize = require("sequelize");
const db = require("../../db/database");

module.exports = db.sepelioSequelize.define(
  "ingreso_caja",
  {
    idingreso: {
      type: Sequelize.DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },

    idcaja: {
      type: Sequelize.DataTypes.INTEGER
    },

    concepto: {
      type: Sequelize.DataTypes.STRING
    },

    monto: {
      type: Sequelize.DataTypes.INTEGER
    },

    fecha: {
      type: Sequelize.DataTypes.DATE
    },
    operador: {
      type: Sequelize.DataTypes.STRING
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
    detalle: {
      type: Sequelize.DataTypes.STRING
    },
    ptoventa: {
      type: Sequelize.DataTypes.INTEGER
    }
  },
  {
    timestamps: false,
    freezeTableName: true
  },
  {
    tableName: "ingreso_caja"
  }
);
