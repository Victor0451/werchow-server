/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('localidad', {
    local_id: {
      type: DataTypes.INTEGER(4),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    local_descrip: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    tableName: 'localidad'
  });
};
