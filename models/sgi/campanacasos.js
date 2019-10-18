const Sequelize = require("sequelize");
const db = require("../../db/database");

module.exports = db.sgiSequelize.define(
  "campanacasos",
  {
    idcaso: {
      type: Sequelize.DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    idcampana: {
      type: Sequelize.DataTypes.INTEGER
    },
    fechacampana: {
      type: Sequelize.DataTypes.DATE
    },
    mes: {
      type: Sequelize.DataTypes.INTEGER   

    },
    ano: {
      type: Sequelize.DataTypes.INTEGER
    },
    sucursal: {
      type: Sequelize.DataTypes.STRING
    },
    contrato: {
      type: Sequelize.DataTypes.INTEGER
    },
    apellido: {
      type: Sequelize.DataTypes.STRING
    },
    nombre: {
      type: Sequelize.DataTypes.INTEGER
    },
    dni: {
      type: Sequelize.DataTypes.STRING
    },
    telefono: {
      type: Sequelize.DataTypes.STRING
    },
    movil: {
      type: Sequelize.DataTypes.INTEGER
    },
    calle: {
      type: Sequelize.DataTypes.STRING
    },
    nro_calle: {
      type: Sequelize.DataTypes.INTEGER
    },
    barrio: {
      type: Sequelize.DataTypes.STRING
    },
    localidad: {
      type: Sequelize.DataTypes.STRING
    },
    cuota: {
      type: Sequelize.DataTypes.INTEGER
    },
    cuotasadeudadas: {
      type: Sequelize.DataTypes.INTEGER
    },
    montoadeudado: {
      type: Sequelize.DataTypes.INTEGER
    },
    accion: {
      type: Sequelize.DataTypes.STRING
    },
    fechaaccion: {
      type: Sequelize.DataTypes.DATE
    },
    observaciones: {
      type: Sequelize.DataTypes.STRING
    },
    estadocaso: {
      type: Sequelize.DataTypes.TINYINT
    }
  },
  {
    timestamps: false,
    freezeTableName: true
  },
  {
    tableName: "campanacasos"
  }
);
