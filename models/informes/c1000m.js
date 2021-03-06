const Sequelize = require("sequelize");
const db = require("../../db/database");

module.exports = db.infoSequelize.define(
  "c1000m",
  {
    zona: {
      type: Sequelize.DataTypes.INTEGER
    },
    total: {
      type: Sequelize.DataTypes.INTEGER
    },
    fichas: {
      type: Sequelize.DataTypes.INTEGER
    },
    cobrado: {
      type: Sequelize.DataTypes.INTEGER
    },
    fichascob: {
      type: Sequelize.DataTypes.INTEGER
    },
    adelantado: {
      type: Sequelize.DataTypes.INTEGER
    },
    mes: {
      type: Sequelize.DataTypes.INTEGER
    },
    ano: {
      type: Sequelize.DataTypes.INTEGER
    },
    descr: {
      type: Sequelize.DataTypes.STRING
    }
  },
  {
    timestamps: false,
    freezeTableName: true
  },
  {
    tableName: "c1000m"
  }
);
