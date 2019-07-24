const express = require('express');
const router = express.Router();
const maestro = require("../models/maestro");


router.post('/nuevo', (req, res) => {


    const newTitular = {
        ALTA,
        APELLIDOS,
        MOVIL,
        OPERADOR,
        CONTRATO,
        CUOTA,
        GRUPO,
        NACIMIENTO,
        NOMBRES,
        NRO_DOC,
        OBRA_SOC,
        PLAN,
        RECIBO,
        SEXO,
        SUCURSAL,
        TELEFONO,
        VIGENCIA
    } = req.body;



    // let CONTRATO = req.body.contrato
    // console.log(CONTRATO)

    maestro.create(newTitular)
        .then(titular => {
            res.status(200).json(titular)
        })
        .catch(err => {
            res.status(400).json(err)
        })
});


//GET ALL 

router.get('/titulares', (req, res, next) => {

    maestro.findAll({
        order: [['CONTRATO', 'DESC']]
    })
        .then(titulares => {
            res.status(200).json(titulares)
        })
        .catch(err => {
            res.status(400).json(err)
        })
})


//GET BY ID

router.get('/titular/:id', (req, res) => {


    maestro.findByPk(req.params.id)
        .then(titular => res.json(titular))
        .catch(err => res.json(err))
});


//GET LAST CONTRATO

router.get('/lastcontrato', (req, res) => {

    maestro.findOne({
        attributes: ['CONTRATO'],
        order: [['CONTRATO', 'DESC']]
    })
        .then(maestro => res.json(maestro))
        .catch(err => res.json(err))
});


//INSERT TITULAR







module.exports = router;