/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mutua_baj_adh', {
    SUCURSAL: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    CLAVE: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    CONTRATO: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    NRO_DOC: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    APELLIDOS: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    NOMBRES: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    NACIMIENTO: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    SEXO: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    ALTA: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    BAJA: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    VIGENCIA: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    ALT_SEG: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    VIG_SEG: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    ENC_SEG: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    VIG_AYUDA: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    PARENT: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    PAMI: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    OBRA_SOC: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    SEGURO: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    PRODUCTOR: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    PLAN: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    SUB_PLAN: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    FEC_PLAN: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    MOD_1: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    PRO_1: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    MOD_2: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    PRO_2: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    MOD_3: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    PRO_3: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    MOD_4: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    PRO_4: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    MOD_5: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    TSEG: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    PRO_5: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    MOD_6: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    PRO_6: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    MOD_7: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    PRO_7: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    MOD_8: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    PRO_8: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    MOD_9: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    PRO_9: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    MOD_10: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    PRO_10: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    MOD_11: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    PRO_11: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    MOD_12: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    PRO_12: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    TOT_MOD: {
      type: "DOUBLE",
      allowNull: true
    },
    ORDEN: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    ACTUALIZA: {
      type: DataTypes.STRING(13),
      allowNull: true
    },
    VIG_OPT: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    VIG_SUB: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    VIG_CONSU: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    VIG_SMEDI: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    DECL_JUR: {
      type: DataTypes.DATEONLY,
      allowNull: true
    }
  }, {
    tableName: 'mutua_baj_adh'
  });
};
