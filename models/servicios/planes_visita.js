const Sequelize = require("sequelize");
const db = require("../../db/database");

module.exports = db.serviciosSequelize.define(
    "planes_visitas",
    {
        idvisita: {
            type: Sequelize.DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },

        idplan: {
            type: Sequelize.DataTypes.INTEGER,
        },


        nvisita: {
            type: Sequelize.DataTypes.INTEGER,
        },

        pago: {
            type: Sequelize.DataTypes.FLOAT,
        },

        fecha: {
            type: Sequelize.DataTypes.DATE,
        },

        pagado: {
            type: Sequelize.DataTypes.INTEGER,
        },

        operador: {
            type: Sequelize.DataTypes.STRING,
        },

        plan: {
            type: Sequelize.DataTypes.STRING,
        },
    },

    {
        timestamps: false,
        freezeTableName: true,
    },
    {
        tableName: "planes_visitas",
    }
);
