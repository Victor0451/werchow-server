/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('campanascasos', {
    IDCaso: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    IDCampana: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    Legajo: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    Cerrado: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    Paga: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    CuotasPagadas: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    ImportePagado: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    FechaPago: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    FormaPago: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    DNI: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    Apellidos: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    Nombres: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    Calle: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    Nro: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    Barrio: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    Localidad: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    Alta: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    Edad: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    Telefono: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    Movil: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    Cuotas: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    MontoCuota: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    Deuda: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    Baja: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    DatosModificados: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    IDSucursal: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    Observaciones: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    IDFormaPago: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    IDTarjeta: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    IDConvenio: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    IDBanco: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    Tercero: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    SucursalAfiliado: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    RangoPago: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    Actividad: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    ActividadDesc: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    tableName: 'campanascasos'
  });
};
