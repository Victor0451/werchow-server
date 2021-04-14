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
    liquidado: {
      type: Sequelize.DataTypes.TINYINT,
    },
    fecha_liquidacion: {
      type: Sequelize.DataTypes.DATE,
    },
    aprobado: {
      type: Sequelize.DataTypes.TINYINT,
    },
    fecha_aprobacion: {
      type: Sequelize.DataTypes.DATE,
    },
    mes_planificacion: {
      type: Sequelize.DataTypes.STRING,
    },
    operadorliq: {
      type: Sequelize.DataTypes.STRING,
    },
    operadorap: {
      type: Sequelize.DataTypes.STRING,
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
