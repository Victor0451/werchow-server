const Sequelize = require("sequelize");
const db = require("../../db/database");

module.exports = db.sepelioSequelize.define(
    "autos",
    {
        idauto: {
            type: Sequelize.DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        patente: {
            type: Sequelize.DataTypes.STRING,
        },
        auto: {
            type: Sequelize.DataTypes.STRING,
        },
        kilometros: {
            type: Sequelize.DataTypes.DOUBLE,
        },
        responsable: {
            type: Sequelize.DataTypes.STRING,
        },
        nro_poliza: {
            type: Sequelize.DataTypes.STRING,
        },
        empresa: {
            type: Sequelize.DataTypes.STRING,
        },

        vencimiento: {
            type: Sequelize.DataTypes.DATE,
        },
        motor: {
            type: Sequelize.DataTypes.STRING,
        },
        chasis: {
            type: Sequelize.DataTypes.STRING,
        },
        modelo: {
            type: Sequelize.DataTypes.INTEGER,
        },
        cobertura: {
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
        tableName: "autos",
    }
);
