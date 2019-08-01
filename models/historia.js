/* jshint indent: 2 */
const Sequelize = require('sequelize');
const db = require('../db/database.js');

module.exports = db.sequelize.define('historia', {
  CONTRATO: {
    type: Sequelize.DataTypes.INTEGER(11),
    primaryKey: true,
    allowNull: true
  },
  OPERADOR: {
    type: Sequelize.DataTypes.INTEGER(11),
    allowNull: true
  },
  ARCHIVO: {
    type: Sequelize.DataTypes.INTEGER(11),
    allowNull: true
  },
  CAMPO: {
    type: Sequelize.DataTypes.INTEGER(11),
    allowNull: true
  },
  ANTERIOR: {
    type: Sequelize.DataTypes.STRING(30),
    allowNull: true
  },
  NUEVO: {
    type: Sequelize.DataTypes.STRING(30),
    allowNull: true
  },
  ACTUALIZA: {
    type: Sequelize.DataTypes.STRING(13),
    allowNull: true
  },
  CONTROL: {
    type: Sequelize.DataTypes.STRING(9),
    allowNull: true
  }
},
  {
    timestamps: false,
    freezeTableName: true
  },
  {
    tableName: 'historia'
  });

