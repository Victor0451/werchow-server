/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('planificacion', {
    pln_ide: {
      type: DataTypes.INTEGER(5),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    pln_usu: {
      type: DataTypes.INTEGER(5),
      allowNull: true
    },
    pln_dia: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    pln_obs: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    tableName: 'planificacion'
  });
};
