const Sequelize = require("sequelize");
const db = require("../../db/database");

module.exports = db.serviciosSequelize.define(
    "PRACTICA",
    {
        idpractica: {
            type: Sequelize.DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },

        SUC_PRA: {
            type: Sequelize.DataTypes.STRING,
        },

        CONTRATO: {
            type: Sequelize.DataTypes.INTEGER,
        },

        NRO_DNI: {
            type: Sequelize.DataTypes.STRING,
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

        PRAC_REA: {
            type: Sequelize.DataTypes.STRING,
        },


        CANT_PRA: {
            type: Sequelize.DataTypes.INTEGER,
        },


        IMPORTE: {
            type: Sequelize.DataTypes.FLOAT,
        },

        ANULADO: {
            type: Sequelize.DataTypes.TINYINT,
        },


        OPERADOR: {
            type: Sequelize.DataTypes.STRING,

        },

        OPE_ANU: {
            type: Sequelize.DataTypes.INTEGER,

        },

        COD_PRAC: {
            type: Sequelize.DataTypes.STRING,
        },

        DESCRIP: {
            type: Sequelize.DataTypes.STRING,
        },


    },

    {
        timestamps: false,
        freezeTableName: true,
    },
    {
        tableName: "PRACTICA",
    }
);
