const Sequelize = require("sequelize");
const db = require("../../db/database");

module.exports = db.sepelioSequelize.define(
  "servicio_gastos",
  {
    idgastos: {
      type: Sequelize.DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },

    idservicio: {
      type: Sequelize.DataTypes.INTEGER,
    },

    fecha_gasto: {
      type: Sequelize.DataTypes.DATE,
    },

    hs_inicio: {
      type: Sequelize.DataTypes.TIME,
    },

    hs_fin: {
      type: Sequelize.DataTypes.TIME,
    },
    tipo_gasto: {
      type: Sequelize.DataTypes.STRING,
    },
    importe: {
      type: Sequelize.DataTypes.FLOAT,
    },
    operador: {
      type: Sequelize.DataTypes.STRING,
    },
    observaciones: {
      type: Sequelize.DataTypes.STRING,
    },
  },
  {
    timestamps: false,
    freezeTableName: true,
  },
  {
    tableName: "servicio_gastos",
  }
);
