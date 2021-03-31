/* jshint indent: 2 */
const Sequelize = require("sequelize");
const db = require("../../db/database");

module.exports = db.sgiSequelize.define(
  "sow",
  {
    CONTRATO: {
      type: Sequelize.DataTypes.INTEGER(11),
      primaryKey: true,
      allowNull: true
    },
    APE_NOM: {
      type: Sequelize.DataTypes.STRING,
      allowNull: true
    },
    ALTA: {
      type: Sequelize.DataTypes.DATE,
      allowNull: true
    },
    GRUPO: {
      type: Sequelize.DataTypes.INTEGER,
      allowNull: true
    },
    ADHS: {
      type: Sequelize.DataTypes.INTEGER,
      allowNull: true
    },
    PLAN: {
      type: Sequelize.DataTypes.STRING,
      allowNull: true
    },

    SUB_PLAN: {
      type: Sequelize.DataTypes.STRING,
      allowNull: true
    },
    ZONA: {
      type: Sequelize.DataTypes.INTEGER,
      allowNull: true
    },
    CUOTA: {
      type: Sequelize.DataTypes.DOUBLE,
      allowNull: true
    },
    EMPRESA: {
      type: Sequelize.DataTypes.STRING,
      allowNull: true
    },
    SUCURSAL: {
      type: Sequelize.DataTypes.STRING,
      allowNull: true
    },
    EDAD_PROM: {
      type: Sequelize.DataTypes.DOUBLE,
      allowNull: true
    },
    PERMANEN: {
      type: Sequelize.DataTypes.DOUBLE,
      allowNull: true
    },
    DEUDA: {
      type: Sequelize.DataTypes.INTEGER,
      allowNull: true
    }
  },
  {
    timestamps: false,
    freezeTableName: true
  },
  {
    tableName: "sow"
  }
);
