const Sequelize = require("sequelize");
const db = require("../../db/database");

module.exports = db.clubWerchowSequelize.define(
  "comercios",
  {
    idcomercio: {
      type: Sequelize.DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    comercio: {
      type: Sequelize.DataTypes.STRING,
    },
    rubro: {
      type: Sequelize.DataTypes.STRING,
    },
    direccion: {
      type: Sequelize.DataTypes.STRING,
    },
    beneficio: {
      type: Sequelize.DataTypes.STRING,
    },
    estado: {
      type: Sequelize.DataTypes.TINYINT,
    },
    descuento: {
      type: Sequelize.DataTypes.INTEGER,
    },
  },
  {
    timestamps: false,
    freezeTableName: true,
  },
  {
    tableName: "comercios",
  }
);
