const Sequelize = require("sequelize");
const db = require("../../db/database");

module.exports = db.sepelioSequelize.define(
  "gastos_caja",
  {
    idgastos: {
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

    tipofactura: {
      type: Sequelize.DataTypes.STRING
    },
    nfactura: {
      type: Sequelize.DataTypes.INTEGER
    },

    fecha: {
      type: Sequelize.DataTypes.DATE
    },
    operadorgestion: {
      type: Sequelize.DataTypes.STRING
    },
    operadortramite: {
      type: Sequelize.DataTypes.STRING
    },
    ptoventa: {
      type: Sequelize.DataTypes.INTEGER
    },
    porciva: {
      type: Sequelize.DataTypes.INTEGER
    },
    montoiva: {
      type: Sequelize.DataTypes.INTEGER
    },
    retiibb: {
      type: Sequelize.DataTypes.INTEGER
    },
    retggcias: {
      type: Sequelize.DataTypes.INTEGER
    },
    perciva: {
      type: Sequelize.DataTypes.INTEGER
    },
    mediopago: {
      type: Sequelize.DataTypes.STRING
    },
    proveedor: {
      type: Sequelize.DataTypes.STRING
    },
    empresa: {
      type: Sequelize.DataTypes.STRING
    },
    detalle: {
      type: Sequelize.DataTypes.STRING
    },
    total: {
      type: Sequelize.DataTypes.INTEGER
    }
  },
  {
    timestamps: false,
    freezeTableName: true
  },
  {
    tableName: "gastos_caja"
  }
);
