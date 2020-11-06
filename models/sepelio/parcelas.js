const Sequelize = require("sequelize");
const db = require("../../db/database");

module.exports = db.sepelioSequelize.define(
  "parcelas",
  {
    idparcela: {
      type: Sequelize.DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    idservicio: {
      type: Sequelize.DataTypes.INTEGER,
    },
    dni_extinto: {
      type: Sequelize.DataTypes.INTEGER,
    },
    ficha: {
      type: Sequelize.DataTypes.INTEGER,
    },
    fecha: {
      type: Sequelize.DataTypes.DATE,
    },
    parcela: {
      type: Sequelize.DataTypes.STRING,
    },
    mza: {
      type: Sequelize.DataTypes.STRING,
    },
    lote: {
      type: Sequelize.DataTypes.STRING,
    },
    asignada: {
      type: Sequelize.DataTypes.TINYINT,
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
