const Sequelize = require("sequelize");
const db = require("../../db/database");

module.exports = db.sgiSequelize.define(
  "datos_atencion",
  {
    iddatos: {
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
    dni: {
      type: Sequelize.DataTypes.INTEGER,
    },
    telefono: {
      type: Sequelize.DataTypes.BIGINT,
    },

    motivo: {
      type: Sequelize.DataTypes.STRING,
    },

    parentezco: {
      type: Sequelize.DataTypes.STRING,
    },

    operador: {
      type: Sequelize.DataTypes.STRING,
    },

    operadoratencion: {
      type: Sequelize.DataTypes.STRING,
    },
  },

  {
    timestamps: false,
    freezeTableName: true,
  },
  {
    tableName: "datos_atencion",
  }
);
