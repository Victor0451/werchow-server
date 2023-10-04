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
    cementerio: {
      type: Sequelize.DataTypes.STRING,
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
    operador: {
      type: Sequelize.DataTypes.STRING,
    },
    fecha_alta: {
      type: Sequelize.DataTypes.DATE,
    },
    operador_asignacion: {
      type: Sequelize.DataTypes.STRING,
    },
    fecha_asignacion: {
      type: Sequelize.DataTypes.DATE,
    },
    lugares: {
      type: Sequelize.DataTypes.INTEGER,
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
