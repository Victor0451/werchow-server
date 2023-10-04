const Sequelize = require("sequelize");
const db = require("../../db/database");

module.exports = db.serviciosSequelize.define(
    "nosocios",
    {
        idnosocio: {
            type: Sequelize.DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },

        nosocio: {
            type: Sequelize.DataTypes.STRING,
        },

        dni: {
            type: Sequelize.DataTypes.BIGINT,
        },


        telefono: {
            type: Sequelize.DataTypes.BIGINT,
        },

        mail: {
            type: Sequelize.DataTypes.STRING,
        },


        obra_soc: {
            type: Sequelize.DataTypes.STRING,
        },

        otra_os: {
            type: Sequelize.DataTypes.STRING,
        },

        fecha: {
            type: Sequelize.DataTypes.DATE,
        },

        codigo: {
            type: Sequelize.DataTypes.INTEGER,
        },

        gremio: {
            type: Sequelize.DataTypes.STRING,
        },

        estado: {
            type: Sequelize.DataTypes.TINYINT,
        },

    },

    {
        timestamps: false,
        freezeTableName: true,
    },
    {
        tableName: "nosocios",
    }
);
