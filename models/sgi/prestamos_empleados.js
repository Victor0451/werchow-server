const Sequelize = require("sequelize");
const db = require("../../db/database");

module.exports = db.sgiSequelize.define(
  "prestamos_empleados",
  {
    idprestamo: {
      type: Sequelize.DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },

    empleado: {
      type: Sequelize.DataTypes.STRING,
    },

    fecha_solicitud: {
      type: Sequelize.DataTypes.DATE,
    },


    capital: {
      type: Sequelize.DataTypes.FLOAT,
    },

    plan_cuotas: {
      type: Sequelize.DataTypes.INTEGER,
    },

    cuota_mensual: {
      type: Sequelize.DataTypes.FLOAT,
    },

    capital_dev: {
      type: Sequelize.DataTypes.FLOAT,
    },

    inicia: {
      type: Sequelize.DataTypes.STRING,
    },

    termina: {
      type: Sequelize.DataTypes.STRING,
    },

    estado: {
      type: Sequelize.DataTypes.STRING,
    },

  },

  {
    timestamps: false,
    freezeTableName: true,
  },
  {
    tableName: "prestamos_empleados",
  }
);
