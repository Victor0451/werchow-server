const Sequelize = require("sequelize");
const db = require("../../db/database");

module.exports = db.sgiSequelize.define(
    "plan_detalle",
    {
        id_plandetalle: {
            type: Sequelize.DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        detalle: {
            type: Sequelize.DataTypes.STRING,
        },
        cuota: {
            type: Sequelize.DataTypes.INTEGER,
        },
        sub_ext: {
            type: Sequelize.DataTypes.TINYINT,
        },
        vigencia: {
            type: Sequelize.DataTypes.STRING,
        },

        id_plan: {
            type: Sequelize.DataTypes.INTEGER,
        },
    },

    {
        timestamps: false,
        freezeTableName: true,
    },
    {
        tableName: "plan_detalle",
    }
);
