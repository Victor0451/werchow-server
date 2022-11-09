const Sequelize = require("sequelize");
const db = require("../../db/database");

module.exports = db.serviciosSequelize.define(
    "USOS",
    {
        iduso: {
            type: Sequelize.DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },

        SUC: {
            type: Sequelize.DataTypes.STRING,
        },

        ORDEN: {
            type: Sequelize.DataTypes.INTEGER,
        },

        CONTRATO: {
            type: Sequelize.DataTypes.INTEGER,
        },

        NRO_ADH: {
            type: Sequelize.DataTypes.INTEGER,
        },

        NRO_DOC: {
            type: Sequelize.DataTypes.INTEGER,
        },

        PLAN: {
            type: Sequelize.DataTypes.STRING,
        },

        EDAD: {
            type: Sequelize.DataTypes.INTEGER,
        },

        SEXO: {
            type: Sequelize.DataTypes.STRING,
        },

        OBRA_SOC: {
            type: Sequelize.DataTypes.INTEGER,
        },

        FECHA: {
            type: Sequelize.DataTypes.DATE,
        },

        FEC_CAJA: {
            type: Sequelize.DataTypes.DATE,
        },

        HORA: {
            type: Sequelize.DataTypes.TIME,
        },

        SERVICIO: {
            type: Sequelize.DataTypes.STRING,
        },

        IMPORTE: {
            type: Sequelize.DataTypes.FLOAT,
        },

        PUESTO: {
            type: Sequelize.DataTypes.INTEGER,
        },

        PRESTADO: {
            type: Sequelize.DataTypes.STRING,
        },

        OPERADOR: {
            type: Sequelize.DataTypes.INTEGER,

        },

        EMPRESA: {
            type: Sequelize.DataTypes.STRING,
        },

        RENDIDO: {
            type: Sequelize.DataTypes.TINYINT,
        },

        IDCAJA: {
            type: Sequelize.DataTypes.INTEGER,
        },

        FECHA_CIERRE: {
            type: Sequelize.DataTypes.DATE,
        },

        NUSOS: {
            type: Sequelize.DataTypes.INTEGER,
        },
    },

    {
        timestamps: false,
        freezeTableName: true,
    },
    {
        tableName: "USOS",
    }
);
