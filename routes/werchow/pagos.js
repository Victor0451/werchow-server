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

module.exports = router;
