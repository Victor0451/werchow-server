const Sequelize = require("sequelize");
const db = require("../../db/database");

module.exports = db.sgiSequelize.define(
  "gestioncaso",
  {
    idgestion: {
      type: Sequelize.DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    idcaso: {
      type: Sequelize.DataTypes.INTEGER
    },
    contrato: {
      type: Sequelize.DataTypes.INTEGER
    },
    operador: {
      type: Sequelize.DataTypes.STRING
    },
    accion: {
      type: Sequelize.DataTypes.INTEGER
    },
    observacion: {
      type: Sequelize.DataTypes.STRING
    },
    fechaaccion: {
      type: Sequelize.DataTypes.DATE
    },
    nuevaaccion: {
      type: Sequelize.DataTypes.STRING
    },
    fechanuevaaccion: {
      type: Sequelize.DataTypes.DATE
    }
  },
  {
    timestamps: false,
    freezeTableName: true
  },
  {
    tableName: "gestioncaso"
  }
);
