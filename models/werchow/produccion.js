const Sequelize = require("sequelize");
const db = require("../../db/database");

module.exports = db.wSequelize.define(
  "produccion",
  {
    prod_ide: {
      type: Sequelize.DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    prod_fechacarga: {
      type: Sequelize.DataTypes.DATE,
    },
    prod_fechaafi: {
      type: Sequelize.DataTypes.DATE,
    },
    prod_asesor: {
      type: Sequelize.DataTypes.INTEGER,
    },
    prod_empre: {
      type: Sequelize.DataTypes.STRING,
    },
    prod_mes: {
      type: Sequelize.DataTypes.STRING,
    },
    prod_anio: {
      type: Sequelize.DataTypes.INTEGER,
    },
    prod_apeafi: {
      type: Sequelize.DataTypes.STRING,
    },
    prod_nomafi: {
      type: Sequelize.DataTypes.STRING,
    },
    prod_dniafi: {
      type: Sequelize.DataTypes.INTEGER,
    },
    prod_local: {
      type: Sequelize.DataTypes.STRING,
    },
    prod_recibo: {
      type: Sequelize.DataTypes.INTEGER,
    },
    prod_monto: {
      type: Sequelize.DataTypes.FLOAT,
    },
    prod_plan: {
      type: Sequelize.DataTypes.STRING,
    },
    prod_pago: {
      type: Sequelize.DataTypes.STRING,
    },
    prod_cta_tar: {
      type: Sequelize.DataTypes.BIGINT,
    },
    prod_obs: {
      type: Sequelize.DataTypes.STRING,
    },
    prod_semana: {
      type: Sequelize.DataTypes.INTEGER,
    },
  },
  {
    timestamps: false,
    freezeTableName: true,
  },
  {
    tableName: "produccion",
  }
);
