const express = require("express");
const router = express.Router();
const Sequelize = require("sequelize");
const moment = require("moment");
const db = require("../../db/database");
const Op = Sequelize.Op;

const beneficios = require('../../models/clubwerchow/beneficios')

router.post("/nuevobeneficio", (req, res, next) => {

    const benef = {

        socio: socio,
        dni: dni,
        idcomercio: idcomercio,
        nombre: nombre,
        monto_compra: monto_compra,
        beneficio: beneficio,
        monto_final: monto_final,
        fecha: fecha,
        n_trans: n_trans,

    } = req.body

    beneficios
        .create(benef)
        .then((listado) => {
            res.status(200).json(listado);
        })
        .catch((err) => {
            console.log(err);

        });

});

router.get("/traerbeneficio/:id", (req, res, next) => {

    beneficios
        .findOne({
            where: { n_trans: req.params.id }
        })
        .then((listado) => {
            res.status(200).json(listado);
        })
        .catch((err) => {
            console.log(err);

        });

});

module.exports = router;
