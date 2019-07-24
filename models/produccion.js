/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('produccion', {
    prod_ide: {
      type: DataTypes.INTEGER(4),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    prod_fechacarga: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    prod_fechaafi: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    prod_asesor: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    prod_empre: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    prod_mes: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    prod_anio: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    prod_apeafi: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    prod_nomafi: {
      type: DataTypes.STRING(60),
      allowNull: true
    },
    prod_dniafi: {
      type: DataTypes.INTEGER(10),
      allowNull: true
    },
    prod_local: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    prod_recibo: {
      type: DataTypes.INTEGER(10),
      allowNull: true
    },
    prod_monto: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    prod_plan: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    prod_pago: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    prod_cta_tar: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    prod_obs: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    prod_semana: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    prod_estado: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    prod_cierre: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    prod_afiliado: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    prod_rendido: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    prod_recibosis: {
      type: DataTypes.INTEGER(10),
      allowNull: true
    },
    prod_fechren: {
      type: DataTypes.DATEONLY,
      allowNull: true
    }
  }, {
    tableName: 'produccion'
  });
};
