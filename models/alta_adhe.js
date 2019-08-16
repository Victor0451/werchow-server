/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('alta_adhe', {
    adhe_id: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    adhe_fechacarga: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    adhe_fechafi: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    adhe_asesor: {
      type: DataTypes.INTEGER(5),
      allowNull: true
    },
    adhe_contrato: {
      type: DataTypes.INTEGER(10),
      allowNull: true
    },
    adhe_apellido: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    adhe_nombre: {
      type: DataTypes.STRING(60),
      allowNull: true
    },
    adhe_dni: {
      type: DataTypes.INTEGER(10),
      allowNull: true
    },
    adhe_fecnac: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    adhe_paren: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    adhe_recibo: {
      type: DataTypes.INTEGER(10),
      allowNull: true
    },
    adhe_monto: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    adhe_pago: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    adhe_fecpago: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    adhe_estado: {
      type: DataTypes.STRING(10),
      allowNull: true
    }
  }, {
    tableName: 'alta_adhe'
  });
};
