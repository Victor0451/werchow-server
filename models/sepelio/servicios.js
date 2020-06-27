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
    calle: {
      type: Sequelize.DataTypes.STRING,
    },
    numero: {
      type: Sequelize.DataTypes.INTEGER,
    },
    barrio: {
      type: Sequelize.DataTypes.STRING,
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
    retirocuerpo: {
      type: Sequelize.DataTypes.TINYINT,
    },
    tiporetirocuerpo: {
      type: Sequelize.DataTypes.STRING,
    },
    traslado: {
      type: Sequelize.DataTypes.TINYINT,
    },
    tipotraslado: {
      type: Sequelize.DataTypes.STRING,
    },
    capar: {
      type: Sequelize.DataTypes.TINYINT,
    },
    placa: {
      type: Sequelize.DataTypes.TINYINT,
    },
    tramites: {
      type: Sequelize.DataTypes.TINYINT,
    },
    tipotramites: {
      type: Sequelize.DataTypes.STRING,
    },
    aviso: {
      type: Sequelize.DataTypes.TINYINT,
    },
    tipoaviso: {
      type: Sequelize.DataTypes.STRING,
    },
    carroza: {
      type: Sequelize.DataTypes.TINYINT,
    },
    tipocarroza: {
      type: Sequelize.DataTypes.STRING,
    },
    portacorona: {
      type: Sequelize.DataTypes.TINYINT,
    },
    tipococheporta: {
      type: Sequelize.DataTypes.STRING,
    },
    autoduelo: {
      type: Sequelize.DataTypes.TINYINT,
    },
    tipoautoduel: {
      type: Sequelize.DataTypes.STRING,
    },
    salavel: {
      type: Sequelize.DataTypes.TINYINT,
    },
    tiposalavel: {
      type: Sequelize.DataTypes.STRING,
    },
    ataud: {
      type: Sequelize.DataTypes.STRING,
    },
    caracteristicas: {
      type: Sequelize.DataTypes.STRING,
    },
    observacion: {
      type: Sequelize.DataTypes.STRING,
    },
    estado: {
      type: Sequelize.DataTypes.TINYINT,
    },
    precio: {
      type: Sequelize.DataTypes.INTEGER,
    },
    descuento: {
      type: Sequelize.DataTypes.INTEGER,
    },
    cremacion: {
      type: Sequelize.DataTypes.TINYINT,
    },
    caracteristicas: {
      type: Sequelize.DataTypes.STRING,
    },
    uso: {
      type: Sequelize.DataTypes.STRING,
    },
  },
  {
    timestamps: false,
    freezeTableName: true,
  },
  {
    tableName: "servicios",
  }
);
