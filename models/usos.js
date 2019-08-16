/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('usos', {
    SUC: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    ORDEN: {
      type: DataTypes.STRING(12),
      allowNull: true
    },
    CONTRATO: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    NRO_ADH: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    NRO_DOC: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    PLAN: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    EDAD: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    SEXO: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    OBRA_SOC: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    FECHA: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    FEC_CAJA: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    HORA: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    SERVICIO: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    COMPROBA: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    MODALIDAD: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    VALOR: {
      type: "DOUBLE",
      allowNull: true
    },
    IMPORTE: {
      type: "DOUBLE",
      allowNull: true
    },
    PUESTO: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    PRESTADO: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    ANULADO: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    OPERADOR: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    OPE_AUTO: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    FEC_USO: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    PEDIDO: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    NRO_RECETA: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    COMP: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    EMPRESA: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    N_SERIE: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    N_RECIBO: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    IMP_NC: {
      type: "DOUBLE",
      allowNull: true
    }
  }, {
    tableName: 'usos'
  });
};
