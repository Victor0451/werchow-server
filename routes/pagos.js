const express = require('express');
const router = express.Router();
const pagos = require("../models/pagos");

//GET PAGOS BY CONTRATO

router.get("/pagos/:id", (req, res, next) => {
    pagos.findAll(
        {
            where: { CONTRATO: req.params.id },
            order: [['ANO', 'DESC']]
        })
        .then(pagos => res.json(pagos))
        .catch(err => res.json(err))
})

module.exports = router;