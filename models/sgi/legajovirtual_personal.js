const Sequelize = require("sequelize");
const db = require("../../db/database");

module.exports = db.sgiSequelize.define(
  "legajo_virtual_personal",
  {
    idlegajo: {
      type: Sequelize.DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    idpersonal: {
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
    tableName: "legajo_virtual_personal",
  }
);
