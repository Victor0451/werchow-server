const express = require("express");
const router = express.Router();
const cuoFija = require("../../models/werchow/cuo_fija");
const cuoMutual = require("../../models/werchow/cuo_mutual");

//GET PAGOS BY CONTRATO

router.get("/cuowerchow/:id", (req, res, next) => {
  cuoFija
    .findOne({
      where: { CONTRATO: req.params.id },
    })
    .then((pagos) => res.status(200).json(pagos))
    .catch((err) => res.status(400).json(err));
});

router.get("/cuomutual/:id", (req, res, next) => {
  cuoMutual
    .findOne({
      where: { CONTRATO: req.params.id },
    })
    .then((pagos) => res.status(200).json(pagos))
    .catch((err) => res.status(400).json(err));
});

module.exports = router;
