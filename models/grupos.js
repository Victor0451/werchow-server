/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('grupos', {
    CODIGO: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    DESCRIP: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    IVA: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    CUIT: {
      type: DataTypes.STRING(13),
      allowNull: true
    },
    DOMICILIO: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    ORDEN: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    LIN_ALTA: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    LIN_BAJA: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    TOTALIZA: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    PAGINA: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    TITULO1: {
      type: DataTypes.STRING(80),
      allowNull: true
    },
    TITULO2: {
      type: DataTypes.STRING(80),
      allowNull: true
    },
    DIA: {
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
    },
    SUCURSAL: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    MARCA: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    CONVENIO: {
      type: DataTypes.STRING(5),
      allowNull: true
    }
  }, {
    tableName: 'grupos'
  });
};
