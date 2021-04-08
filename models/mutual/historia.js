/* jshint indent: 2 */
const Sequelize = require("sequelize");
const db = require('../../db/database');


module.exports = db.wSequelize.define(
  "historiam",
  {
    ID: {
      type: Sequelize.DataTypes.INTEGER,
      allowNull: true,
      autoIncrement: true,
      primaryKey: true
    },

    CONTRATO: {
      type: Sequelize.DataTypes.INTEGER,

      allowNull: true
    },
    OPERADOR: {
      type: Sequelize.DataTypes.STRING,
      allowNull: true
    },
    ANTERIOR: {
      type: Sequelize.DataTypes.STRING,
      allowNull: true
    },
    NUEVO: {
      type: Sequelize.DataTypes.STRING,
      allowNull: true
    },
    FECHA: {
      type: Sequelize.DataTypes.STRING,
      allowNull: true
    }
  },
  {
    timestamps: false,
    freezeTableName: true
  },
  {
    tableName: "historia"
  }
);
