/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('porcentaje_liq', {
    porcliq_id: {
      type: DataTypes.INTEGER(4),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    porcliq_nombre: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    porcliq_descrip: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    porcliq_cuotas: {
      type: DataTypes.INTEGER(3),
      allowNull: true
    },
    porcliq_porcentaje: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    }
  }, {
    tableName: 'porcentaje_liq'
  });
};
