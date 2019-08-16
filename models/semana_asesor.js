/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('semana_asesor', {
    semase_id: {
      type: DataTypes.INTEGER(6),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    semase_fecha: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    semase_asesor: {
      type: DataTypes.INTEGER(6),
      allowNull: true
    },
    semase_mes: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    semase_semana: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    semase_anio: {
      type: DataTypes.INTEGER(6),
      allowNull: true
    },
    semase_ventas: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    semase_codcar: {
      type: DataTypes.INTEGER(6),
      allowNull: true
    }
  }, {
    tableName: 'semana_asesor'
  });
};
