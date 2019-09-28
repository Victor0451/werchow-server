const express = require("express");
const router = express.Router();
const Sequelize = require("sequelize");
const db = require("../../db/database");
//const Op = Sequelize.Op;

const paymentM = require("../../models/mutual/payment");
const campanacasos = require("../../models/sgi/campanacasos");
const campanas = require("../../models/sgi/campanas");

//GET AT WERCHOW

router.get("/atW", (req, res, next) => {
  db.sgiSequelize
    .query(
      `SELECT * FROM atcampana AS at
    WHERE NOT EXISTS (
      SELECT null FROM campanacasos AS cc
      WHERE at.CONTRATO = cc.contrato
    ) 
    `
    )
    .then(atcampana => {
      res.status(200).json(atcampana);
    })

    .catch(err => {
      res.status(400).json(err);
    });
});

//GET AT MUTUAL

router.get("/atM", (req, res, next) => {
  //const { mes, ano } = req.body;

  let mes = "septiembre";
  let ano = 2019;

  paymentM
    .findAll({
      attributes: ["contrato", `${mes}`],
      where: { [mes]: false, ano: ano }
      // order: [["CONTRATO", "DESC"]]
    })
    .then(pagos => {
      res.status(200).json(pagos);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

//INSERT CAMP

router.post("/crearcampat", (req, res, next) => {
  const caso = ({
    idcampana,
    fechacampana,
    sucursal,
    contrato,
    apellido,
    nombre,
    dni,
    calle,
    nro_calle,
    barrio,
    localidad,
    cuota,
    cuotasadeudadas,
    montoadeudado,
    estadocaso
  } = req.body);

  campanacasos
    .create(caso)
    .then(caso => {
      res.status(200).json(caso);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

//GET CAMP BY OPERADOR

router.get("/campanaoperador/:id", (req, res, next) => {
  const { id } = req.params;

  db.sgiSequelize
    .query(
      ` SELECT * FROM campanacasos AS cc 
      INNER JOIN campanas AS c ON cc.idcampana = c.idcampana
      WHERE c.operador = "${id}"
      AND c.descripcion = "Atrasados"

    `
    )
    .then(campanacasos => {
      res.status(200).json(campanacasos);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

module.exports = router;
