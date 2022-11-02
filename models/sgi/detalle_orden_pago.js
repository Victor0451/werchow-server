const Sequelize = require("sequelize");
const db = require("../../db/database");

module.exports = db.sgiSequelize.define(
    "detalle_orden_pago",
    {
        iddetallepago: {
            type: Sequelize.DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },

        norden: {
            type: Sequelize.DataTypes.STRING,
        },

        nconsulta: {
            type: Sequelize.DataTypes.STRING,
        },


        sucursal: {
            type: Sequelize.DataTypes.STRING,
        },

        prestador: {
            type: Sequelize.DataTypes.STRING,
        },

        importe: {
            type: Sequelize.DataTypes.FLOAT,
        },

        fecha: {
            type: Sequelize.DataTypes.DATE,
        },

        operador_carga: {
            type: Sequelize.DataTypes.STRING,
        },



    },

    {
        timestamps: false,
        freezeTableName: true,
    },
    {
        tableName: "detalle_orden_pago",
    }
);
