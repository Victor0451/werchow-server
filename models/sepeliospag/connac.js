const Sequelize = require("sequelize");
const db = require("../../db/database");

module.exports = db.clubWerchowSequelize.define(
  "connac",
  {
    idconvenio: {
      type: Sequelize.DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    convenio: {
      type: Sequelize.DataTypes.STRING,
    },

    estado: {
      type: Sequelize.DataTypes.STRING,
    },

    pagina: {
      type: Sequelize.DataTypes.DATE,
    },
  },
  {
    timestamps: false,
    freezeTableName: true,
  },
  {
    tableName: "connac",
  }
);
