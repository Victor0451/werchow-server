const Sequelize = require("sequelize");
const db = require("../../db/database");

module.exports = db.serviciosSequelize.define(
    "ENFERMER",
    {
        idenfermer: {
            type: Sequelize.DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },

        CONTRATO: {
            type: Sequelize.DataTypes.INTEGER,
        },

        FECHA: {
            type: Sequelize.DataTypes.DATE,
        },


        HORA: {
            type: Sequelize.DataTypes.TIME,
        },

        NRO_ORDEN: {
            type: Sequelize.DataTypes.STRING,
        },

        DESTINO: {
            type: Sequelize.DataTypes.STRING,
        },

        IMPORTE: {
            type: Sequelize.DataTypes.FLOAT,
        },

        ANULADO: {
            type: Sequelize.DataTypes.TINYINT,
        },

        PRACTICA: {
            type: Sequelize.DataTypes.INTEGER,
        },

        CANTIDAD: {
            type: Sequelize.DataTypes.INTEGER,
        },

        OPERADOR: {
            type: Sequelize.DataTypes.INTEGER,

        },

        OPE_ANU: {
            type: Sequelize.DataTypes.INTEGER,

        },

        NRO_DNI: {
            type: Sequelize.DataTypes.STRING,
        },

    },

    {
        timestamps: false,
        freezeTableName: true,
    },
    {
        tableName: "ENFERMER",
    }
);
