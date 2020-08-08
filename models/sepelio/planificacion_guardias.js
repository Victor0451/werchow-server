const Sequelize = require("sequelize");
const db = require("../../db/database");

module.exports = db.sepelioSequelize.define(
  "planificacion_guardias",
  {
    idturno: {
      type: Sequelize.DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    lugar: {
      type: Sequelize.DataTypes.STRING,
    },

    fecha: {
      type: Sequelize.DataTypes.DATE,
    },
    hs_inicio: {
      type: Sequelize.DataTypes.TIME,
    },
    hs_fin: {
      type: Sequelize.DataTypes.TIME,
    },
    horas: {
      type: Sequelize.DataTypes.INTEGER,
    },
    operador: {
      type: Sequelize.DataTypes.STRING,
    },
    mes_planificacion: {
      type: Sequelize.DataTypes.STRING,
    },
  },
  {
    timestamps: false,
    freezeTableName: true,
  },
  {
    tableName: "planificacion_guardias",
  }
);
