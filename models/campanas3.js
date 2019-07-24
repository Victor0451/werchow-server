/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('campanas3', {
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
    },
    L: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    M: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    N: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    O: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    P: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    Q: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    R: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    S: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    T: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    tableName: 'campanas3'
  });
};
