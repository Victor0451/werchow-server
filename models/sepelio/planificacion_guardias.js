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

    inicio: {
      type: Sequelize.DataTypes.DATE,
    },
    fin: {
      type: Sequelize.DataTypes.DATE,
    },
    horas: {
      type: Sequelize.DataTypes.TIME,
    },
    operador: {
      type: Sequelize.DataTypes.STRING,
    },
    mes_planificacion: {
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
  },
  {
    timestamps: false,
    freezeTableName: true,
  },
  {
    tableName: "planificacion_guardias",
  }
);
