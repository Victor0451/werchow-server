const express = require("express");
const router = express.Router();
const sequelize = require("sequelize");
const Op = sequelize.Op;
const tareas = require("../../models/sepelio/tareas");

router.get("/traertareas", (req, res) => {

  tareas
    .findAll()
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
