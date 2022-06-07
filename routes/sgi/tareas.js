const express = require("express");
const router = express.Router();
const sequelize = require("sequelize");
const Op = sequelize.Op;
const tareas = require("../../models/sgi/tareas_sucursales");

router.get("/traertareas", (req, res) => {

  tareas
    .findAll()
    .then((list) => res.json(list))
    .catch((err) => res.json(err));
});

router.get("/traertareasop/:id", (req, res) => {
  tareas
    .findAll({
      where: { operador: req.params.id }
    })
    .then((list) => res.json(list))
    .catch((err) => res.json(err));
});

router.get("/traertareasopnl", (req, res) => {
  tareas
    .findAll({
      where: {
        leido: 0
      }
    })
    .then((list) => res.json(list))
    .catch((err) => res.json(err));
});

router.post("/nuevatarea", (req, res) => {
  const task = {
    title: title,
    allDay: allDay,
    start: start,
    end: end,
    priority: priority,
    operador: operador,
    leido: leido,
  } = req.body

  tareas
    .create(task)
    .then((list) => res.json(list))
    .catch((err) => res.json(err));
});


router.put("/editartarea/:id", (req, res) => {
  let id = req.params.id;

  const taskedit = {
    title: title,
    allDay: allDay,
    startstar,
    end: end,
    priority: priority,
    sucursal: sucursal
  } = req.body;

  tareas
    .update(taskedit, { where: { idevents: id } })
    .then((list) => res.json(list))
    .catch((err) => res.json(err));
});

router.delete("/eliminartarea/:id", (req, res) => {
  let id = req.params.id;


  tareas
    .destroy({ where: { idevents: id } })
    .then((list) => res.json(list))
    .catch((err) => res.json(err));
});




module.exports = router;
