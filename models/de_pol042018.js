/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('de_pol042018', {
    LEGMOV: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    COSMOV: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    CODMOV: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    IMPMOV: {
      type: "DOUBLE",
      allowNull: true
    },
    TOTSPLAN: {
      type: "DOUBLE",
      allowNull: true
    },
    CANTIDAD: {
      type: "DOUBLE",
      allowNull: true
    },
    UREGI: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    DOCUMENTO: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    CLAVE: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    CHEQUE: {
      type: DataTypes.STRING(8),
      allowNull: true
    },
    CATEG: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    }
  }, {
    tableName: 'de_pol042018'
  });
};
