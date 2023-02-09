const Sequelize = require("sequelize");
const db = require("../../db/database");

module.exports = db.serviciosSequelize.define(
    "FARMACIA",
    {
        idfarmacia: {
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

        NRO_DOC: {
            type: Sequelize.DataTypes.STRING,
        },

        NRO_ORDEN: {
            type: Sequelize.DataTypes.STRING,
        },

        DESTINO: {
            type: Sequelize.DataTypes.STRING,
        },

        MODO: {
            type: Sequelize.DataTypes.STRING,
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

        FEC_USO: {
            type: Sequelize.DataTypes.DATE,
        },

        CAN_MEDI: {
            type: Sequelize.DataTypes.INTEGER,
        },

        MATRICULA: {
            type: Sequelize.DataTypes.INTEGER,
        },

        HABILITA: {
            type: Sequelize.DataTypes.INTEGER,
        },

        SUC: {
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
