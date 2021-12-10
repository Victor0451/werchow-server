const Sequelize = require("sequelize");
const db = require("../../db/database");

module.exports = db.sgiSequelize.define(
  "caja_sucursales",
  {
    idcaja: {
      type: Sequelize.DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    entrada: {
      type: Sequelize.DataTypes.FLOAT,
    },
    salida: {
      type: Sequelize.DataTypes.FLOAT,
    },
    valor_depositar: {
      type: Sequelize.DataTypes.FLOAT,
    },
    fecha_caja: {
      type: Sequelize.DataTypes.DATE,
    },
    fecha_carga: {
      type: Sequelize.DataTypes.DATE,
    },
    operador: {
      type: Sequelize.DataTypes.STRING,
    },
    sucursal: {
      type: Sequelize.DataTypes.STRING,
    }
  },

  {
    timestamps: false,
    freezeTableName: true,
  },
  {
    tableName: "caja_sucursales",
  }
);
