/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('semanas', {
    sem_id: {
      type: DataTypes.INTEGER(4),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    sem_mes: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    sem_anio: {
      type: DataTypes.INTEGER(10),
      allowNull: true
    },
    sem_semana: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    sem_desde: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    sem_hasta: {
      type: DataTypes.DATEONLY,
      allowNull: true
    }
  }, {
    tableName: 'semanas'
  });
};
