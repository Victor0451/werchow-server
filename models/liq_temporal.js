/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('liq_temporal', {
    liqtmp_id: {
      type: DataTypes.INTEGER(4),
      allowNull: false,
      primaryKey: true
    },
    liqtmp_recup: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    liqtmp_mes: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    liqtmp_totcomi: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    liqtmp_bono: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    liqtmp_totcobrado: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    liq_tmp_basico: {
      type: DataTypes.FLOAT,
      allowNull: true
    }
  }, {
    tableName: 'liq_temporal'
  });
};
