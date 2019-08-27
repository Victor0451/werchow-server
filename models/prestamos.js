/* jshint indent: 2 */
const Sequelize = require("sequelize");
const db = require("../db/database.js");

module.exports = db.sequelize.define(
  "prestamos",
  {
    ptm_id: {
      type: Sequelize.DataTypes.INTEGER(6),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    ptm_fechacarga: {
      type: Sequelize.DataTypes.DATEONLY,
      allowNull: true
    },
    ptm_op: {
      type: Sequelize.DataTypes.INTEGER(6),
      allowNull: true
    },
    ptm_ficha: {
      type: Sequelize.DataTypes.INTEGER(6),
      allowNull: true
    },
    ptm_legajo: {
      type: Sequelize.DataTypes.INTEGER(8),
      allowNull: true
    },
    ptm_ant: {
      type: Sequelize.DataTypes.INTEGER(4),
      allowNull: true
    },
    ptm_fechasol: {
      type: Sequelize.DataTypes.DATEONLY,
      allowNull: true
    },
    ptm_renov: {
      type: Sequelize.DataTypes.STRING(5),
      allowNull: true
    },
    ptm_prestamo: {
      type: Sequelize.DataTypes.INTEGER(10),
      allowNull: true
    },
    ptm_cuotas: {
      type: Sequelize.DataTypes.INTEGER(3),
      allowNull: true
    },
    ptm_valcuota: {
      type: Sequelize.DataTypes.FLOAT,
      allowNull: true
    },
    ptm_neto: {
      type: Sequelize.DataTypes.FLOAT,
      allowNull: true
    },
    ptm_estado: {
      type: Sequelize.DataTypes.STRING(20),
      allowNull: true
    }
  },
  {
    timestamps: false,
    freezeTableName: true
  },
  {
    tableName: "prestamos"
  }
);
