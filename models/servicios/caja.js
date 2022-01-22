const Sequelize = require("sequelize");
const db = require("../../db/database");

module.exports = db.serviciosSequelize.define(
    "CAJA",
    {

        iditem: {
            type: Sequelize.DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },

        SUCURSAL: {
            type: Sequelize.DataTypes.STRING,
        },

        PUESTO: {
            type: Sequelize.DataTypes.STRING,
        },

        CODIGO: {
            type: Sequelize.DataTypes.INTEGER,
        },

        MOVIM: {
            type: Sequelize.DataTypes.STRING,
        },

        CUENTA: {
            type: Sequelize.DataTypes.STRING,
        },

        IMPORTE: {
            type: Sequelize.DataTypes.FLOAT,
        },

        TIPO: {
            type: Sequelize.DataTypes.STRING,
        },

        SERIE: {
            type: Sequelize.DataTypes.INTEGER,
        },

        NUMERO: {
            type: Sequelize.DataTypes.INTEGER,
        },

        CUIT: {
            type: Sequelize.DataTypes.STRING,
        },

        DETALLE: {
            type: Sequelize.DataTypes.STRING,
        },

        DET_AUX: {
            type: Sequelize.DataTypes.STRING,
        },

        FECHA: {
            type: Sequelize.DataTypes.DATE,
        },

        FEC_COMP: {
            type: Sequelize.DataTypes.STRING,
        },

        HORA: {
            type: Sequelize.DataTypes.STRING,
        },

        ORIGEN: {
            type: Sequelize.DataTypes.STRING,
        },

        OPERADOR: {
            type: Sequelize.DataTypes.INTEGER,

        },

        ASIENTO: {
            type: Sequelize.DataTypes.INTEGER,
        },

        EXENTO: {
            type: Sequelize.DataTypes.STRING,
        },

        CANT_AFIL: {
            type: Sequelize.DataTypes.STRING,
        },

        CAE: {
            type: Sequelize.DataTypes.STRING,
        },
        VTO_CAE: {
            type: Sequelize.DataTypes.STRING,
        },
    },

    {
        timestamps: false,
        freezeTableName: true,
    },
    {
        tableName: "CAJA",
    }
);
