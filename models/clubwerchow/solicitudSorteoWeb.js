const Sequelize = require("sequelize");
const db = require("../../db/database");

module.exports = db.clubWerchowSequelize.define(
  "solicitud_sorteo_web",
  {
    idnosocio: {
      type: Sequelize.DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },

    solicitante: {
      type: Sequelize.DataTypes.STRING,
    },

    dni: {
      type: Sequelize.DataTypes.BIGINT,
    },

    telefono: {
      type: Sequelize.DataTypes.BIGINT,
    },

    mail: {
      type: Sequelize.DataTypes.STRING,
    },

    fecha: {
      type: Sequelize.DataTypes.DATE,
    },

    detalle: {
      type: Sequelize.DataTypes.STRING,
    },

    estado: {
      type: Sequelize.DataTypes.TINYINT,
    },
  },

  {
    timestamps: false,
    freezeTableName: true,
  },
  {
    tableName: "solicitud_sorteo_web",
  }
);
