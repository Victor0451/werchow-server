/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cuota_prestamo', {
    cuoptm_id: {
      type: DataTypes.INTEGER(4),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    cuoptm_capital: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    cuoptm_cantidad: {
      type: DataTypes.INTEGER(3),
      allowNull: true
    },
    cuoptm_cuota: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    cuoptm_cuotaant: {
      type: DataTypes.FLOAT,
      allowNull: true
    }
  }, {
    tableName: 'cuota_prestamo'
  });
};
