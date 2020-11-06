const Sequelize = require("sequelize");
const db = require("../../db/database");

module.exports = db.sepelioSequelize.define(
  "servicio_liquidacion",
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
      type: Sequelize.DataTypes.STRING,
    },
  },
  {
    timestamps: false,
    freezeTableName: true,
  },
  {
    tableName: "servicio_liquidacion",
  }
);
