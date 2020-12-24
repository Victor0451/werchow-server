const Sequelize = require("sequelize");
const db = require("../../db/database");

module.exports = db.sgiSequelize.define(
  "alta_novell",
  {
    idnovell: {
      type: Sequelize.DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    fecha_recepcion: {
      type: Sequelize.DataTypes.DATE,
    },
    servicio: {
      type: Sequelize.DataTypes.STRING,
    },
    monto: {
      type: Sequelize.DataTypes.INTEGER,
    },
    monto_letra: {
      type: Sequelize.DataTypes.STRING,
    },
    anticipo: {
      type: Sequelize.DataTypes.INTEGER,
    },
  
    gastos_adm: {
      type: Sequelize.DataTypes.INTEGER,
    },
    apellido_sol: {
      type: Sequelize.DataTypes.STRING,
    },

    nombre_sol: {
      type: Sequelize.DataTypes.STRING,
    },
    dni_sol: {
      type: Sequelize.DataTypes.INTEGER,
    },

    estcivil_sol: {
      type: Sequelize.DataTypes.STRING,
    },

    fecha_nac_sol: {
      type: Sequelize.DataTypes.DATE,
    },

    dom_sol: {
      type: Sequelize.DataTypes.STRING,
    },

    domnum_sol: {
      type: Sequelize.DataTypes.INTEGER,
    },

    piso_sol: {
      type: Sequelize.DataTypes.INTEGER,
    },

    barrio_sol: {
      type: Sequelize.DataTypes.STRING,
    },
    localidad_sol: {
      type: Sequelize.DataTypes.STRING,
    },

    codpostal_sol: {
      type: Sequelize.DataTypes.INTEGER,
    },

    telefono_sol: {
      type: Sequelize.DataTypes.INTEGER,
    },

    movil_sol: {
      type: Sequelize.DataTypes.STRING,
    },

    apellido_ben: {
      type: Sequelize.DataTypes.STRING,
    },

    nombre_ben: {
      type: Sequelize.DataTypes.STRING,
    },
    dni_ben: {
      type: Sequelize.DataTypes.INTEGER,
    },

    estcivil_ben: {
      type: Sequelize.DataTypes.STRING,
    },

    fecha_nac_ben: {
      type: Sequelize.DataTypes.DATE,
    },

    dom_ben: {
      type: Sequelize.DataTypes.STRING,
    },

    domnum_ben: {
      type: Sequelize.DataTypes.INTEGER,
    },

    piso_ben: {
      type: Sequelize.DataTypes.INTEGER,
    },

    barrio_ben: {
      type: Sequelize.DataTypes.STRING,
    },
    localidad_ben: {
      type: Sequelize.DataTypes.STRING,
    },

    codpostal_ben: {
      type: Sequelize.DataTypes.INTEGER,
    },

    telefono_ben: {
      type: Sequelize.DataTypes.INTEGER,
    },

    movil_ben: {
      type: Sequelize.DataTypes.INTEGER,
    },
    operador: {
      type: Sequelize.DataTypes.STRING,
    },
    nacionalidad_sol: {
      type: Sequelize.DataTypes.STRING,
    },
    nacionalidad_ben: {
      type: Sequelize.DataTypes.STRING,
    },
    anticipo_letra: {
      type: Sequelize.DataTypes.STRING,
    },
    cuotas: {
      type: Sequelize.DataTypes.INTEGER,
    },
    cuotasaldo_letra: {
      type: Sequelize.DataTypes.STRING,
    },
    cuotasaldo: {
      type: Sequelize.DataTypes.INTEGER,
    },
    cuota_mantenimiento: {
      type: Sequelize.DataTypes.INTEGER,
    },
  },

  {
    timestamps: false,
    freezeTableName: true,
  },
  {
    tableName: "alta_novell",
  }
);
