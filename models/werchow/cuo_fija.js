/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return werchowSequelize.define('cuo_fija', {
    CONTRATO: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    IMPORTE: {
      type: "DOUBLE",
      allowNull: true
    },
    CUO_ANT: {
      type: "DOUBLE",
      allowNull: true
    },
    DESDE: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    VENCIM: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    ACTUALIZA: {
      type: DataTypes.STRING(13),
      allowNull: true
    },
    OPERADOR: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    }
  }, {
    tableName: 'cuo_fija'
  });
};
