const Sequelize = require("sequelize");
const db = require("../../db/database");

module.exports = db.sgiSequelize.define(
  "campanas",
  {
    idcampana: {
      type: Sequelize.DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    descripcion: {
      type: Sequelize.DataTypes.STRING
    },
    operador: {
        type: Sequelize.DataTypes.STRING
      },
    fecha: {
      type: Sequelize.DataTypes.DATE
    },
    empresa: {
      type: Sequelize.DataTypes.STRING
    },
    sucursal: {
      type: Sequelize.DataTypes.STRING
    }
  },
  { 
    timestamps: false,
    freezeTableName: true
  },
  {
    tableName: "campanas"
  }
);
