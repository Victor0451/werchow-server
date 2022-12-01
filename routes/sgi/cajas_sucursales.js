const express = require("express");
const router = express.Router();
const sequelize = require("sequelize");
const Op = sequelize.Op;
const movCaja = require("../../models/sgi/movimiento_caja_sucursales");
const caja = require("../../models/sgi/caja_sucursales");
const { sgiSequelize } = require("../../db/database");


// CAJAS


router.get("/traercajasop/:id", (req, res) => {

    let perfil = req.query.perfil

    if (perfil === "1" || perfil === "3") {

        caja
            .findAll()
            .then((list) => res.json(list))
            .catch((err) => res.json(err));

    } else {

        caja
            .findAll({
                where: { operador_carga: req.params.id }
            })
            .then((list) => res.json(list))
            .catch((err) => res.json(err));

    }


});

router.get("/traercajas", (req, res) => {

    caja
        .findAll()
        .then((list) => res.json(list))
        .catch((err) => res.json(err));
});

router.get("/traercajasmail/:id", (req, res) => {

    sgiSequelize.query(
        `
        SELECT 
                CONCAT(idcaja, '-', fecha_carga) 'label',                
                CONCAT('/gestion/sucursales/caja/caja?id=',idcaja) 'value'
        FROM caja_sucursales
        WHERE operador_carga = '${req.params.id}'
        ORDER BY idcaja DESC
        `
    )
        .then((list) => res.json(list[0]))
        .catch((err) => res.json(err));
});

router.post("/nuevacaja", (req, res) => {
    const caj = {
        fecha_carga: req.body.fecha_carga,
        sucursal: req.body.sucursal,
        ingresos: req.body.ingresos,
        egresos: req.body.egresos,
        saldo: req.body.saldo,
        operador_carga: req.body.operador_carga,
    } = req.body

    caja
        .create(caj)
        .then((list) => res.json(list))
        .catch((err) => res.json(err));
});


// MOVIMIENTO CAJAS



router.get("/traermovi/:id", (req, res) => {
    movCaja
        .findAll({
            where: {
                idcaja: req.params.id,
                movimiento: 'I'
            }
        })
        .then((list) => res.json(list))
        .catch((err) => res.json(err));
});

router.get("/traermove/:id", (req, res) => {
    movCaja
        .findAll({
            where: {
                idcaja: req.params.id,
                movimiento: 'E'
            }
        })
        .then((list) => res.json(list))
        .catch((err) => res.json(err));
});


router.post("/nuevomov", (req, res) => {
    const mov = {
        fecha_carga: req.body.fecha_carga,
        sucursal: req.body.sucursal,
        fecha_movimiento: req.body.fecha_movimiento,
        concepto: req.body.concepto,
        movimiento: req.body.movimiento,
        importe: req.body.importe,
        operador_carga: req.body.operador_carga,
    } = req.body

    movCaja
        .create(mov)
        .then((list) => res.json(list))
        .catch((err) => res.json(err));
});






module.exports = router;
