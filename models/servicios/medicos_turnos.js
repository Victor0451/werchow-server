const Sequelize = require("sequelize");
const db = require("../../db/database");

module.exports = db.serviciosSequelize.define(
    "MEDICOS_TURNOS",
    {
        idturno: {
            type: Sequelize.DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },

        turno: {
            type: Sequelize.DataTypes.STRING,
        },

        fecha: {
            type: Sequelize.DataTypes.DATE,
        },

        hora: {
            type: Sequelize.DataTypes.TIME,
        },

        doctor: {
            type: Sequelize.DataTypes.STRING,
        },

        paciente: {
            type: Sequelize.DataTypes.STRING,
        },

        obra_soc: {
            type: Sequelize.DataTypes.STRING,
        },

        telefono: {
            type: Sequelize.DataTypes.BIGINT,
        },

        estado: {
            type: Sequelize.DataTypes.TINYINT,
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
        tableName: "MEDICOS_TURNOS",
    }
);
