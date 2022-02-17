const Sequelize = require("sequelize");
const db = require("../../db/database");

module.exports = db.sepelioSequelize.define(
  "servicios",
  {
    idservicio: {
      type: Sequelize.DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    empresa: {
      type: Sequelize.DataTypes.STRING,
    },
    dni: {
      type: Sequelize.DataTypes.INTEGER,
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
    fecha_fallecimiento: {
      type: Sequelize.DataTypes.DATE,
    },
    lugar_fallecimiento: {
      type: Sequelize.DataTypes.STRING,
    },
    tipo_servicio: {
      type: Sequelize.DataTypes.STRING,
    },
    casa_mortuaria: {
      type: Sequelize.DataTypes.STRING,
    },
    fecha_inhumacion: {
      type: Sequelize.DataTypes.DATE,
    },
    hora_inhumacion: {
      type: Sequelize.DataTypes.STRING,
    },
    cementerio: {
      type: Sequelize.DataTypes.STRING,
    },
    estado: {
      type: Sequelize.DataTypes.TINYINT,
    },
    contrato: {
      type: Sequelize.DataTypes.INTEGER,
    },
    fecha_recepcion: {
      type: Sequelize.DataTypes.DATE,
    },
    motivo: {
      type: Sequelize.DataTypes.STRING,
    },
    retiro: {
      type: Sequelize.DataTypes.STRING,
    },
    solicitado: {
      type: Sequelize.DataTypes.STRING,
    },
    parentesco: {
      type: Sequelize.DataTypes.STRING,
    },
    altura: {
      type: Sequelize.DataTypes.INTEGER,
    },
    peso: {
      type: Sequelize.DataTypes.FLOAT,
    },
    idataud: {
      type: Sequelize.DataTypes.INTEGER,
    },
    operador: {
      type: Sequelize.DataTypes.STRING,
    },
    sucursal: {
      type: Sequelize.DataTypes.STRING,
    },
    dni_nuevotitular: {
      type: Sequelize.DataTypes.INTEGER,
    },
    dni_solicitante: {
      type: Sequelize.DataTypes.INTEGER,
    },
    cremacion: {
      type: Sequelize.DataTypes.TINYINT,
    },
    idataud: {
      type: Sequelize.DataTypes.INTEGER,
    },
    idparcela: {
      type: Sequelize.DataTypes.INTEGER,
    },
    liquidado: {
      type: Sequelize.DataTypes.TINYINT,
    },
    fecha_liquidacion: {
      type: Sequelize.DataTypes.DATE,
    },
    gastos_cargados: {
      type: Sequelize.DataTypes.INTEGER,
    },
    obra_soc: {
      type: Sequelize.DataTypes.STRING,
    },
    importe: {
      type: Sequelize.DataTypes.FLOAT,
    }
  },
  {
    timestamps: false,
    freezeTableName: true,
  },
  {
    tableName: "servicios",
  }
);
