const Sequelize = require("sequelize");
const db = require("../../db/database");

module.exports = db.infoSequelize.define(
  "cprestamos",
  {
    sucursal: {
      type: Sequelize.DataTypes.STRING
    },
    total: {
      type: Sequelize.DataTypes.INTEGER
    },
  
    cobrado: {
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
    },
  },
  {
    timestamps: false,
    freezeTableName: true
  },
  {
    tableName: "cprestamos"
  }
);
