const Sequelize = require("sequelize");
const db = require("../../db/database");

module.exports = db.infoSequelize.define(
  "m1000",
  {
    id_mora: {
      type: Sequelize.DataTypes.INTEGER,
      primaryKey: true
    },
    tipo: {
      type: Sequelize.DataTypes.STRING
    },
    mora: {
      type: Sequelize.DataTypes.INTEGER
    },
    fichas: {
      type: Sequelize.DataTypes.INTEGER
    },
    morarec: {
      type: Sequelize.DataTypes.INTEGER
    },
    fichasrec: {
      type: Sequelize.DataTypes.INTEGER
    },
    mes: {
      type: Sequelize.DataTypes.INTEGER
    },
    ano: {
      type: Sequelize.DataTypes.INTEGER
    }
  },
  {
    timestamps: false,
    freezeTableName: true
  },
  {
    tableName: "m1000"
  }
);
