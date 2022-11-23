const express = require("express");
const router = express.Router();
const sequelize = require("sequelize");
const Op = sequelize.Op;
const historialAcciones = require(`../../models/sgi/historial_acciones`)
const db = require('../../db/database')

router.get("/traerhistorial", (req, res, next) => {

    historialAcciones
        .findAll({
            order: [
                ['fecha', 'DESC']
            ],
        })
        .then((cantidad) => {
            res.status(200).json(cantidad);
        })
        .catch((err) => {
            res.status(400).json(err);
        });
});

router.get("/traerhistorialprestamos", (req, res, next) => {

    db.sgiSequelize.query(

        `
    SELECT *
    FROM historial_aprobacion_prestamos
    ORDER BY fecha DESC

    `
    )
        .then((cantidad) => {
            res.status(200).json(cantidad[0]);
        })
        .catch((err) => {
            res.status(400).json(err);
        });
});


router.post("/reghistorial", (req, res, next) => {
    const { operador, fecha, accion } =
        req.body;

    historialAcciones
        .create({
            operador: operador,
            accion: accion,
            fecha: fecha,

        })
        .then((cantidad) => {
            res.status(200).json(cantidad);
        })
        .catch((err) => {
            res.status(400).json(err);
        });
});
module.exports = router;
