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

    fecha_carga: {
      type: Sequelize.DataTypes.DATE,
    },

    sucursal: {
      type: Sequelize.DataTypes.STRING,
    },

    ingresos: {
      type: Sequelize.DataTypes.FLOAT,
    },

    egresos: {
      type: Sequelize.DataTypes.FLOAT,
    },

    saldo: {
      type: Sequelize.DataTypes.FLOAT,
    },

    operador_carga: {
      type: Sequelize.DataTypes.STRING,
    },

    empresa: {
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
