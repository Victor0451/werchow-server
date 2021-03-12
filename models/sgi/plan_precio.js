const Sequelize = require("sequelize");
const db = require("../../db/database");

module.exports = db.sgiSequelize.define(
    "plan_precio",
    {
        id_plan: {
            type: Sequelize.DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        plan: {
            type: Sequelize.DataTypes.STRING,
        },
        tipo_plan: {
            type: Sequelize.DataTypes.STRING,
        },
        codigo: {
            type: Sequelize.DataTypes.STRING,
        },
    },

    {
        timestamps: false,
        freezeTableName: true,
    },
    {
        tableName: "plan_precio",
    }
);
