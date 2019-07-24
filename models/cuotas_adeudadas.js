/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cuotas_adeudadas', {
    id_deuda: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      primaryKey: true
    },
    contrato: {
      type: DataTypes.INTEGER(10),
      allowNull: false
    },
    monto_cuota: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    cuotas_adeudadas: {
      type: DataTypes.INTEGER(10),
      allowNull: true
    }
  }, {
    tableName: 'cuotas_adeudadas'
  });
};
