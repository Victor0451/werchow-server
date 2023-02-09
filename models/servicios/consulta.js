const Sequelize = require("sequelize");
const db = require("../../db/database");

module.exports = db.serviciosSequelize.define(
    "CONSULTA",
    {
        idconsulta: {
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
            type: Sequelize.DataTypes.INTEGER,
        },


        COD_PRES: {
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

        DIAGNOSTIC: {
            type: Sequelize.DataTypes.STRING,
        },

        ATENCION: {
            type: Sequelize.DataTypes.STRING,
        },

        NRO_DNI: {
            type: Sequelize.DataTypes.STRING,
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
        tableName: "CONSULTA",
    }
);
