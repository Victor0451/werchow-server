const Sequelize = require("sequelize");
const db = require("../../db/database");

module.exports = db.sgiSequelize.define(
  "eventos",
  {
    idevents: {
      type: Sequelize.DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: Sequelize.DataTypes.STRING,
    },
    allDay: {
      type: Sequelize.DataTypes.TINYINT,
    },
    start: {
      type: Sequelize.DataTypes.DATE,
    },
    end: {
      type: Sequelize.DataTypes.DATE,
    },
  },

  {
    timestamps: false,
    freezeTableName: true,
  },
  {
    tableName: "eventos",
  }
);
