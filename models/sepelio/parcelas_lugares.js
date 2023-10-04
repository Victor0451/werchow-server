const Sequelize = require("sequelize");
const db = require("../../db/database");

module.exports = db.sepelioSequelize.define(
  "parcelas_lugares",
  {
    idlugar: {
      type: Sequelize.DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    idparcela: {
      type: Sequelize.DataTypes.INTEGER,
    },
    idservicio: {
      type: Sequelize.DataTypes.INTEGER,
    },
    lugar: {
      type: Sequelize.DataTypes.INTEGER,
    },
    contrato: {
      type: Sequelize.DataTypes.INTEGER,
    },
    dni: {
      type: Sequelize.DataTypes.INTEGER,
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
    tableName: "parcelas",
  }
);
