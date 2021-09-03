const Sequelize = require("sequelize");
const db = require("../../db/database");

module.exports = db.sgiSequelize.define(
  "historial_aprobacion_prestamos",
  {
    idaprobacion: {
      type: Sequelize.DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    idprestamo: {
      type: Sequelize.DataTypes.INTEGER,
    },
    fecha: {
      type: Sequelize.DataTypes.DATE,
    },
    operador: {
      type: Sequelize.DataTypes.STRING,
    },
    contrato: {
      type: Sequelize.DataTypes.INTEGER,
    },
    afiliado: {
      type: Sequelize.DataTypes.STRING,
    },
    productor: {
      type: Sequelize.DataTypes.STRING,
    },
  },
  {
    timestamps: false,
    freezeTableName: true,
  },
  {
    tableName: "historial_aprobacion_prestamos",
  }
);
