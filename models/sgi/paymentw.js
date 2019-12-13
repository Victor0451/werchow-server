/* jshint indent: 2 */
const Sequelize = require("sequelize");
const db = require("../../db/database");

module.exports = db.sgiSequelize.define(
  "paymentw",
  {
    contrato: {
      type: Sequelize.DataTypes.INTEGER(11),
      primaryKey: true,
      allowNull: true
    },
    grupo: {
      type: Sequelize.DataTypes.INTEGER,
      allowNull: true
    },
    zona: {
      type: Sequelize.DataTypes.INTEGER,
      allowNull: true
    },
    cuota: {
      type: Sequelize.DataTypes.DOUBLE,
      allowNull: true
    },
    1: {
      type: Sequelize.DataTypes.TINYINT(1),
      allowNull: true
    },
    2: {
      type: Sequelize.DataTypes.TINYINT(1),
      allowNull: true
    },

    3: {
      type: Sequelize.DataTypes.INTEGER(11),
      allowNull: true
    },
    4: {
      type: Sequelize.DataTypes.TINYINT(1),
      allowNull: true
    },
    5: {
      type: Sequelize.DataTypes.TINYINT(1),
      allowNull: true
    },
    6: {
      type: Sequelize.DataTypes.TINYINT(1),
      allowNull: true
    },
    7: {
      type: Sequelize.DataTypes.TINYINT(1),
      allowNull: true
    },
    8: {
      type: Sequelize.DataTypes.TINYINT(1),
      allowNull: true
    },
    9: {
      type: Sequelize.DataTypes.TINYINT(1),
      allowNull: true
    },
    10: {
      type: Sequelize.DataTypes.TINYINT(1),
      allowNull: true
    },
    11: {
      type: Sequelize.DataTypes.TINYINT(1),
      allowNull: true
    },
    12: {
      type: Sequelize.DataTypes.TINYINT(1),
      allowNull: true
    },
    ano: {
      type: Sequelize.DataTypes.INTEGER,
      allowNull: true
    }
  },
  {
    timestamps: false,
    freezeTableName: true
  },
  {
    tableName: "paymentw"
  }
);
