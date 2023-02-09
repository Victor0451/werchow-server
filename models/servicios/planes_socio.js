const Sequelize = require("sequelize");
const db = require("../../db/database");

module.exports = db.serviciosSequelize.define(
    "planes_socio",
    {
        idplansocio: {
            type: Sequelize.DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },

        contrato: {
            type: Sequelize.DataTypes.INTEGER,
        },


        dni: {
            type: Sequelize.DataTypes.STRING,
        },

        socio: {
            type: Sequelize.DataTypes.STRING,
        },

        fecha: {
            type: Sequelize.DataTypes.DATE,
        },


        total: {
            type: Sequelize.DataTypes.FLOAT,
        },

        pagado: {
            type: Sequelize.DataTypes.FLOAT,
        },

        saldo: {
            type: Sequelize.DataTypes.FLOAT,
        },

        estado: {
            type: Sequelize.DataTypes.TINYINT,
        },

        prestador: {
            type: Sequelize.DataTypes.STRING,
        },

        prestador_nombre: {
            type: Sequelize.DataTypes.STRING,
        },

        operador: {
            type: Sequelize.DataTypes.STRING,
        },

        sucursal: {
            type: Sequelize.DataTypes.STRING,
        },

    },

    {
        timestamps: false,
        freezeTableName: true,
    },
    {
        tableName: "planes_socio",
    }
);
