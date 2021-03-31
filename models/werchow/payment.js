/* jshint indent: 2 */
const Sequelize = require("sequelize");
const db = require("../../db/database");

module.exports = db.werchowSequelize.define(
  "payment",
  {
    contrato: {
      type: Sequelize.DataTypes.INTEGER(11),
      primaryKey: true,
      allowNull: true
    },
    enero: {
      type: Sequelize.DataTypes.TINYINT(1),
      allowNull: true
    },
    febrero: {
      type: Sequelize.DataTypes.TINYINT(1),
      allowNull: true
    },

    marzo: {
      type: Sequelize.DataTypes.INTEGER(11),
      allowNull: true
    },
    abril: {
      type: Sequelize.DataTypes.TINYINT(1),
      allowNull: true
    },
    mayo: {
      type: Sequelize.DataTypes.TINYINT(1),
      allowNull: true
    },
    junio: {
      type: Sequelize.DataTypes.TINYINT(1),
      allowNull: true
    },
    julio: {
      type: Sequelize.DataTypes.TINYINT(1),
      allowNull: true
    },
    agosto: {
      type: Sequelize.DataTypes.TINYINT(1),
      allowNull: true
    },
    septiembre: {
      type: Sequelize.DataTypes.TINYINT(1),
      allowNull: true
    },
    octubre: {
      type: Sequelize.DataTypes.TINYINT(1),
      allowNull: true
    },
    noviembre: {
      type: Sequelize.DataTypes.TINYINT(1),
      allowNull: true
    },
    diciembre: {
      type: Sequelize.DataTypes.TINYINT(1),
      allowNull: true
    }
  },
  {
    timestamps: true,
    freezeTableName: true
  },
  {
    tableName: "payment"
  }
);
