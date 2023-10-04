const Sequelize = require("sequelize");
const db = require("../../db/database");

module.exports = db.sgiSequelize.define(
  "mails_adjuntos",
  {
    idajunto: {
      type: Sequelize.DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    codmail: {
      type: Sequelize.DataTypes.STRING,
    },
    adjunto: {
      type: Sequelize.DataTypes.STRING,
    },
    tipo: {
      type: Sequelize.DataTypes.STRING,
    },
  },
  {
    timestamps: false,
    freezeTableName: true,
  },
  {
    tableName: "mails_adjuntos",
  }
);
