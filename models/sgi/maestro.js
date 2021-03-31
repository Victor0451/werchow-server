/* jshint indent: 2 */
const Sequelize = require("sequelize");
const db = require("../../db/database");

module.exports = db.sgiSequelize.define(
  "maestro",
  {
    CONTRATO: {
      type: Sequelize.DataTypes.INTEGER(11),
      primaryKey: true,
      allowNull: true
    },
    SUCURSAL: {
      type: Sequelize.DataTypes.STRING,
      allowNull: true
    },
    GRUPO: {
      type: Sequelize.DataTypes.INTEGER,
      allowNull: true
    },
    ZONA: {
      type: Sequelize.DataTypes.INTEGER,
      allowNull: true
    }
  },
  {
    timestamps: false,
    freezeTableName: true
  },
  {
    tableName: "maestro"
  }
);
