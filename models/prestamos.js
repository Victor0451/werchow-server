/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('prestamos', {
    ptm_id: {
      type: DataTypes.INTEGER(6),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    ptm_fechacarga: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    ptm_op: {
      type: DataTypes.INTEGER(6),
      allowNull: true
    },
    ptm_ficha: {
      type: DataTypes.INTEGER(6),
      allowNull: true
    },
    ptm_legajo: {
      type: DataTypes.INTEGER(8),
      allowNull: true
    },
    ptm_ant: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    ptm_fechasol: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    ptm_renov: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    ptm_prestamo: {
      type: DataTypes.INTEGER(10),
      allowNull: true
    },
    ptm_cuotas: {
      type: DataTypes.INTEGER(3),
      allowNull: true
    },
    ptm_valcuota: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    ptm_neto: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    ptm_estado: {
      type: DataTypes.STRING(20),
      allowNull: true
    }
  }, {
    tableName: 'prestamos'
  });
};
