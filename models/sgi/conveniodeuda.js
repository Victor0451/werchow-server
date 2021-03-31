const Sequelize = require("sequelize");
const db = require("../../db/database");

module.exports = db.sgiSequelize.define(
  "convenio_deuda",
  {
    idconvdeuda: {
      type: Sequelize.DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    contrato: {
      type: Sequelize.DataTypes.INTEGER,
    },
    dni: {
      type: Sequelize.DataTypes.INTEGER,
    },
    apellido: {
      type: Sequelize.DataTypes.STRING,
    },
    nombre: {
      type: Sequelize.DataTypes.STRING,
    },
    operador: {
      type: Sequelize.DataTypes.STRING,
    },
    vigencia: {
      type: Sequelize.DataTypes.DATE,
    },
    fecha: {
      type: Sequelize.DataTypes.DATE,
    },
    cuotas: {
      type: Sequelize.DataTypes.INTEGER,
    },
    idoperador: {
      type: Sequelize.DataTypes.INTEGER,
    },
    vencimiento1: {
      type: Sequelize.DataTypes.DATE,
    },
    vencimiento2: {
      type: Sequelize.DataTypes.DATE,
    },
    importe1: {
      type: Sequelize.DataTypes.INTEGER,
    },
    importe2: {
      type: Sequelize.DataTypes.INTEGER,
    },
    deuda: {
      type: Sequelize.DataTypes.INTEGER,
    },
    bonificacion: {
      type: Sequelize.DataTypes.INTEGER,
    },
    saldo: {
      type: Sequelize.DataTypes.INTEGER,
    },
    empresa: {
      type: Sequelize.DataTypes.STRING,
    },
  },
  {
    timestamps: false,
    freezeTableName: true,
  },
  {
    tableName: "convenio_deuda",
  }
);
