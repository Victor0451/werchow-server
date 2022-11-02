const Sequelize = require("sequelize");
const db = require("../../db/database");

module.exports = db.sgiSequelize.define(
    "tab_ef",
    {
        id: {
            type: Sequelize.DataTypes.STRING,
            primaryKey: true
        },
        title: {
            type: Sequelize.DataTypes.STRING,
        },
        allDay: {
            type: Sequelize.DataTypes.TINYINT,
        },
        start: {
            type: Sequelize.DataTypes.DATE,
        },
        end: {
            type: Sequelize.DataTypes.DATE,
        },
        holiday: {
            type: Sequelize.DataTypes.INTEGER,
        },
        detail: {
            type: Sequelize.DataTypes.STRING,
        },

        user: {
            type: Sequelize.DataTypes.STRING,
        },
    },

    {
        timestamps: false,
        freezeTableName: true,
    },
    {
        tableName: "tab_ef",
    }
);
