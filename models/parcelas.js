/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('parcelas', {
    par_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    par_fechalta: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    par_usualta: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    par_cementerio: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    par_mza: {
      type: DataTypes.INTEGER(3),
      allowNull: true
    },
    par_nom: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    par_seccion: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    par_estado: {
      type: DataTypes.STRING(10),
      allowNull: true
    }
  }, {
    tableName: 'parcelas'
  });
};
