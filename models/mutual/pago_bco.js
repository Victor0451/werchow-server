/* jshint indent: 2 */
const Sequelize = require('sequelize');
const db = require('../../db/database');


module.exports = db.mutualSequelize.define('pago_bco', {
  NRO_DOC: {
    type: Sequelize.DataTypes.INTEGER(11),
    allowNull: true
  },
  CONTRATO: {
    type: Sequelize.DataTypes.INTEGER(11),
    primaryKey: true,
    allowNull: true
  },
  COD_SUC: {
    type: Sequelize.DataTypes.STRING(3),
    allowNull: true
  },
  NRO_CTA: {
    type: Sequelize.DataTypes.STRING(9),
    allowNull: true
  },
  FEC_ACR: {
    type: Sequelize.DataTypes.STRING(6),
    allowNull: true
  },
  IMPORTE: {
    type: "DOUBLE",
    allowNull: true
  },
  MARCA: {
    type: Sequelize.DataTypes.STRING(1),
    allowNull: true
  },
  MES: {
    type: Sequelize.DataTypes.INTEGER(11),
    allowNull: true
  },
  ANO: {
    type: Sequelize.DataTypes.INTEGER(11),
    allowNull: true
  },
  DIA_PAGO: {
    type: Sequelize.DataTypes.DATEONLY,
    allowNull: true
  },
  SUCURSAL: {
    type: Sequelize.DataTypes.STRING(1),
    allowNull: true
  },
  SEGURO: {
    type: "DOUBLE",
    allowNull: true
  }
},
  {
    timestamps: false,
    freezeTableName: true
  },
  {
    tableName: 'pago_bco'
  });

