const express = require("express");
const router = express.Router();
const maestro = require("../../models/mutual/maestro");
const movimientofichas = require("../../models/mutual/movimiento-fichas");

router.put("/cambiotitular/:id", (req, res, next) => {
  const nuevoTitular = ({
    SUCURSAL,
    PLAN,
    SUB_PLAN,
    GRUPO,
    ZONA,
    OBRA_SOC,
    CONTRATO,
    APELLIDOS,
    MOVIL,
    PRODUCTOR,
    CUOTA,
    NACIMIENTO,
    ALTA,
    VIGENCIA,
    NOMBRES,
    NRO_DOC,
    SEXO,
    TELEFONO,
    CALLE,
    NRO_CALLE,
    DOMI_COBR,
    DOM_LAB,
    BARRIO,
    LOCALIDAD
  } = req.body);

  maestro
    .update(
      {
        SUCURSAL: nuevoTitular.SUCURSAL,
        PLAN: nuevoTitular.PLAN,
        SUB_PLAN: nuevoTitular.SUB_PLAN,
        GRUPO: nuevoTitular.GRUPO,
        ZONA: nuevoTitular.ZONA,
        OBRA_SOC: nuevoTitular.OBRA_SOC,
        APELLIDOS: nuevoTitular.APELLIDOS,
        MOVIL: nuevoTitular.MOVIL,
        PRODUCTOR: nuevoTitular.PRODUCTOR,
        CUOTA: nuevoTitular.CUOTA,
        NACIMIENTO: nuevoTitular.NACIMIENTO,
        ALTA: nuevoTitular.ALTA,
        VIGENCIA: nuevoTitular.VIGENCIA,
        NOMBRES: nuevoTitular.NOMBRES,
        NRO_DOC: nuevoTitular.NRO_DOC,
        SEXO: nuevoTitular.SEXO,
        TELEFONO: nuevoTitular.TELEFONO,
        CALLE: nuevoTitular.CALLE,
        NRO_CALLE: nuevoTitular.NRO_CALLE,
        DOMI_COBR: nuevoTitular.DOMI_COBR,
        DOM_LAB: nuevoTitular.DOM_LAB,
        BARRIO: nuevoTitular.BARRIO,
        LOCALIDAD: nuevoTitular.LOCALIDAD,
        ESTADO: true
      },
      { where: { CONTRATO: nuevoTitular.CONTRATO } }
    )
    .then(maestro => res.status(200).json(maestro))

    .catch(err => res.status(400).json(err));
});

router.post("/viejotitular", (req, res, next) => {
  let tmp = new Date(Date.now());
  let baja = tmp.toISOString().split("T")[0];

  const {
    SUCURSAL,
    CONTRATO,
    APELLIDOS,
    OPERADOR,
    PRODUCTOR,
    NACIMIENTO,
    ALTA,
    NOMBRES,
    NRO_DOC,
    CALLE,
    NRO_CALLE,
    BARRIO,
    LOCALIDAD
  } = req.body;

  movimientofichas
    .create({
      SUCURSAL,
      CONTRATO,
      APELLIDOS,
      OPERADOR,
      PRODUCTOR,
      NACIMIENTO,
      ALTA,
      NOMBRES,
      NRO_DOC,
      CALLE,
      NRO_CALLE,
      BARRIO,
      LOCALIDAD,
      ESTADO: false,
      BAJA: baja,
      DESCRIPCION: "BAJA POR CAMBIO DE TITULARIDAD"
    })
    .then(movimientofichas => res.status(200))

    .catch(err => res.status(400).json(err));
});

module.exports = router;
