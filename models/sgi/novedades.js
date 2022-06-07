const Sequelize = require("sequelize");
const db = require("../../db/database");

module.exports = db.sgiSequelize.define(
  "novedades",
  {
    idnovedades: {
      type: Sequelize.DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    fecha: {
      type: Sequelize.DataTypes.DATE,
    },
    novedad: {
      type: Sequelize.DataTypes.STRING,
    },
    operador: {
      type: Sequelize.DataTypes.STRING,
    },
    estado: {
      type: Sequelize.DataTypes.TINYINT,
    }
  },
  {
    timestamps: false,
    freezeTableName: true,
  },
  {
    tableName: "noticia",
  }
);
