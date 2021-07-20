const Sequelize = require("sequelize");
const db = require("../../db/database");

module.exports = db.sepelioSequelize.define(
  "ataud_venta",
  {
    idataudventa: {
      type: Sequelize.DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    idataud: {
      type: Sequelize.DataTypes.INTEGER,
    },

    ataud: {
      type: Sequelize.DataTypes.STRING,
    },

    contrato: {
      type: Sequelize.DataTypes.INTEGER,
    },

    apellido_fall: {
      type: Sequelize.DataTypes.STRING,
    },
    nombre_fall: {
      type: Sequelize.DataTypes.STRING,
    },
    dni_fall: {
      type: Sequelize.DataTypes.INTEGER,
    },
    dom_fall: {
      type: Sequelize.DataTypes.STRING,
    },
    ndom_fall: {
      type: Sequelize.DataTypes.INTEGER,
    },
    barrio_fall: {
      type: Sequelize.DataTypes.STRING,
    },
    telefono_fall: {
      type: Sequelize.DataTypes.STRING,
    },

    apellido_sol: {
      type: Sequelize.DataTypes.STRING,
    },
    nombre_sol: {
      type: Sequelize.DataTypes.STRING,
    },
    dni_sol: {
      type: Sequelize.DataTypes.INTEGER,
    },

    telefono_sol: {
      type: Sequelize.DataTypes.STRING,
    },

    fecha: {
      type: Sequelize.DataTypes.DATE,
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
    tableName: "ataud_venta",
  }
);
