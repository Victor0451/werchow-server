const express = require("express");
const router = express.Router();
const prestamos = require("../models/prestamos");

//GET PRESTAMOS BY CONTRATO

router.get("/prestamos/:id", (req, res, next) => {
  prestamos
    .findAll({
      where: { ptm_ficha: req.params.id }
      // order: [['DIA_PAG', 'DESC']]
    })
    .then(prestamos => res.status(200).json(prestamos))
    .catch(err => res.status(400).json(err));
});

module.exports = router;
