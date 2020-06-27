const Sequelize = require("sequelize");
const db = require("../../db/database");

module.exports = db.sepelioSequelize.define(
  "ataudes",
  {
    idataud: {
      type: Sequelize.DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nombre: {
      type: Sequelize.DataTypes.STRING,
    },

    tipo: {
      type: Sequelize.DataTypes.STRING,
    },
    medidas: {
      type: Sequelize.DataTypes.STRING,
    },
    uso: {
      type: Sequelize.DataTypes.STRING,
    },
    fabricante: {
      type: Sequelize.DataTypes.STRING,
    },
    codigo: {
      type: Sequelize.DataTypes.INTEGER,
    },
    fecha_alta: {
      type: Sequelize.DataTypes.DATE,
    },
    stock: {
      type: Sequelize.DataTypes.INTEGER,
    },
    fecha_reposicion: {
      type: Sequelize.DataTypes.DATE,
    },
    estado: {
      type: Sequelize.DataTypes.TINYINT,
    },
    fecha_baja: {
      type: Sequelize.DataTypes.DATE,
    },
    observaciones: {
      type: Sequelize.DataTypes.STRING,
    },
    operador: {
      type: Sequelize.DataTypes.STRING,
    },
  },
  {
    timestamps: false,
    freezeTableName: true,
  },
  {
    tableName: "ataudes",
  }
);
