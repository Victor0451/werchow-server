const express = require("express");
const router = express.Router();
const pagos = require("../../models/mutual/pagos");

//GET PAGOS BY CONTRATO

router.get("/ultimorecibo", (req, res, next) => {
  pagos
    .findOne({
      attributes: ["SERIE", "NRO_RECIBO"],
      where: { SERIE: 22 },
      order: [["NRO_RECIBO", "DESC"]]
    })
    .then(pagos => res.status(200).json(pagos))
    .catch(err => res.status(400).json(err));
});

module.exports = router;
