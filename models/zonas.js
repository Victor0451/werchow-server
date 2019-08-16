/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('zonas', {
    CODIGO: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    DESCRIP: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    COBRADOR: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    COMISION: {
      type: "DOUBLE",
      allowNull: true
    },
    SUCURSAL: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    RECIBOS: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    IMPORTE: {
      type: "DOUBLE",
      allowNull: true
    },
    SERIE: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    ORDEN: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    LIN_ALTA: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    LIN_BAJA: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    TOTALIZA: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    PAGINA: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    TITULO1: {
      type: DataTypes.STRING(80),
      allowNull: true
    },
    TITULO2: {
      type: DataTypes.STRING(80),
      allowNull: true
    }
  }, {
    tableName: 'zonas'
  });
};
