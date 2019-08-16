/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('producto', {
    CODIGO: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    DESCRIP: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    ACTIVO: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    COD_PERS: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    COD_SUP: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    SUCURSAL: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    ALTA: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    BAJA: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    NRO_DOC: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    FEC_NAC: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    PLAN: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    }
  }, {
    tableName: 'producto'
  });
};
