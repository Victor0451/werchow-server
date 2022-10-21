const express = require("express");
const router = express.Router();
const pagos = require("../../models/werchow/pagos");
const pagosmutual = require("../../models/werchow/pagos_mutual");
const db = require(`../../db/database`)
const moment = require('moment')

//GET PAGOS BY CONTRATO

router.get("/pagos/:id", (req, res, next) => {
  pagos
    .findAll({
      where: { CONTRATO: req.params.id, MOVIM: "P" },
      order: [["ANO", "DESC"]],
    })
    .then((pagos) => res.status(200).json(pagos))
    .catch((err) => res.status(400).json(err));
});

router.get("/pagosmutual/:id", (req, res, next) => {
  pagosmutual
    .findAll({
      where: { CONTRATO: req.params.id, MOVIM: "P" },
      order: [["ANO", "DESC"]],
    })
    .then((pagos) => res.status(200).json(pagos))
    .catch((err) => res.status(400).json(err));
});

router.get("/ultimorecibo/:id", (req, res, next) => {
  pagosmutual
    .findOne({
      attributes: ["SERIE", "NRO_RECIBO", "DIA_PAG"],
      where: { SERIE: req.params.id },
      order: [["DIA_PAG", "DESC"]],
    })
    .then((pagos) => res.status(200).json(pagos))
    .catch((err) => res.status(400).json(err));
});

// POST PAGOS

router.post("/regpagom", (req, res, next) => {
  const nupagos = ({
    SERIE,
    NRO_RECIBO,
    MES,
    ANO,
    IMPORTE,
    DIA_REN,
    DIA_CAR,
    DIA_EMI,
    DIA_PAG,
    HORA_CAR,
    CONTRATO,
    MAN_COB,
    MOVIM,
    OPERADOR,
    PUESTO,
  } = req.body);

  for (let i = 0; i < nupagos.length; i++) {
    pagosmutual
      .create({
        SERIE: nupagos[i].SERIE,
        NRO_RECIBO: nupagos[i].NRO_RECIBO,
        MES: nupagos[i].MES,
        ANO: nupagos[i].ANO,
        IMPORTE: nupagos[i].IMPORTE,
        DIA_REN: nupagos[i].DIA_REN,
        DIA_CAR: nupagos[i].DIA_CAR,
        DIA_EMI: nupagos[i].DIA_EMI,
        DIA_PAG: nupagos[i].DIA_PAG,
        HORA_CAR: nupagos[i].HORA_CAR,
        CONTRATO: nupagos[i].CONTRATO,
        MAN_COB: nupagos[i].MAN_COB,
        MOVIM: nupagos[i].MOVIM,
        OPERADOR: nupagos[i].OPERADOR,
        PUESTO: nupagos[i].PUESTO,
      })
      .then((nuevopago) => {
        res.status(200).json(nuevopago);
      })
      .catch((err) => {
        console.log(err);
      });
  }
});


router.get("/traerdatosrecibo", (req, res, next) => {
  let rec = req.query.rec;
  let contrato = req.query.contrato;
  let fecha = req.query.fecha;

  db.wSequelize.query(
    `
  SELECT m.CONTRATO, m.APELLIDOS, m.NOMBRES, m.NRO_DOC, p.SERIE, p.NRO_RECIBO, p.MES, p.ANO, p.IMPORTE
  FROM pagos_mutual as p
  INNER JOIN mutual as m ON m.CONTRATO = p.CONTRATO
  WHERE m.CONTRATO = ${contrato}
  AND p.NRO_RECIBO = ${rec}
  AND p.DIA_PAG = '${moment(fecha).format('YYYY-MM-DD')}'

  `
  )
    .then((pagos) => res.status(200).json(pagos[0]))
    .catch((err) => res.status(400).json(err));
});



module.exports = router;
