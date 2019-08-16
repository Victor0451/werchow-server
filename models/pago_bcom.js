/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('pago_bcom', {
    NRO_DOC: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    CONTRATO: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    COD_SUC: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    NRO_CTA: {
      type: DataTypes.STRING(9),
      allowNull: true
    },
    FEC_ACR: {
      type: DataTypes.STRING(6),
      allowNull: true
    },
    IMPORTE: {
      type: "DOUBLE",
      allowNull: true
    },
    MARCA: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    MES: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    ANO: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    DIA_PAGO: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    SUCURSAL: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    SEGURO: {
      type: "DOUBLE",
      allowNull: true
    }
  }, {
    tableName: 'pago_bcom'
  });
};
