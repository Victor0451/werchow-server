const express = require('express');
const router = express.Router();
const adherent = require("../models/adherent");


//GET ALL 

router.get("/adherentes", (req, res, next) => {
    adherent.findAll({
        order: [['CONTRATO', 'DESC']]
    })
        .then(adherent => res.json(adherent))
        .catch(err => res.json(err))
});

//GET ALL BY ID

router.get("/adherentestit/:id", (req, res, next) => {
    adherent.findAll(
        { where: { CONTRATO: req.params.id } })
        .then(adherent => res.json(adherent))
        .catch(err => res.json(err))
});

//BAJA

router.put('/baja/:id', (req, res) => {

    const dni = req.params.id

    let tmp = new Date(Date.now());
    let baja = tmp.toISOString().split('T')[0];

    adherent.update(
        {
            BAJA: baja,
            ESTADO: false

        }, //what going to be updated
        { where: { NRO_DOC: dni } } // where clause
    )
        .then(titularModf => {
            res.status(200).json(titularModf)
        })
        .catch(error => {
            res.status(400).json(error)
            console.log(error)
        })
});





module.exports = router;