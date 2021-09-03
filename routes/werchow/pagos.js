const express = require("express");
const router = express.Router();
const pagos = require("../../models/werchow/pagos");
const pagosmutual = require("../../models/werchow/pagos_mutual");

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

module.exports = router;
