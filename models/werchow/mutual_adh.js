/* jshint indent: 2 */
const Sequelize = require("sequelize");
const db = require("../../db/database");

module.exports = db.wSequelize.define(
  "mutual_adh",
  {
    // ID: {
    //   type: Sequelize.DataTypes.INTEGER,
    //   allowNull: true,
    //   autoIncrement: true,
    //   primaryKey: true,
    // },
    SUCURSAL: {
      type: Sequelize.DataTypes.STRING,
      allowNull: true,
    },
    CONTRATO: {
      type: Sequelize.DataTypes.INTEGER,
      primaryKey: true,
      allowNull: true,
    },
    NRO_DOC: {
      type: Sequelize.DataTypes.INTEGER,
      allowNull: true,
    },
    APELLIDOS: {
      type: Sequelize.DataTypes.STRING,
      allowNull: true,
    },
    NOMBRES: {
      type: Sequelize.DataTypes.STRING,
      allowNull: true,
    },
    NACIMIENTO: {
      type: Sequelize.DataTypes.DATEONLY,
      allowNull: true,
    },
    SEXO: {
      type: Sequelize.DataTypes.STRING,
      allowNull: true,
    },
    ALTA: {
      type: Sequelize.DataTypes.DATEONLY,
      allowNull: true,
    },
    BAJA: {
      type: Sequelize.DataTypes.DATEONLY,
      allowNull: true,
    },
    VIGENCIA: {
      type: Sequelize.DataTypes.DATEONLY,
      allowNull: true,
    },
    ALT_SEG: {
      type: Sequelize.DataTypes.DATEONLY,
      allowNull: true,
    },
    VIG_SEG: {
      type: Sequelize.DataTypes.DATEONLY,
      allowNull: true,
    },
    ENC_SEG: {
      type: Sequelize.DataTypes.INTEGER,
      allowNull: true,
    },
    VIG_AYUDA: {
      type: Sequelize.DataTypes.DATEONLY,
      allowNull: true,
    },
    PARENT: {
      type: Sequelize.DataTypes.INTEGER,
      allowNull: true,
    },
    PAMI: {
      type: Sequelize.DataTypes.STRING,
      allowNull: true,
    },
    OBRA_SOC: {
      type: Sequelize.DataTypes.INTEGER,
      allowNull: true,
    },
    SEGURO: {
      type: Sequelize.DataTypes.INTEGER,
      allowNull: true,
    },
    PRODUCTOR: {
      type: Sequelize.DataTypes.INTEGER,
      allowNull: true,
    },
    PLAN: {
      type: Sequelize.DataTypes.STRING,
      allowNull: true,
    },
    SUB_PLAN: {
      type: Sequelize.DataTypes.STRING,
      allowNull: true,
    },
    FEC_PLAN: {
      type: Sequelize.DataTypes.DATEONLY,
      allowNull: true,
    },
    MOD_1: {
      type: Sequelize.DataTypes.DATEONLY,
      allowNull: true,
    },
    PRO_1: {
      type: Sequelize.DataTypes.INTEGER,
      allowNull: true,
    },
    MOD_2: {
      type: Sequelize.DataTypes.DATEONLY,
      allowNull: true,
    },
    PRO_2: {
      type: Sequelize.DataTypes.INTEGER,
      allowNull: true,
    },
    MOD_3: {
      type: Sequelize.DataTypes.DATEONLY,
      allowNull: true,
    },
    PRO_3: {
      type: Sequelize.DataTypes.INTEGER,
      allowNull: true,
    },
    MOD_4: {
      type: Sequelize.DataTypes.DATEONLY,
      allowNull: true,
    },
    PRO_4: {
      type: Sequelize.DataTypes.INTEGER,
      allowNull: true,
    },
    MOD_5: {
      type: Sequelize.DataTypes.DATEONLY,
      allowNull: true,
    },
    TSEG: {
      type: Sequelize.DataTypes.STRING,
      allowNull: true,
    },
    PRO_5: {
      type: Sequelize.DataTypes.INTEGER,
      allowNull: true,
    },
    MOD_6: {
      type: Sequelize.DataTypes.DATEONLY,
      allowNull: true,
    },
    PRO_6: {
      type: Sequelize.DataTypes.INTEGER,
      allowNull: true,
    },
    MOD_7: {
      type: Sequelize.DataTypes.DATEONLY,
      allowNull: true,
    },
    PRO_7: {
      type: Sequelize.DataTypes.INTEGER,
      allowNull: true,
    },
    MOD_8: {
      type: Sequelize.DataTypes.DATEONLY,
      allowNull: true,
    },
    PRO_8: {
      type: Sequelize.DataTypes.INTEGER,
      allowNull: true,
    },
    MOD_9: {
      type: Sequelize.DataTypes.DATEONLY,
      allowNull: true,
    },
    PRO_9: {
      type: Sequelize.DataTypes.INTEGER,
      allowNull: true,
    },
    MOD_10: {
      type: Sequelize.DataTypes.DATEONLY,
      allowNull: true,
    },
    PRO_10: {
      type: Sequelize.DataTypes.INTEGER,
      allowNull: true,
    },
    MOD_11: {
      type: Sequelize.DataTypes.DATEONLY,
      allowNull: true,
    },
    PRO_11: {
      type: Sequelize.DataTypes.INTEGER,
      allowNull: true,
    },
    MOD_12: {
      type: Sequelize.DataTypes.DATEONLY,
      allowNull: true,
    },
    PRO_12: {
      type: Sequelize.DataTypes.INTEGER,
      allowNull: true,
    },
    TOT_MOD: {
      type: "DOUBLE",
      allowNull: true,
    },
    BENEF: {
      type: Sequelize.DataTypes.INTEGER,
      allowNull: true,
    },
    ORDEN: {
      type: Sequelize.DataTypes.INTEGER,
      allowNull: true,
    },
    ACTUALIZA: {
      type: Sequelize.DataTypes.STRING,
      allowNull: true,
    },
    EDAD: {
      type: Sequelize.DataTypes.INTEGER,
      allowNull: true,
    },
    VIG_OPT: {
      type: Sequelize.DataTypes.DATEONLY,
      allowNull: true,
    },
    VIG_SUB: {
      type: Sequelize.DataTypes.DATEONLY,
      allowNull: true,
    },
    VIG_CONSU: {
      type: Sequelize.DataTypes.DATEONLY,
      allowNull: true,
    },
    VIG_SMEDI: {
      type: Sequelize.DataTypes.DATEONLY,
      allowNull: true,
    },
    DECL_JUR: {
      type: Sequelize.DataTypes.DATEONLY,
      allowNull: true,
    },
    TIPO_COMI: {
      type: Sequelize.DataTypes.INTEGER,
      allowNull: true,
    },
    PAGA_COMI: {
      type: Sequelize.DataTypes.INTEGER,
      allowNull: true,
    },
    TIPO_SEGU: {
      type: Sequelize.DataTypes.INTEGER,
      allowNull: true,
    },
    PAGO_SEGU: {
      type: Sequelize.DataTypes.INTEGER,
      allowNull: true,
    },
    TICOMISE: {
      type: Sequelize.DataTypes.INTEGER,
      allowNull: true,
    },
    PACOMISE: {
      type: Sequelize.DataTypes.INTEGER,
      allowNull: true,
    },
  },
  {
    timestamps: false,
    freezeTableName: true,
  },
  {
    tableName: "mutual_adh",
  }
);
