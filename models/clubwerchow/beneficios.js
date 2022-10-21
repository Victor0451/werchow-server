const Sequelize = require("sequelize");
const db = require("../../db/database");

module.exports = db.clubWerchowSequelize.define(
  "beneficios",
  {
    idbeneficio: {
      type: Sequelize.DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },

    socio: {
      type: Sequelize.DataTypes.INTEGER,
    },

    ape_nom: {
      type: Sequelize.DataTypes.STRING,
    },

    dni: {
      type: Sequelize.DataTypes.INTEGER,
    },

    idcomercio: {
      type: Sequelize.DataTypes.INTEGER,
    },

    nombre: {
      type: Sequelize.DataTypes.STRING,
    },

    monto_compra: {
      type: Sequelize.DataTypes.FLOAT,
    },

    beneficio: {
      type: Sequelize.DataTypes.INTEGER,
    },

    monto_final: {
      type: Sequelize.DataTypes.FLOAT,
    },

    fecha: {
      type: Sequelize.DataTypes.DATE,
    },

    n_trans: {
      type: Sequelize.DataTypes.STRING,
    },

  },
  {
    timestamps: false,
    freezeTableName: true,
  },
  {
    tableName: "beneficios",
  }
);
