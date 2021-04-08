const Sequelize = require("sequelize");
const db = require("../../db/database");

module.exports = db.sepelioSequelize.define(
  "tareas_adicionales",
  {
    idtarea: {
      type: Sequelize.DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },

    idturno: {
      type: Sequelize.DataTypes.INTEGER,
    },

    fecha: {
      type: Sequelize.DataTypes.DATE,
    },

    inicio: {
      type: Sequelize.DataTypes.TIME,
    },

    fin: {
      type: Sequelize.DataTypes.TIME,
    },
    tarea: {
      type: Sequelize.DataTypes.STRING,
    },

    horas: {
      type: Sequelize.DataTypes.TIME,
    },

    operador: {
      type: Sequelize.DataTypes.STRING,
    },

    observaciones: {
      type: Sequelize.DataTypes.STRING,
    },

    feriado: {
      type: Sequelize.DataTypes.TINYINT,
    },

  },
  {
    timestamps: false,
    freezeTableName: true,
  },
  {
    tableName: "tareas_adicionales",
  }
);
