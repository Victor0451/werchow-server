/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('historia', {
    CONTRATO: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    OPERADOR: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    ARCHIVO: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    CAMPO: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    ANTERIOR: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    NUEVO: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    ACTUALIZA: {
      type: DataTypes.STRING(13),
      allowNull: true
    },
    CONTROL: {
      type: DataTypes.STRING(9),
      allowNull: true
    }
  }, {
    tableName: 'historia'
  });
};
