const Sequelize = require("sequelize");
const db = require("../../db/database");

module.exports = db.sepelioSequelize.define(
  "servicio_detalles",
  {
    iddetalles: {
      type: Sequelize.DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },

    idservicio: {
      type: Sequelize.DataTypes.INTEGER,
    },

    detalle: {
      type: Sequelize.DataTypes.STRING,
    },

    lugar: {
      type: Sequelize.DataTypes.STRING,
    },
    monto: {
      type: Sequelize.DataTypes.FLOAT,
    },

    patente: {
      type: Sequelize.DataTypes.INTEGER,
    },

    operador: {
      type: Sequelize.DataTypes.STRING,
    },

    observacion: {
      type: Sequelize.DataTypes.STRING,
    },

    fecha: {
      type: Sequelize.DataTypes.DATE,
    },
  },
  {
    timestamps: false,
    freezeTableName: true,
  },
  {
    tableName: "servicio_detalles",
  }
);
