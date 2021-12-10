const Sequelize = require("sequelize");
const db = require("../../db/database");

module.exports = db.sepelioSequelize.define(
  "autos_hoja_ruta",
  {
    idhojaruta: {
      type: Sequelize.DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    patente: {
      type: Sequelize.DataTypes.STRING,
    },

    auto: {
      type: Sequelize.DataTypes.STRING,
    },

    conductor: {
      type: Sequelize.DataTypes.STRING,
    },

    idservicio: {
      type: Sequelize.DataTypes.INTEGER,
    },
    fecha_salida: {
      type: Sequelize.DataTypes.DATE,
    },
    km_salida: {
      type: Sequelize.DataTypes.INTEGER,
    },
    fecha_llegada: {
      type: Sequelize.DataTypes.DATE,
    },
    km_llegada: {
      type: Sequelize.DataTypes.INTEGER,
    },

    fecha_registro: {
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
    tableName: "autos_hoja_ruta",
  }
);
