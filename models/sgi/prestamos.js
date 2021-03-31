const Sequelize = require("sequelize");
const db = require("../../db/database");

module.exports = db.wSequelize.define(
  //  module.exports = db.sgiSequelize.define(
  "prestamos",
  {
    ptm_id: {
      type: Sequelize.DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    ptm_fechacarga: {
      type: Sequelize.DataTypes.DATE,
    },
    ptm_op: {
      type: Sequelize.DataTypes.INTEGER,
    },
    ptm_ficha: {
      type: Sequelize.DataTypes.INTEGER,
    },
    ptm_legajo: {
      type: Sequelize.DataTypes.INTEGER,
    },
    ptm_ant: {
      type: Sequelize.DataTypes.INTEGER,
    },
    ptm_fechasol: {
      type: Sequelize.DataTypes.DATE,
    },
    ptm_renov: {
      type: Sequelize.DataTypes.STRING,
    },
    ptm_prestamo: {
      type: Sequelize.DataTypes.INTEGER,
    },
    ptm_cuotas: {
      type: Sequelize.DataTypes.INTEGER,
    },
    ptm_valcuota: {
      type: Sequelize.DataTypes.FLOAT,
    },
    ptm_neto: {
      type: Sequelize.DataTypes.FLOAT,
    },
    ptm_estado: {
      type: Sequelize.DataTypes.STRING,
    },
    cod_ptm_leg: {
      type: Sequelize.DataTypes.STRING,
    },
    ptm_afi: {
      type: Sequelize.DataTypes.STRING,
    },
  },
  {
    timestamps: false,
    freezeTableName: true,
  },
  {
    tableName: "prestamos",
  }
);
