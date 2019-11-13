const Sequelize = require("sequelize");
const db = require("../../db/database");

module.exports = db.sepelioSequelize.define(
  "ataudes",
  {
    COD_ART: {
      type: Sequelize.DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    CODIGO: {
      type: Sequelize.DataTypes.INTEGER
    },

    DESCRI_ART: {
      type: Sequelize.DataTypes.STRING
    },
    TAMA_LARGO: {
      type: Sequelize.DataTypes.STRING
    },
    PTO_REPO: {
      type: Sequelize.DataTypes.INTEGER
    },
    STOCK_ACT: {
      type: Sequelize.DataTypes.INTEGER
    },
    STOCK_SRL: {
      type: Sequelize.DataTypes.INTEGER
    },
    FECHA_ALTA: {
      type: Sequelize.DataTypes.DATE
    },
    FECHA_UPDATE_STOCK: {
      type: Sequelize.DataTypes.DATE
    },
    CARACT: {
      type: Sequelize.DataTypes.STRING
    },
    MODELOS: {
      type: Sequelize.DataTypes.STRING
    },
    PRECIO_ART: {
      type: Sequelize.DataTypes.STRING
    },
    FECHA_BAJA: {
      type: Sequelize.DataTypes.DATE
    },
    OPERADOR: {
      type: Sequelize.DataTypes.STRING
    },
    NOMB_OPER: {
      type: Sequelize.DataTypes.STRING
    }
  },
  {
    timestamps: false,
    freezeTableName: true
  },
  {
    tableName: "ataudes"
  }
);
