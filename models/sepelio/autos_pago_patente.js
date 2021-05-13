const Sequelize = require("sequelize");
const db = require("../../db/database");

module.exports = db.sepelioSequelize.define(
    "autos_pago_patente",
    {
        idpago: {
            type: Sequelize.DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        patente: {
            type: Sequelize.DataTypes.STRING,
        },
        mes: {
            type: Sequelize.DataTypes.INTEGER,
        },
        ano: {
            type: Sequelize.DataTypes.INTEGER,
        },
        importe: {
            type: Sequelize.DataTypes.DOUBLE,
        },
        cod_pago: {
            type: Sequelize.DataTypes.INTEGER,
        },
        idauto: {
            type: Sequelize.DataTypes.INTEGER,
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
        tableName: "autos_pago_patente",
    }
);
