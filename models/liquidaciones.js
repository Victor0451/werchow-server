/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('liquidaciones', {
    liq_id: {
      type: DataTypes.INTEGER(5),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    liq_fecha: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    liq_emp: {
      type: DataTypes.STRING(1),
      allowNull: false
    },
    liq_socio: {
      type: DataTypes.INTEGER(8),
      allowNull: false
    },
    liq_nombre: {
      type: DataTypes.STRING(70),
      allowNull: false
    },
    liq_accion: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    liq_plan: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    liq_fpago: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    liq_recup: {
      type: DataTypes.INTEGER(5),
      allowNull: false
    },
    liq_monto: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    liq_canrec: {
      type: DataTypes.INTEGER(1),
      allowNull: false
    },
    liq_recibo: {
      type: DataTypes.INTEGER(8),
      allowNull: false
    },
    liq_cuotas: {
      type: DataTypes.INTEGER(3),
      allowNull: false
    },
    liq_estado: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    liq_fechacarga: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    liq_caja: {
      type: DataTypes.INTEGER(2),
      allowNull: true
    },
    liq_rendido: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    liq_fechren: {
      type: DataTypes.DATEONLY,
      allowNull: true
    }
  }, {
    tableName: 'liquidaciones'
  });
};
