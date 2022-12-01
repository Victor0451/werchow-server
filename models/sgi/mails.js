const Sequelize = require("sequelize");
const db = require("../../db/database");

module.exports = db.sgiSequelize.define(
  "mails",
  {
    idmail: {
      type: Sequelize.DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    fecha: {
      type: Sequelize.DataTypes.DATE,
    },
    envia: {
      type: Sequelize.DataTypes.STRING,
    },
    recibe: {
      type: Sequelize.DataTypes.STRING,
    },
    descrip: {
      type: Sequelize.DataTypes.STRING,
    },
    codmail: {
      type: Sequelize.DataTypes.STRING,
    },
    asunto: {
      type: Sequelize.DataTypes.STRING,
    },
    leido: {
      type: Sequelize.DataTypes.TINYINT,
    },
    fecha_leido: {
      type: Sequelize.DataTypes.DATE,
    },
    url_caja: {
      type: Sequelize.DataTypes.STRING,
    },
  },
  {
    timestamps: false,
    freezeTableName: true,
  },
  {
    tableName: "mails",
  }
);
