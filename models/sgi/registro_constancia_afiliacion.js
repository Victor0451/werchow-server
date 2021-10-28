const Sequelize = require("sequelize");
const db = require("../../db/database");

module.exports = db.sgiSequelize.define(
  "registro_constancia_afiliacion",
  {
    idconstancia: {
      type: Sequelize.DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    idservicio: {
      type: Sequelize.DataTypes.INTEGER,
    },
    apellido_extinto: {
      type: Sequelize.DataTypes.STRING,
    },

    nombre_extinto: {
      type: Sequelize.DataTypes.STRING,
    },

    dni_extinto: {
      type: Sequelize.DataTypes.INTEGER,
    },

    apellido_soli: {
      type: Sequelize.DataTypes.STRING,
    },

    nombre_soli: {
      type: Sequelize.DataTypes.STRING,
    },

    dni_soli: {
      type: Sequelize.DataTypes.INTEGER,
    },

    fecha: {
      type: Sequelize.DataTypes.DATE,
    },
    lugar_presentacion: {
      type: Sequelize.DataTypes.STRING,
    },

    operador: {
      type: Sequelize.DataTypes.STRING,
    },
  },
  {
    timestamps: false,
    freezeTableName: true,
  },
  {
    tableName: "registro_constancia_afiliacion",
  }
);
