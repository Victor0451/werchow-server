const express = require("express");
const router = express.Router();
const sequelize = require("sequelize");
const Op = sequelize.Op;
const tabEf = require("../../models/sgi/tablero_efectividad");

router.get("/traertareas", (req, res) => {

    tabEf
        .findAll()
        .then((list) => res.json(list))
        .catch((err) => res.json(err));
});

router.get("/traertablero", (req, res) => {
    tabEf
        .findAll()
        .then((list) => res.json(list))
        .catch((err) => res.json(err));
});

router.get("/traertareasopnl", (req, res) => {
    tabEf
        .findAll({
            where: {
                leido: 0
            }
        })
        .then((list) => res.json(list))
        .catch((err) => res.json(err));
});

router.post("/nuevo", (req, res) => {
    const task = {
        title: title,
        allDay: allDay,
        start: start,
        end: end,
        holiday: holiday,
        operador: operador,
    } = req.body

    tabEf
        .create(task)
        .then((list) => res.json(list))
        .catch((err) => res.json(err));
});


router.put("/editar/:id", (req, res) => {
    let id = req.params.id;

    const taskedit = {
        title: title,
        allDay: allDay,
        start: start,
        end: end,
        holiday: holiday,
        operador: operador,
    } = req.body;

    tabEf
        .update(taskedit, { where: { id: id } })
        .then((list) => res.json(list))
        .catch((err) => res.json(err));
});

router.delete("/eliminar/:id", (req, res) => {
    let id = req.params.id;

    tabEf
        .destroy({ where: { id: id } })
        .then((list) => res.json(list))
        .catch((err) => res.json(err));
});




module.exports = router;
