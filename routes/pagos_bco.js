const express = require('express');
const router = express.Router();
const pagobco = require("../models/pago_bco");


//GET PAGOS_BCO BY CONTRATO

router.get("/pagobco/:id", (req, res, next) => {

    pagobco.findAll(
        {
            where: { CONTRATO: req.params.id },
            order: [['ANO', 'DESC']]
        })
        .then(pagobco => res.json(pagobco))
        .catch(err => res.json(err))
})

module.exports = router;