const Sequelize = require("sequelize");
const db = require("../../db/database");

module.exports = db.sepelioSequelize.define(
  "servicio_gastos",
  {
    idgastos: {
      type: Sequelize.DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    idservicio: {
      type: Sequelize.DataTypes.INTEGER,
    },
    inicio: {
      type: Sequelize.DataTypes.DATE,
    },

    fin: {
      type: Sequelize.DataTypes.DATE,
    },
    tipo_gasto: {
      type: Sequelize.DataTypes.STRING,
    },
    horas: {
      type: Sequelize.DataTypes.TIME,
    },
    operador: {
      type: Sequelize.DataTypes.STRING,
    },
    observaciones: {
      type: Sequelize.DataTypes.STRING,
    },
    feriado: {
      type: Sequelize.DataTypes.TINYINT,
    },
    
    liquidado: {
      type: Sequelize.DataTypes.TINYINT,
    },

    operadorliq: {
      type: Sequelize.DataTypes.STRING,
    },

    fecha_liquidacion: {
      type: Sequelize.DataTypes.DATE,
    },

    aprobado: {
      type: Sequelize.DataTypes.TINYINT,
    },

    operadorap: {
      type: Sequelize.DataTypes.STRING,
    },

    fecha_aprobacion: {
      type: Sequelize.DataTypes.DATE,
    },

  },
  {
    timestamps: false,
    freezeTableName: true,
  },
  {
    tableName: "servicio_gastos",
  }
);
