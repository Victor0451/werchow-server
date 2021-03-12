const express = require("express");
const router = express.Router();
const db = require("../../db/database");
//const Op = Sequelize.Op;
const planprecio = require("../../models/sgi/plan_precio");
const plandetalle = require("../../models/sgi/plan_detalle");

//GET AT WERCHOW

router.get("/consultaplanes", (req, res, next) => {

    planprecio.findAll()
        .then((ventas) => {
            res.status(200).json(ventas);
        })

        .catch((err) => {
            res.status(400).json(err);
        });
});

router.get("/detalleplan/:id", (req, res, next) => {

    plandetalle.findAll({
        where: { id_plan: req.params.id }
    })
        .then((ventas) => {
            res.status(200).json(ventas);
        })

        .catch((err) => {
            res.status(400).json(err);
        });
});


module.exports = router;
