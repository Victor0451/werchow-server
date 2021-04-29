const Sequelize = require("sequelize");
const db = require("../../db/database");

module.exports = db.sepelioSequelize.define(
    "gasto_luto",
    {
        idgastoluto: {
            type: Sequelize.DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        idservicio: {
            type: Sequelize.DataTypes.INTEGER,
        },
        contrato: {
            type: Sequelize.DataTypes.INTEGER,
        },
        dni_extinto: {
            type: Sequelize.DataTypes.INTEGER,
        },
        extinto: {
            type: Sequelize.DataTypes.STRING,
        },
        gasto_luto: {
            type: Sequelize.DataTypes.INTEGER,
        },
        idataud: {
            type: Sequelize.DataTypes.INTEGER,
        },
        apellido_ben: {
            type: Sequelize.DataTypes.STRING,
        },
        nombre_ben: {
            type: Sequelize.DataTypes.STRING,
        },
        telefono_ben: {
            type: Sequelize.DataTypes.INTEGER,
        },
        fecha: {
            type: Sequelize.DataTypes.DATE,
        },
        operador: {
            type: Sequelize.DataTypes.STRING,
        },
        parentezco: {
            type: Sequelize.DataTypes.STRING,
        }

    },
    {
        timestamps: false,
        freezeTableName: true,
    },
    {
        tableName: "gasto_luto",
    }
);
