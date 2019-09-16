const express = require("express");
const router = express.Router();
const adherent = require("../../models/mutual/adherent");

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
      where: { NRO_DOC: req.params.id }
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
    ESTADO,
    TSEG,
    MOD_5
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

// EDITAR

router.put("/editar/:id", (req, res) => {
  const adhModf = ({
    PLAN,
    OBRA_SOC,
    APELLIDOS,
    NACIMIENTO,
    ALTA,
    VIGENCIA,
    NOMBRES,
    NRO_DOC,
    SEXO,
    TSEG,
    MOD_5
  } = req.body);

  adherent
    .update(
      {
        PLAN: adhModf.PLAN,
        OBRA_SOC: adhModf.OBRA_SOC,
        APELLIDOS: adhModf.APELLIDOS,
        NACIMIENTO: adhModf.NACIMIENTO,
        ALTA: adhModf.ALTA,
        VIGENCIA: adhModf.VIGENCIA,
        NOMBRES: adhModf.NOMBRES,
        NRO_DOC: adhModf.NRO_DOC,
        SEXO: adhModf.SEXO,
        TSEG: adhModf.TSEG,
        MOD_5: adhModf.MOD_5
      },
      { where: { NRO_DOC: adhModf.NRO_DOC, ESTADO: 1 } }
    )
    .then(adhModf => {
      res.status(200).json(adhModf);
    })
    .catch(error => {
      res.status(400).json(error);
      console.log(error);
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
