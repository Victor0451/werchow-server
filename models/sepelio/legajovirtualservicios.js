const Sequelize = require("sequelize");
const db = require("../../db/database");

module.exports = db.sepelioSequelize.define(
  "legajo_virtual_servicios",
  {
    idlegajo: {
      type: Sequelize.DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    servicio: {
      type: Sequelize.DataTypes.STRING,
    },
    archivo: {
      type: Sequelize.DataTypes.STRING,
    },
    fecha_subida: {
      type: Sequelize.DataTypes.DATE,
    },
    empresa: {
      type: Sequelize.DataTypes.STRING,
    },
  },
  {
    timestamps: false,
    freezeTableName: true,
  },
  {
    tableName: "legajo_virtual_servicios",
  }
);
