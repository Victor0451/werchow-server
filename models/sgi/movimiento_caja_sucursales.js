const Sequelize = require("sequelize");
const db = require("../../db/database");

module.exports = db.sgiSequelize.define(
  "movimiento_caja_sucursales",
  {
    idmovimiento: {
      type: Sequelize.DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },

    idcaja: {
      type: Sequelize.DataTypes.INTEGER,
    },

    fecha_carga: {
      type: Sequelize.DataTypes.DATE,
    },

    fecha_movimiento: {
      type: Sequelize.DataTypes.DATE,
    },

    sucursal: {
      type: Sequelize.DataTypes.STRING,
    },

    concepto: {
      type: Sequelize.DataTypes.STRING,
    },

    movimiento: {
      type: Sequelize.DataTypes.STRING,
    },

    importe: {
      type: Sequelize.DataTypes.FLOAT,
    },

    operador_carga: {
      type: Sequelize.DataTypes.STRING,
    }

  },

  {
    timestamps: false,
    freezeTableName: true,
  },
  {
    tableName: "movimiento_caja_sucursales",
  }
);
