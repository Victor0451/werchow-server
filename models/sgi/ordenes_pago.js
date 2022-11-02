const Sequelize = require("sequelize");
const db = require("../../db/database");

module.exports = db.sgiSequelize.define(
    "ordenes_pago",
    {
        idorden: {
            type: Sequelize.DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },

        fecha: {
            type: Sequelize.DataTypes.DATE,
        },

        proveedor: {
            type: Sequelize.DataTypes.STRING,
        },

        nombre: {
            type: Sequelize.DataTypes.STRING,
        },

        cuit_cuil: {
            type: Sequelize.DataTypes.INTEGER,
        },

        total: {
            type: Sequelize.DataTypes.FLOAT,
        },

        operador_carga: {
            type: Sequelize.DataTypes.STRING,
        },

        autorizado: {
            type: Sequelize.DataTypes.TINYINT,
        },

        operador_autorizacion: {
            type: Sequelize.DataTypes.STRING,
        },

        fecha_autorizacion: {
            type: Sequelize.DataTypes.DATE,
        },

        norden: {
            type: Sequelize.DataTypes.STRING,
        },

        observacion: {
            type: Sequelize.DataTypes.STRING,
        },

        tipo_orden: {
            type: Sequelize.DataTypes.STRING,
        },

        nfactura: {
            type: Sequelize.DataTypes.STRING,
        },

        tipo_factura: {
            type: Sequelize.DataTypes.STRING,
        },

        fecha_pago: {
            type: Sequelize.DataTypes.DATE,
        },

    },

    {
        timestamps: false,
        freezeTableName: true,
    },
    {
        tableName: "ordenes_pago",
    }
);
