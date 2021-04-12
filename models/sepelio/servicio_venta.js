const Sequelize = require("sequelize");
const db = require("../../db/database");

module.exports = db.sepelioSequelize.define(
    "servicio_venta",
    {
        idventa: {
            type: Sequelize.DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        idservicio: {
            type: Sequelize.DataTypes.INTEGER,
        },
        monto: {
            type: Sequelize.DataTypes.FLOAT,
        },

        fecha_venta: {
            type: Sequelize.DataTypes.DATE,
        },

        operador: {
            type: Sequelize.DataTypes.STRING,
        },
        apellido_sol: {
            type: Sequelize.DataTypes.STRING,
        },
        nombre_sol: {
            type: Sequelize.DataTypes.STRING,
        },
        dni_sol: {
            type: Sequelize.DataTypes.INTEGER,
        },
        parentesco: {
            type: Sequelize.DataTypes.STRING,
        },
        operador_venta: {
            type: Sequelize.DataTypes.STRING,
        },
    },
    {
        timestamps: false,
        freezeTableName: true,
    },
    {
        tableName: "servicio_venta",
    }
);
