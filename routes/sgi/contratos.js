const express = require("express");
const router = express.Router();
const sequelize = require("sequelize");
const db = require("../../db/database");
const Op = sequelize.Op;
const contrato = require("../../models/sgi/contratos");



router.post("/generarcontrato", (req, res) => {

    const contra = {

        locatario1,
        dni1,
        domicilio1,
        locatario2,
        dni2,
        domicilio2,
        monto,
        fecha_inicio,
        duracion,
        locador,
        operador,
        local,
        uf

    } = req.body

    contrato
        .create(contra)
        .then((list) => res.json(list))
        .catch((err) => res.json(err));
});

router.get("/traercontratos", (req, res) => {

    contrato.findAll()
        .then((list) => res.json(list))
        .catch((err) => res.json(err));
});

router.get("/traercontrato/:id", (req, res) => {

    contrato.findOne({
        where: {
            idcontrato: req.params.id
        }
    })
        .then((list) => res.json(list))
        .catch((err) => res.json(err));
});

router.get("/traerlocadores", (req, res) => {

    db.sgiSequelize.query(

        `
        SELECT 
            dni 'value',
            CONCAT(apellido,', ', nombre) 'label'
        FROM locador
        `
    )
        .then((list) => res.json(list[0]))
        .catch((err) => res.json(err));
});

router.get("/traertipocontratos", (req, res) => {

    db.sgiSequelize.query(

        `
        SELECT 
            url 'value',
            tipo_contrato 'label'
        FROM tipo_contratos
        `
    )
        .then((list) => res.json(list[0]))
        .catch((err) => res.json(err));
});


router.get("/traerlocador/:id", (req, res) => {

    db.sgiSequelize.query(

        `
        SELECT *
        FROM locador
        WHERE dni = ${req.params.id}
        `
    )
        .then((list) => res.json(list[0]))
        .catch((err) => res.json(err));
});
module.exports = router;
