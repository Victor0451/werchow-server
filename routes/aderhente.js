const express = require("express");
const router = express.Router();
const adherent = require("../models/adherent");

//GET ALL

router.get("/adherentes", (req, res, next) => {
  adherent
    .findAll({
      order: [["CONTRATO", "DESC"]]
    })
    .then(adherent => res.json(adherent))
    .catch(err => res.json(err));
});

//GET ALL BY ID

router.get("/adherentestit/:id", (req, res, next) => {
  adherent
    .findAll({ where: { CONTRATO: req.params.id } })
    .then(adherent => res.json(adherent))
    .catch(err => res.json(err));
});

//GET BY DNI

router.get("/dni/:id", (req, res) => {
  adherent
    .findOne({
      attributes: ["NRO_DOC", "CONTRATO","ESTADO","APELLIDOS", "NOMBRES"],
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

//ALTA

router.post("/nuevo", (req, res) => {
  const newAdh = ({
    SUCURSAL,
    PLAN,
    SUB_PLAN,
    OBRA_SOC,
    CONTRATO,
    APELLIDOS,
    PRODUCTOR,
    PARENT,
    NACIMIENTO,
    ALTA,
    VIGENCIA,
    NOMBRES,
    NRO_DOC,
    ESTADO
  } = req.body);

  console.log(newAdh);

  adherent
    .create(newAdh)
    .then(newAdh => {
      res.status(200).json(newAdh);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

//BAJA

router.put("/baja/:id", (req, res) => {
  const dni = req.params.id;

  let tmp = new Date(Date.now());
  let baja = tmp.toISOString().split("T")[0];

  adherent
    .update(
      {
        BAJA: baja,
        ESTADO: false
      }, //what going to be updated
      { where: { NRO_DOC: dni } } // where clause
    )
    .then(titularModf => {
      res.status(200).json(titularModf);
    })
    .catch(error => {
      res.status(400).json(error);
      console.log(error);
    });
});

//BAJA GRAL

router.put("/bajagral/:id", (req, res) => {
  const contrato = req.params.id;

  let tmp = new Date(Date.now());
  let baja = tmp.toISOString().split("T")[0];

  adherent
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

module.exports = router;
