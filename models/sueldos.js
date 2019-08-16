/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('sueldos', {
    sld_id: {
      type: DataTypes.INTEGER(4),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    sld_perfil: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    sld_basico: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    sld_basicoant: {
      type: DataTypes.FLOAT,
      allowNull: true
    }
  }, {
    tableName: 'sueldos'
  });
};
