const express = require("express");
const router = express.Router();
const sequelize = require("sequelize");
const Op = sequelize.Op;
const moment = require("moment");
const db = require("../../db/database");

const servicioVenta = require("../../models/sepelio/servicio_venta");

router.post("/nuevaventa", (req, res) => {
    const venta = req.body;

    servicioVenta
        .create(venta)
        .then((titular) => res.json(titular))
        .catch((err) => res.json(err));
});

router.get("/cheqventa/:id", (req, res) => {
    servicioVenta
        .findAll({
            where: { idservicio: req.params.id },
        })
        .then((titular) => res.json(titular))
        .catch((err) => res.json(err));
});


router.get("/plancuotas", (req, res) => {
    db.sgiSequelize.query(

        `
            SELECT *
            FROM intereses_tarjetas
            WHERE estado = 1

        `

    )
        .then((titular) => res.json(titular))
        .catch((err) => res.json(err));
});

router.get("/traerserviciosvendidos", (req, res) => {
    servicioVenta
        .findAll()
        .then((titular) => res.json(titular))
        .catch((err) => res.json(err));
});

router.put("/regliqventa/:id", (req, res) => {

    let operador = req.body.params.operador

    db.sepelioSequelize.query(
        `
            UPDATE servicio_venta
            SET liquidado = 1 , 
            fecha_liquidacion = '${moment().format('YYYY-MM-DD HH:mm:ss')}',
            operadorliq = '${operador}'
            WHERE idventa = ${req.params.id}
   
          `
    )
        .then((titular) => res.json(titular))
        .catch((err) => res.json(err));


});


router.put("/aprobarliqventa/:id", (req, res) => {

    let operador = req.body.params.operador

    db.sepelioSequelize.query(
        `
            UPDATE servicio_venta
            SET aprobado = 1 , 
            fecha_aprobacion = '${moment().format('YYYY-MM-DD HH:mm:ss')}',
            operadorap = '${operador}'
            WHERE idventa = ${req.params.id}
   
          `
    )
        .then((titular) => res.json(titular))
        .catch((err) => res.json(err));


});

router.put("/cancelarliqventa/:id", (req, res) => {

    let operador = req.body.params.operador

    db.sepelioSequelize.query(
        `
            UPDATE servicio_venta
            SET aprobado = 0 , 
            fecha_aprobacion = '${moment().format('YYYY-MM-DD HH:mm:ss')}',
            operadorap = '${operador}'
            WHERE idventa = ${req.params.id}
   
          `
    )
        .then((titular) => res.json(titular))
        .catch((err) => res.json(err));


});

module.exports = router;
