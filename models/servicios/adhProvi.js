const Sequelize = require("sequelize");
const db = require("../../db/database");

module.exports = db.serviciosSequelize.define(
    "adherent_provi",
    {
        idadherent: {
            type: Sequelize.DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },

        CONTRATO: {
            type: Sequelize.DataTypes.INTEGER,
        },

        NRO_DOC: {
            type: Sequelize.DataTypes.INTEGER,
        },


        PLAN: {
            type: Sequelize.DataTypes.STRING,
        },

        NACIMIENTO: {
            type: Sequelize.DataTypes.DATE,
        },


        APELLIDOS: {
            type: Sequelize.DataTypes.STRING,
        },

        NOMBRES: {
            type: Sequelize.DataTypes.STRING,
        },

        EMPRESA: {
            type: Sequelize.DataTypes.STRING,
        },

        ESTADO: {
            type: Sequelize.DataTypes.TINYINT,
        },

    },

    {
        timestamps: false,
        freezeTableName: true,
    },
    {
        tableName: "adherent_provi",
    }
);
