/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mora1118v', {
    ID: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    ID_ABONADO: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    MORA: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    ID_CAMPANIA: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    CAMPANIA: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    RECUPERADOR: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    FORMA_PAGO: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    SUCURSAL: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    DEUDA: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    IMP_PAGO: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    FECHA_PAGO: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    ESTADO: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    tableName: 'mora1118v'
  });
};
