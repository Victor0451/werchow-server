const Sequelize = require("sequelize");
const db = require("../../db/database");

module.exports = db.sgiSequelize.define(
  "legajo_virtual",
  {
    idlegajo: {
      type: Sequelize.DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    contrato: {
      type: Sequelize.DataTypes.INTEGER,
    },
    archivo: {
      type: Sequelize.DataTypes.STRING,
    },
    fecha_subida: {
      type: Sequelize.DataTypes.DATE,
    },
    empresa: {
      type: Sequelize.DataTypes.STRING,
    },
    tipoarchivo: {
      type: Sequelize.DataTypes.STRING,
    },
  },
  {
    timestamps: false,
    freezeTableName: true,
  },
  {
    tableName: "legajo_virtual",
  }
);
