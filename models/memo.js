/* jshint indent: 2 */
const Sequelize = require('sequelize');
const db = require('../db/database.js');

module.exports = db.sequelize.define('memo', {
    ID: {
        type: Sequelize.DataTypes.INTEGER(11),
        allowNull: true,
        autoIncrement: true,
        primaryKey: true
    },

    CONTRATO: {
        type: Sequelize.DataTypes.INTEGER(11),
        allowNull: true
    },
    MEMO: {
        type: Sequelize.DataTypes.TEXT(300),
        allowNull: true
    }

},
    {
        timestamps: true,
        freezeTableName: true
    },
    {
        tableName: 'memo'
    });

