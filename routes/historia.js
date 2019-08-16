const express = require('express');
const router = express.Router();
const historia = require("../models/historia");

router.get('/historias/:id', (req, res, next) => {

    historia.findAll(
        {
            where: { CONTRATO: req.params.id },
            order: [['ACTUALIZA', 'DESC']]

        })
        .then(historia => {
            res.status(200).json(historia)
        })
        .catch(err => {
            res.status(400).json(err)
        })
})

router.post('/nuevo', (req, res) => {


    const newModificacion = {

        CONTRATO,
        OPERADOR,
        ANTERIOR,
        NUEVO,
        ACTUALIZA

    } = req.body;


    historia.create(newModificacion)
        .then(titular => {
            res.status(200).json(titular)
        })
        .catch(err => {
            res.status(400).json(err)
        })
});

module.exports = router