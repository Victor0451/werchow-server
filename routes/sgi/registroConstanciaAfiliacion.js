const express = require("express");
const router = express.Router();
const sequelize = require("sequelize");
const Op = sequelize.Op;
const registroContancia = require("../../models/sgi/registro_constancia_afiliacion");

router.post("/registrarconstancia", (req, res) => {
  const registro = ({
    apellido_extinto,
    nombre_extinto,
    dni_extinto,
    apellido_soli,
    nombre_soli,
    dni_soli,
    lugar_presentacion,
    fecha,
    operador,

  } = req.body);

  registroContancia
    .create(registro)
    .then((list) => res.json(list))
    .catch((err) => res.json(err));
});



router.get("/constanciasregistradas/:id", (req, res) => {

  registroContancia
    .findAll({
      where: { idservicio: req.params.id }
    })
    .then((list) => res.json(list))
    .catch((err) => res.json(err));
});

module.exports = router;
