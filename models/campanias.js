/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('campanias', {
    cpn_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    cpn_nombre: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    cpn_fechaalta: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    cpn_usualta: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    cpn_descrip: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    cpn_tipo: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    cpn_fechabaja: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    cpn_usubaja: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    }
  }, {
    tableName: 'campanias'
  });
};
