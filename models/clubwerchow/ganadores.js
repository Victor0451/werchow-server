const Sequelize = require("sequelize");
const db = require("../../db/database");

module.exports = db.clubWerchowSequelize.define(
  "ganadores",
  {
    idganador: {
      type: Sequelize.DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    ganador: {
      type: Sequelize.DataTypes.STRING,
    },

    premio: {
      type: Sequelize.DataTypes.INTEGER,
    },

    fecha: {
      type: Sequelize.DataTypes.DATE,
    },
  },
  {
    timestamps: false,
    freezeTableName: true,
  },
  {
    tableName: "ganadores",
  }
);
