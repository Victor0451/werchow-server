const Sequelize = require("sequelize");
const db = require("../../db/database");

module.exports = db.infoSequelize.define(
  "mtjt",
  {
    idmtjt: {
      type: Sequelize.DataTypes.INTEGER,
      primaryKey: true
    },
    grupo: {
      type: Sequelize.DataTypes.INTEGER
    },
    descr: {
      type: Sequelize.DataTypes.STRING
    },
    morainicial: {
      type: Sequelize.DataTypes.INTEGER
    },
    fichasinicial: {
      type: Sequelize.DataTypes.INTEGER
    },
    moraactual: {
      type: Sequelize.DataTypes.INTEGER
    },
    fichasactual: {
      type: Sequelize.DataTypes.INTEGER
    },
    mes: {
      type: Sequelize.DataTypes.INTEGER
    },
    ano: {
      type: Sequelize.DataTypes.INTEGER
    },
    fecha_creacion: {
      type: Sequelize.DataTypes.DATE
    },
    fecha_actualizacion: {
      type: Sequelize.DataTypes.DATE
    }
  },
  {
    timestamps: false,
    freezeTableName: true
  },
  {
    tableName: "mtjt"
  }
);
