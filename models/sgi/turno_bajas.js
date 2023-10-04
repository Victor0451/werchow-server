const Sequelize = require("sequelize");
const db = require("../../db/database");

module.exports = db.sgiSequelize.define(
  "turno_bajas",
  {
    idturno: {
      type: Sequelize.DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    contrato: {
      type: Sequelize.DataTypes.INTEGER,
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
      type: Sequelize.DataTypes.STRING,
    },
    movil: {
      type: Sequelize.DataTypes.STRING,
    },
    fecha_pedido: {
      type: Sequelize.DataTypes.DATE,
    },
    fecha_turno: {
      type: Sequelize.DataTypes.DATE,
    },
    fecha_atencion: {
      type: Sequelize.DataTypes.DATE,
    },
    operador: {
      type: Sequelize.DataTypes.STRING,
    },
    motivo: {
      type: Sequelize.DataTypes.STRING,
    },
    empresa: {
      type: Sequelize.DataTypes.STRING,
    },
    estado: {
      type: Sequelize.DataTypes.TINYINT,
    },
    respuesta: {
      type: Sequelize.DataTypes.STRING,
    },
    operador_atencion: {
      type: Sequelize.DataTypes.STRING,
    },
    detalle: {
      type: Sequelize.DataTypes.STRING,
    },
    empresa: {
      type: Sequelize.DataTypes.STRING,
    },


  },

  {
    timestamps: false,
    freezeTableName: true,
  },
  {
    tableName: "turno_bajas",
  }
);
