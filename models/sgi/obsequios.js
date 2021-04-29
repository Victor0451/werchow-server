const Sequelize = require("sequelize");
const db = require("../../db/database");

module.exports = db.sgiSequelize.define(
    "obsequios",
    {
        idobsequio: {
            type: Sequelize.DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        fecha: {
            type: Sequelize.DataTypes.DATE,
        },
        producto: {
            type: Sequelize.DataTypes.STRING,
        },
        marca: {
            type: Sequelize.DataTypes.STRING,
        },
        categoria: {
            type: Sequelize.DataTypes.STRING,
        },
        precio: {
            type: Sequelize.DataTypes.FLOAT,
        },
        stock: {
            type: Sequelize.DataTypes.INTEGER,
        },
        operador: {
            type: Sequelize.DataTypes.STRING,
        },

        observacion: {
            type: Sequelize.DataTypes.STRING,
        },

        operador_rep: {
            type: Sequelize.DataTypes.STRING,
        },

        fecha_reposicion: {
            type: Sequelize.DataTypes.DATE,
        },

    },

    {
        timestamps: false,
        freezeTableName: true,
    },
    {
        tableName: "obsequios",
    }
);
