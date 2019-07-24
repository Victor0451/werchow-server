/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('est_poli', {
    Nº: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    DNI: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    APELLIDO: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    NOMBRE: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    FECHA_NAC: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    EDAD: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    DOMICILIO: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    DEPARTAMENTO: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    TELEFONO: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    tableName: 'est_poli'
  });
};
