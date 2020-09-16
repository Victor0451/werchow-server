/* jshint indent: 2 */
const Sequelize = require("sequelize");
const db = require("../../db/database");

module.exports = db.wSequelize.define(
  "grupos",
  {
    CODIGO: {
      type: Sequelize.DataTypes.INTEGER(11),
      allowNull: true,
      autoIncrement: true,
      primaryKey: true,
    },

    DESCRIP: {
      type: Sequelize.DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    timestamps: false,
    freezeTableName: true,
  },
  {
    tableName: "grupos",
  }
);
