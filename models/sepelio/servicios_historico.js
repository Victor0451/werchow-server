const Sequelize = require("sequelize");
const db = require("../../db/database");

module.exports = db.sepelioSequelize.define(
  "servicios_historico",
  {
    NRO_NOTACR: {
      type: Sequelize.DataTypes.INTEGER,
      primaryKey: true,
    },
    FEC_CREDIT: {
      type: Sequelize.DataTypes.DATE,
    },
    EXINTO: {
      type: Sequelize.DataTypes.STRING,
    },
    DNI_EXIN: {
      type: Sequelize.DataTypes.INTEGER,
    },
    EDAD_EXIN: {
      type: Sequelize.DataTypes.INTEGER,
    },
    FEC_FALLEC: {
      type: Sequelize.DataTypes.DATE,
    },
    LUGAR: {
      type: Sequelize.DataTypes.STRING,
    },
    TIPO_SERV: {
      type: Sequelize.DataTypes.STRING,
    },
  },
  {
    timestamps: false,
    freezeTableName: true,
  },
  {
    tableName: "servicios_historico",
  }
);
