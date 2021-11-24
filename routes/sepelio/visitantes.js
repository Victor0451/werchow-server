const express = require("express");
const router = express.Router();
const sequelize = require("sequelize");
const Op = sequelize.Op;
const visitantes = require("../../models/sepelio/visitantes");

router.post("/nuevovisitante", (req, res) => {
  const gl = ({
    idservicio,
    apellido,
    nombre,
    dni,
    parentezco,
    telefono,
    temperatura,
    operador,
    fecha,
  } = req.body);

  visitantes
    .create(gl)
    .then((list) => res.json(list))
    .catch((err) => res.json(err));
});

router.get("/listadovisitantes/:id", (req, res) => {
  visitantes
    .findAll({ where: { idservicio: req.params.id } })
    .then((list) => {
      if (list) {
        res.json(list);
      } else {
        res.json(false);
      }
    })
    .catch((err) => res.json(err));
});

router.delete("/eliminarvisitante/:id", (req, res) => {
  visitantes
    .destroy({ where: { idvisitante: req.params.id } })
    .then((list) => {
      if (list) {
        res.json(list);
      } else {
        res.json(false);
      }
    })
    .catch((err) => res.json(err));
});

module.exports = router;
