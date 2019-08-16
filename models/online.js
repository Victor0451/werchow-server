/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('online', {
    CONTRATO: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    APE_NOM: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    ALTA: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    GRUPO: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    ADHS: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    PLAN: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    SUB_PLAN: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    ZONA: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    CUOTA: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    EMPRESA: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    SUCURSAL: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    EDAD_PROM: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    PERMANEN: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    DEUDA: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    MONTO_DEUDA: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    PAGO: {
      type: DataTypes.INTEGER(5),
      allowNull: true
    }
  }, {
    tableName: 'online'
  });
};
