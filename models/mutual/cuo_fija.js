/* jshint indent: 2 */
const Sequelize = require("sequelize");
const db = require("../../db/database");

module.exports = db.wSequelize.define(
  "cuo_mutual",
  {
    CONTRATO: {
      type: Sequelize.DataTypes.INTEGER(11),
      allowNull: true
    },
    IMPORTE: {
      type: Sequelize.DataTypes.DOUBLE,
      allowNull: true
    },
    CUO_ANT: {
      type: Sequelize.DataTypes.DOUBLE,
      allowNull: true
    },
    DESDE: {
      type: Sequelize.DataTypes.DATEONLY,
      allowNull: true
    },
    VENCIM: {
      type: Sequelize.DataTypes.DATEONLY,
      allowNull: true
    },
    ACTUALIZA: {
      type: Sequelize.DataTypes.STRING(13),
      allowNull: true
    },
    OPERADOR: {
      type: Sequelize.DataTypes.INTEGER(11),
      allowNull: true
    }
  },
  {
    timestamps: false,
    freezeTableName: true
  },
  {
    tableName: "cuo_fija"
  }
);
