const Sequelize = require("sequelize");
const db = require("../../db/database");

module.exports = db.sgiSequelize.define(
  "contratos",
  {
    idcontrato: {
      type: Sequelize.DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },

    locatario1: {
      type: Sequelize.DataTypes.STRING,
    },

    dni1: {
      type: Sequelize.DataTypes.INTEGER,
    },

    domicilio1: {
      type: Sequelize.DataTypes.STRING,
    },

    locatario2: {
      type: Sequelize.DataTypes.STRING,
    },

    dni2: {
      type: Sequelize.DataTypes.INTEGER,
    },

    domicilio2: {
      type: Sequelize.DataTypes.STRING,
    },

    monto: {
      type: Sequelize.DataTypes.INTEGER,
    },

    fecha_inicio: {
      type: Sequelize.DataTypes.DATE,
    },

    duracion: {
      type: Sequelize.DataTypes.INTEGER,
    },

    locador: {
      type: Sequelize.DataTypes.INTEGER,
    },

    operador: {
      type: Sequelize.DataTypes.STRING,
    },
    local: {
      type: Sequelize.DataTypes.STRING,
    },
    uf: {
      type: Sequelize.DataTypes.STRING,
    },

  },

  {
    timestamps: false,
    freezeTableName: true,
  },
  {
    tableName: "contratos",
  }
);
