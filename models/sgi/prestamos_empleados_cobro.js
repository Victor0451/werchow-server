const Sequelize = require("sequelize");
const db = require("../../db/database");

module.exports = db.sgiSequelize.define(
  "prestamos_empleados_cobro",
  {
    idpago: {
      type: Sequelize.DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },

    idprestamo: {
      type: Sequelize.DataTypes.INTEGER,
    },

    cuota: {
      type: Sequelize.DataTypes.INTEGER,
    },

    importe: {
      type: Sequelize.DataTypes.FLOAT,
    },


    fecha_cobro: {
      type: Sequelize.DataTypes.DATE,
    },


    estado: {
      type: Sequelize.DataTypes.TINYINT,
    },

    fecha_pago: {
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
    tableName: "prestamos_empleados_cobro",
  }
);
