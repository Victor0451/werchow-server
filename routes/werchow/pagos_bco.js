const express = require("express");
const router = express.Router();
const pagobco = require("../../models/werchow/pago_bco");
const pagobcom = require("../../models/werchow/pago_bcom");

//GET PAGOS_BCO BY CONTRATO

router.get("/pagobco/:id", (req, res, next) => {
  pagobco
    .findAll({
      where: { CONTRATO: req.params.id },
      order: [["ANO", "DESC"]],
    })
    .then((pagobco) => res.status(200).json(pagobco))
    .catch((err) => res.status(400).json(err));
});

router.get("/pagobcom/:id", (req, res, next) => {
  pagobcom
    .findAll({
      where: { CONTRATO: req.params.id },
      order: [["ANO", "DESC"]],
    })
    .then((pagobco) => res.status(200).json(pagobco))
    .catch((err) => res.status(400).json(err));
});

module.exports = router;
