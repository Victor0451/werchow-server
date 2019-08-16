/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('emi012018', {
    CONTRATO: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    NRO_RECIBO: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    SERIE: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    COMPROB: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    DIA_REN: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    DIA_CAR: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    DIA_EMI: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    DIA_PAG: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    HORA_CAR: {
      type: DataTypes.STRING(8),
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
    IMPORTE: {
      type: "DOUBLE",
      allowNull: true
    },
    MAN_COM: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    MOVIM: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    EX: {
      type: "DOUBLE",
      allowNull: true
    },
    GR: {
      type: "DOUBLE",
      allowNull: true
    },
    SEGURO: {
      type: "DOUBLE",
      allowNull: true
    },
    CARGA: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    OPERADOR: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    EXTRA: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    TIP_EXT: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    SUCURSAL: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    PUESTO: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    ACTUALIZA: {
      type: DataTypes.STRING(13),
      allowNull: true
    },
    MARCA: {
      type: DataTypes.INTEGER(4),
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
    CAE: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    CAE_VTO: {
      type: DataTypes.STRING(8),
      allowNull: true
    },
    NCR_SERIE: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    NCR_NRO: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    BARCOD: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    DNI: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    FE_SERIE: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    FE_NRO: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    }
  }, {
    tableName: 'emi012018'
  });
};
