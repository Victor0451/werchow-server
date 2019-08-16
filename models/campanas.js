/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('campanas', {
    IDCampana: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    Campana: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    Descripcion: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    FechaAlta: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    IDUsuarioAlta: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    Finalizada: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    IDUsuarioFinalizacion: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    FechaFinalizacion: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    Tipo: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    Objetivo: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    VisibleRolRecup: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    tableName: 'campanas'
  });
};
