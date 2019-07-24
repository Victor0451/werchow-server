/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('banco042018', {
    CONTRATO: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    NRO_DOC: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    TIPO_REG: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    CONVENIO: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    SERVICIO: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    EMP_SUE: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    ID_ABONADO: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    FEC_VENC: {
      type: DataTypes.STRING(8),
      allowNull: true
    },
    IMPO: {
      type: DataTypes.STRING(11),
      allowNull: true
    },
    COD_BANCO: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    TIPO_CTA: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    SUC_CTA: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    NRO_CTA: {
      type: DataTypes.STRING(16),
      allowNull: true
    },
    SECUENCIAL: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    CUOTA: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    ESTADO: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    LIBRES: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    DETALLE: {
      type: DataTypes.STRING(8),
      allowNull: true
    },
    IMPORTE: {
      type: "DOUBLE",
      allowNull: true
    }
  }, {
    tableName: 'banco042018'
  });
};
