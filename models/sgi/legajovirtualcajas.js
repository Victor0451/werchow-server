const Sequelize = require("sequelize");
const db = require("../../db/database");

module.exports = db.sgiSequelize.define(
  "legajo_virtual_cajas",
  {
    idlegajo: {
      type: Sequelize.DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    idcaja: {
      type: Sequelize.DataTypes.INTEGER,
    },
    archivo: {
      type: Sequelize.DataTypes.STRING,
    },
    fecha_subida: {
      type: Sequelize.DataTypes.DATE,
    },

  },
  {
    timestamps: false,
    freezeTableName: true,
  },
  {
    tableName: "legajo_virtual_cajas",
  }
);
