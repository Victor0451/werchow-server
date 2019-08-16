/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('usuario', {
    usu_ide: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    usu_apellido: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    usu_nombre: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    usu_dni: {
      type: DataTypes.INTEGER(10),
      allowNull: true
    },
    usu_nick: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    usu_perfil: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    usu_clave: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    usu_alta: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    usu_baja: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    usu_estado: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    usu_obs: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    usu_sem1: {
      type: DataTypes.INTEGER(3),
      allowNull: true
    },
    usu_sem2: {
      type: DataTypes.INTEGER(3),
      allowNull: true
    },
    usu_sem3: {
      type: DataTypes.INTEGER(3),
      allowNull: true
    },
    usu_sem4: {
      type: DataTypes.INTEGER(3),
      allowNull: true
    },
    usu_grupo: {
      type: DataTypes.STRING(10),
      allowNull: true
    }
  }, {
    tableName: 'usuario'
  });
};
