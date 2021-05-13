const Sequelize = require("sequelize");
const db = require("../../db/database");

module.exports = db.sepelioSequelize.define(
  "proveedores",
  {
    idproveedor: {
      type: Sequelize.DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    razon: {
      type: Sequelize.DataTypes.STRING
    },
    cuit: {
      type: Sequelize.DataTypes.STRING
    },
    domicilio: {
      type: Sequelize.DataTypes.STRING
    },
    telefonos: {
      type: Sequelize.DataTypes.INTEGER
    },
    estado: {
      type: Sequelize.DataTypes.TINYINT
    },
    operador: {
      type: Sequelize.DataTypes.STRING
    },
  },
  {
    timestamps: false,
    freezeTableName: true
  },
  {
    tableName: "proveedores"
  }
);
