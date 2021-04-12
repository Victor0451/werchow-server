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



module.exports = router;
