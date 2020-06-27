const Sequelize = require("sequelize");
const db = require("../../db/database");

module.exports = db.sepelioSequelize.define(
  "precio_servicio",
  {
    idprecio: {
      type: Sequelize.DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    codigo: {
      type: Sequelize.DataTypes.INTEGER,
    },

    contado: {
      type: Sequelize.DataTypes.INTEGER,
    },
    contado_cremacion: {
      type: Sequelize.DataTypes.INTEGER,
    },
    descuento1: {
      type: Sequelize.DataTypes.INTEGER,
    },
    descuento1_cremacion: {
      type: Sequelize.DataTypes.INTEGER,
    },
    descuento2: {
      type: Sequelize.DataTypes.INTEGER,
    },
    descuento2_cremacion: {
      type: Sequelize.DataTypes.INTEGER,
    },
    fecha_vigencia: {
      type: Sequelize.DataTypes.DATE,
    },
  },
  {
    timestamps: false,
    freezeTableName: true,
  },
  {
    tableName: "precio_servicio",
  }
);
