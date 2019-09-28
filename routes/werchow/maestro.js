const express = require("express");
const router = express.Router();
const maestro = require("../../models/werchow/maestro");
const Sequelize = require("sequelize");
const Op = Sequelize.Op;

//INSERT

router.post("/nuevo", (req, res) => {
  const newTitular = ({
    SUCURSAL,
    PLAN,
    SUB_PLAN,
    GRUPO,
    ZONA,
    OBRA_SOC,
    CONTRATO,
    APELLIDOS,
    MOVIL,
    OPERADOR,
    PRODUCTOR,
    CUOTA,
    NACIMIENTO,
    ALTA,
    VIGENCIA,
    NOMBRES,
    NRO_DOC,
    RECIBO,
    SEXO,
    TELEFONO,
    CALLE,
    NRO_CALLE,
    DOMI_COBR,
    DOM_LAB,
    BARRIO,
    LOCALIDAD,
    EMPRESA,
    ESTADO
  } = req.body);

  maestro
    .create(newTitular)
    .then(titular => {
      res.status(200).json(titular);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

//EDIT

router.put("/editar/:id", (req, res) => {
  const titularModf = ({
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
        SUCURSAL: titularModf.SUCURSAL,
        PLAN: titularModf.PLAN,
        SUB_PLAN: titularModf.SUB_PLAN,
        GRUPO: titularModf.GRUPO,
        ZONA: titularModf.ZONA,
        OBRA_SOC: titularModf.OBRA_SOC,
        APELLIDOS: titularModf.APELLIDOS,
        MOVIL: titularModf.MOVIL,
        PRODUCTOR: titularModf.PRODUCTOR,
        CUOTA: titularModf.CUOTA,
        NACIMIENTO: titularModf.NACIMIENTO,
        ALTA: titularModf.ALTA,
        VIGENCIA: titularModf.VIGENCIA,
        NOMBRES: titularModf.NOMBRES,
        NRO_DOC: titularModf.NRO_DOC,
        SEXO: titularModf.SEXO,
        TELEFONO: titularModf.TELEFONO,
        CALLE: titularModf.CALLE,
        NRO_CALLE: titularModf.NRO_CALLE,
        DOMI_COBR: titularModf.DOMI_COBR,
        DOM_LAB: titularModf.DOM_LAB,
        BARRIO: titularModf.BARRIO,
        LOCALIDAD: titularModf.LOCALIDAD
      },
      { where: { CONTRATO: titularModf.CONTRATO, ESTADO: 1 } }
    )
    .then(titularModf => {
      res.status(200).json(titularModf);
    })
    .catch(error => {
      res.status(400).json(error);
      console.log(error);
    });
});

//BAJA

router.put("/baja/:id", (req, res) => {
  const contrato = req.params.id;

  let tmp = new Date(Date.now());
  let baja = tmp.toISOString().split("T")[0];

  maestro
    .update(
      {
        BAJA: baja,
        ESTADO: false
      }, //what going to be updated
      { where: { CONTRATO: contrato } } // where clause
    )
    .then(titularModf => {
      res.status(200).json(titularModf);
    })
    .catch(error => {
      res.status(400).json(error);
      console.log(error);
    });
});

//GET ALL

router.get("/titulares", (req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  maestro
    .findAll({
      where: { ESTADO: 1 },
      order: [["CONTRATO", "DESC"]]
    })
    .then(titulares => {
      res.status(200).json(titulares);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

//GET BY ID

router.get("/titular/:id", (req, res) => {
  maestro
    .findByPk(req.params.id)
    .then(titular => res.json(titular))
    .catch(err => res.json(err));
});

//GET BY APELLIDO

router.get("/titularapellido/:id", (req, res) => {
  console.log(req.params.id);
  maestro
    .findAll({
      attributes: ["CONTRATO", "APELLIDOS", "NOMBRES", "NRO_DOC", "ESTADO"],
      where: { APELLIDOS: { [Op.like]: req.params.id } }
    })
    .then(titular => res.json(titular))
    .catch(err => res.json(err));
});

//GET BY DNI

router.get("/dni/:id", (req, res) => {
  maestro
    .findOne({
      attributes: ["NRO_DOC", "CONTRATO", "ESTADO", "APELLIDOS", "NOMBRES"],
      where: { NRO_DOC: req.params.id },
      order: [["NRO_DOC", "DESC"]]
    })

    .then(dni => {
      if (dni) {
        res.status(200).json(dni);
      } else {
        res.status(200).json("no existe dni");
      }
    })
    .catch(err => res.status(400).json(err));
});

//GET LAST CONTRATO

router.get("/lastcontrato", (req, res) => {
  maestro
    .findOne({
      attributes: ["CONTRATO"],
      where: { ESTADO: 1 },
      order: [["CONTRATO", "DESC"]]
    })
    .then(maestro => res.json(maestro))
    .catch(err => res.json(err));
});

module.exports = router;
