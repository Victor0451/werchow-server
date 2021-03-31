const Sequelize = require("sequelize");
const db = require("../../db/database");

module.exports = db.infoSequelize.define(
  "moraw",
  {
    contrato: {
      type: Sequelize.DataTypes.INTEGER,
      primaryKey: true     
    },
    sucursal: {
      type: Sequelize.DataTypes.STRING
    },
    zona: {
      type: Sequelize.DataTypes.INTEGER
    },  
    grupo: {
      type: Sequelize.DataTypes.INTEGER
    },
   
    nro_doc: {
      type: Sequelize.DataTypes.INTEGER
    },
    apellidos: {
      type: Sequelize.DataTypes.STRING
    },
    nombres: {
      type: Sequelize.DataTypes.STRING
    },
    calle: {
      type: Sequelize.DataTypes.STRING
    },
    nro_doc: {
      type: Sequelize.DataTypes.INTEGER
    },
    barrio: {
      type: Sequelize.DataTypes.STRING
    },
    localidad: {
      type: Sequelize.DataTypes.STRING
    },
    telefono: {
      type: Sequelize.DataTypes.INTEGER
    },
    movil: {
      type: Sequelize.DataTypes.INTEGER
    },
    cuota: {
      type: Sequelize.DataTypes.INTEGER
    },
    
    pago: {
      type: Sequelize.DataTypes.TINYINT
    },
    mes: {
      type: Sequelize.DataTypes.INTEGER
    },
    ano: {
      type: Sequelize.DataTypes.INTEGER
    }
   
  },
  {
    timestamps: false,
    freezeTableName: true
  },
  {
    tableName: "moraw"
  }
);
