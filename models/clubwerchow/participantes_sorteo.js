const Sequelize = require("sequelize");
const db = require("../../db/database");

module.exports = db.clubWerchowSequelize.define(
  "participantes_sorteo",
  {
    idparticipante: {
      type: Sequelize.DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    participante: {
      type: Sequelize.DataTypes.STRING,
    },

    dni: {
      type: Sequelize.DataTypes.INTEGER,
    },
    telefono: {
      type: Sequelize.DataTypes.INTEGER,
    },
    doblechance: {
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
    tableName: "participantes_sorteo",
  }
);
