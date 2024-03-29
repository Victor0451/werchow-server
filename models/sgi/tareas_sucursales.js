const Sequelize = require("sequelize");
const db = require("../../db/database");

module.exports = db.sgiSequelize.define(
  "tareas_sucursales",
  {
    idevents: {
      type: Sequelize.DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: Sequelize.DataTypes.STRING,
    },
    allDay: {
      type: Sequelize.DataTypes.TINYINT,
    },
    start: {
      type: Sequelize.DataTypes.DATE,
    },
    end: {
      type: Sequelize.DataTypes.DATE,
    },
    priority: {
      type: Sequelize.DataTypes.INTEGER,
    },
    sucursal: {
      type: Sequelize.DataTypes.STRING,
    },

    operador: {
      type: Sequelize.DataTypes.STRING,
    },

    leido: {
      type: Sequelize.DataTypes.TINYINT,
    },
  },

  {
    timestamps: false,
    freezeTableName: true,
  },
  {
    tableName: "tareas_sucursales",
  }
);
