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





module.exports = router;