const express = require("express");
const router = express.Router();
const pagos = require("../../models/werchow/pagos");

//GET PAGOS BY CONTRATO

router.get("/pagos/:id", (req, res, next) => {
  pagos
    .findAll({
      where: { CONTRATO: req.params.id },
      order: [["DIA_PAG", "DESC"]]
    })
    .then(pagos => res.status(200).json(pagos))
    .catch(err => res.status(400).json(err));
});

module.exports = router;
