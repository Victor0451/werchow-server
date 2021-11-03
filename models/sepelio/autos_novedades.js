const Sequelize = require("sequelize");
const db = require("../../db/database");

module.exports = db.sepelioSequelize.define(
    "autos_novedades",
    {
        idnovedad: {
            type: Sequelize.DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        patente: {
            type: Sequelize.DataTypes.STRING,
        },

        fecha: {
            type: Sequelize.DataTypes.DATE,
        },

        novedad: {
            type: Sequelize.DataTypes.STRING,
        },
        operador: {
            type: Sequelize.DataTypes.STRING,
        },
    },
    {
        timestamps: false,
        freezeTableName: true,
    },
    {
        tableName: "autos_novedades",
    }
);
