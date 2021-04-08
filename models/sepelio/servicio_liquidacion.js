const Sequelize = require("sequelize");
const db = require("../../db/database");

module.exports = db.sepelioSequelize.define(
  "servicios_liquidacion",
  {
    idliquidacion: {
      type: Sequelize.DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },

    idservicio: {
      type: Sequelize.DataTypes.INTEGER,
    },

    total_gastos: {
      type: Sequelize.DataTypes.INTEGER,
    },

    total_sueldo: {
      type: Sequelize.DataTypes.INTEGER,
    },

    total_liquidacion: {
      type: Sequelize.DataTypes.INTEGER,
    },
    fecha_liquidacion: {
      type: Sequelize.DataTypes.DATE,
    },
    operador: {
      type: Sequelize.DataTypes.DATE,
    },
  },
  {
    timestamps: false,
    freezeTableName: true,
  },
  {
    tableName: "servicios_liquidacion",
  }
);
