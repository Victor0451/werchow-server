/* jshint indent: 2 */
const Sequelize = require("sequelize");
const db = require("../../db/database");

module.exports = db.clubWerchowSequelize.define(
  "grupos",
  {
    codigo: {
      type: Sequelize.DataTypes.INTEGER(11),
      allowNull: true,
      autoIncrement: true,
      primaryKey: true,
    },

    convenio: {
      type: Sequelize.DataTypes.STRING,
      allowNull: true,
    },
    estado: {
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
