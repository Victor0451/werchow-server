const Sequelize = require("sequelize");
const db = require("../../db/database");

module.exports = db.sgiSequelize.define(
  "datos",
  {
    iddato: {
      type: Sequelize.DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    fecha: {
      type: Sequelize.DataTypes.DATE,
    },
    apellido: {
      type: Sequelize.DataTypes.STRING,
    },
    nombre: {
      type: Sequelize.DataTypes.STRING,
    },
    edad: {
      type: Sequelize.DataTypes.INTEGER,
    },
    telefono: {
      type: Sequelize.DataTypes.BIGINT,
    },
    celular: {
      type: Sequelize.DataTypes.BIGINT,
    },
    cobertura: {
      type: Sequelize.DataTypes.STRING,
    },
    grupo_familiar: {
      type: Sequelize.DataTypes.STRING,
    },
    observacion: {
      type: Sequelize.DataTypes.STRING,
    },

    domicilio: {
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
    tableName: "datos",
  }
);
