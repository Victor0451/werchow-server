const Sequelize = require("sequelize");
const db = require("../db/database.js");

module.exports = db.sequelize.define(
  "operador",
  {
    id: {
      type: Sequelize.DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    nombre: {
      type: Sequelize.DataTypes.STRING
    },
    apellido: {
      type: Sequelize.DataTypes.STRING
    },
    usuario: {
      type: Sequelize.DataTypes.STRING
    },
    contrasena: {
      type: Sequelize.DataTypes.STRING
    },
    perfil: {
      type: Sequelize.DataTypes.STRING
    },
    estado: {
      type: Sequelize.DataTypes.STRING
    }
  },
  {
    timestamps: true,
    freezeTableName: true
  },
  {
    tableName: "adherent"
  }
);
