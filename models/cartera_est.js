/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cartera_est', {
    CONTRATO: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    APE_NOM: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    ALTA: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    GRUPO: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    ADHS: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    PLAN: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    SUB_PLAN: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    ZONA: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    CUOTA: {
      type: "DOUBLE",
      allowNull: true
    },
    EMPRESA: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    SUCURSAL: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    EDAD_PROM: {
      type: "DOUBLE",
      allowNull: true
    },
    PERMANEN: {
      type: "DOUBLE",
      allowNull: true
    },
    DEUDA: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    MES: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    ANO: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    }
  }, {
    tableName: 'cartera_est'
  });
};
