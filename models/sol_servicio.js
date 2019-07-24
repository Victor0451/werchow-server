/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('sol_servicio', {
    svc_id: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    svc_fecharecep: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    svc_sucursal: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    svc_deta: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    svc_afiliado: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    svc_par: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    svc_cvn: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    svc_otro: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    svc_extinto: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    svc_dni: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    svc_estarura: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    svc_peso: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    svc_fallecimiento: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    svc_retiro: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    svc_comun: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    svc_hs_comun: {
      type: DataTypes.TIME,
      allowNull: true
    },
    svc_hs_retiro: {
      type: DataTypes.TIME,
      allowNull: true
    },
    svc_personal: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    svc_fecha: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    svc_hora: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    svc_ret: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    tableName: 'sol_servicio'
  });
};
