/* jshint indent: 2 */
const Sequelize = require('sequelize');
const db = require('../db/database.js');

module.exports = db.sequelize.define('movimiento-fichas', {
    ID_MOV: {
        type: Sequelize.DataTypes.INTEGER(11),
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
    SUCURSAL: {
        type: Sequelize.DataTypes.STRING(1),
        allowNull: true
    },
    CONTRATO: {
        type: Sequelize.DataTypes.INTEGER(11),
        allowNull: false,
        primaryKey: true
    },
    NRO_DOC: {
        type: Sequelize.DataTypes.INTEGER(11),
        allowNull: true
    },
    APELLIDOS: {
        type: Sequelize.DataTypes.STRING(15),
        allowNull: true
    },
    NOMBRES: {
        type: Sequelize.DataTypes.STRING(20),
        allowNull: true
    },
    NACIMIENTO: {
        type: Sequelize.DataTypes.DATEONLY,
        allowNull: true
    },
    CALLE: {
        type: Sequelize.DataTypes.STRING(30),
        allowNull: true
    },
    LOCALIDAD: {
        type: Sequelize.DataTypes.STRING(15),
        allowNull: true
    },
    NRO_CALLE: {
        type: Sequelize.DataTypes.INTEGER(11),
        allowNull: true
    },
    BARRIO: {
        type: Sequelize.DataTypes.STRING(15),
        allowNull: true
    },

    ALTA: {
        type: Sequelize.DataTypes.DATEONLY,
        allowNull: true
    },

    BAJA: {
        type: Sequelize.DataTypes.DATEONLY,
        allowNull: true
    },

    ESTADO: {
        type: Sequelize.DataTypes.TINYINT,
        allowNull: true
    },

    DESCRIPCION: {
        type: Sequelize.DataTypes.STRING(100),
        allowNull: true
    },

    OPERADOR: {
        type: Sequelize.DataTypes.INTEGER(11),
        allowNull: true
    },
    ACTUALIZA: {
        type: Sequelize.DataTypes.STRING(13),
        allowNull: true
    },
    OBRA_SOC: {
        type: Sequelize.DataTypes.INTEGER(11),
        allowNull: true
    },
    PRODUCTOR: {
        type: Sequelize.DataTypes.INTEGER(11),
        allowNull: true
    }
},
    {
        timestamps: false,
        freezeTableName: true
    },

    {
        tableName: 'movimiento-fichas'
    });

