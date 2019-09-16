/* jshint indent: 2 */
const Sequelize = require("sequelize");
const db = require("../../db/database");

module.exports = db.werchowSequelize.define(
  "pagos",
  {
    CONTRATO: {
      type: Sequelize.DataTypes.INTEGER(11),
      primaryKey: true,
      allowNull: true
    },
    NRO_RECIBO: {
      type: Sequelize.DataTypes.INTEGER(11),
      allowNull: true
    },
    SERIE: {
      type: Sequelize.DataTypes.INTEGER(11),
      allowNull: true
    },
    COMPROB: {
      type: Sequelize.DataTypes.INTEGER(11),
      allowNull: true
    },
    DIA_REN: {
      type: Sequelize.DataTypes.DATEONLY,
      allowNull: true
    },
    DIA_CAR: {
      type: Sequelize.DataTypes.DATEONLY,
      allowNull: true
    },
    DIA_EMI: {
      type: Sequelize.DataTypes.DATEONLY,
      allowNull: true
    },
    DIA_PAG: {
      type: Sequelize.DataTypes.DATEONLY,
      allowNull: true
    },
    HORA_CAR: {
      type: Sequelize.DataTypes.STRING(8),
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
    IMPORTE: {
      type: "DOUBLE",
      allowNull: true
    },
    MAN_COM: {
      type: Sequelize.DataTypes.STRING(1),
      allowNull: true
    },
    MOVIM: {
      type: Sequelize.DataTypes.STRING(1),
      allowNull: true
    },
    EX: {
      type: "DOUBLE",
      allowNull: true
    },
    GR: {
      type: "DOUBLE",
      allowNull: true
    },
    SEGURO: {
      type: "DOUBLE",
      allowNull: true
    },
    CARGA: {
      type: Sequelize.DataTypes.INTEGER(11),
      allowNull: true
    },
    OPERADOR: {
      type: Sequelize.DataTypes.INTEGER(11),
      allowNull: true
    },
    EXTRA: {
      type: Sequelize.DataTypes.INTEGER(4),
      allowNull: true
    },
    TIP_EXT: {
      type: Sequelize.DataTypes.INTEGER(11),
      allowNull: true
    },
    SUCURSAL: {
      type: Sequelize.DataTypes.STRING(1),
      allowNull: true
    },
    PUESTO: {
      type: Sequelize.DataTypes.STRING(2),
      allowNull: true
    },
    ACTUALIZA: {
      type: Sequelize.DataTypes.STRING(13),
      allowNull: true
    },
    MARCA: {
      type: Sequelize.DataTypes.INTEGER(4),
      allowNull: true
    },
    ZONA: {
      type: Sequelize.DataTypes.INTEGER(11),
      allowNull: true
    },
    CUOTA: {
      type: "DOUBLE",
      allowNull: true
    },
    EMPRESA: {
      type: Sequelize.DataTypes.STRING(1),
      allowNull: true
    },
    CAE: {
      type: Sequelize.DataTypes.STRING(20),
      allowNull: true
    },
    CAE_VTO: {
      type: Sequelize.DataTypes.STRING(8),
      allowNull: true
    },
    NCR_SERIE: {
      type: Sequelize.DataTypes.INTEGER(11),
      allowNull: true
    },
    NCR_NRO: {
      type: Sequelize.DataTypes.INTEGER(11),
      allowNull: true
    },
    BARCOD: {
      type: Sequelize.DataTypes.STRING(40),
      allowNull: true
    },
    DNI: {
      type: Sequelize.DataTypes.INTEGER(11),
      allowNull: true
    },
    FE_SERIE: {
      type: Sequelize.DataTypes.INTEGER(11),
      allowNull: true
    },
    FE_NRO: {
      type: Sequelize.DataTypes.INTEGER(11),
      allowNull: true
    }
  },
  {
    timestamps: false,
    freezeTableName: true
  },
  {
    tableName: "pagos"
  }
);
