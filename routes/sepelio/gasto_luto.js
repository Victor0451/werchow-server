const express = require("express");
const router = express.Router();
const sequelize = require("sequelize");
const Op = sequelize.Op;
const gastoLuto = require("../../models/sepelio/gasto_luto");


router.post("/nuevogasto", (req, res) => {

    const gl = {
        idservicio,
        contrato,
        dni_extinto,
        extinto,
        gasto_luto,
        idataud,
        apellido_ben,
        nombre_ben,
        telefono_ben,
        fecha,
        operador,
        parentezco
    } = req.body

    gastoLuto
        .create(gl)
        .then((list) => res.json(list))
        .catch((err) => res.json(err));
});

router.get("/existencia/:id", (req, res) => {

    gastoLuto
        .findOne({ where: { idservicio: req.params.id } })
        .then((list) => {
            if (list) {
                res.json(list)
            } else {
                res.json(false)
            }
        })
        .catch((err) => res.json(err));
});


router.get("/listadogastos", (req, res) => {

    gastoLuto
        .findAll()
        .then((list) => { res.json(list) })
        .catch((err) => res.json(err));
});


router.delete("/eliminargasto/:id", (req, res) => {

    gastoLuto
        .destroy({ where: { idgastoluto: req.params.id } })
        .then((list) => { res.json(list) })
        .catch((err) => res.json(err));
});

module.exports = router;
