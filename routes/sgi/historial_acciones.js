const express = require("express");
const router = express.Router();
const sequelize = require("sequelize");
const Op = sequelize.Op;
const historialAcciones = require(`../../models/sgi/historial_acciones`)

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
