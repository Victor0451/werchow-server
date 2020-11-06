const express = require("express");
const router = express.Router();
const sequelize = require("sequelize");
const Op = sequelize.Op;
const datos = require("../../models/sgi/datos");

router.get("/datosop/:id", (req, res) => {
  let op = req.params.id;

  datos
    .findAll({
      where: { operador: op },
    })
    .then((list) => res.json(list))
    .catch((err) => res.json(err));
});

router.post("/altadato", (req, res) => {
  const dato = ({
    fecha: fecha,
    operador: operador,
    apellido: apellido,
    nombre: nombre,
    edad: edad,
    telefono: telefono,
    celular: celular,
    cobertura: cobertura,
    domicilio: domicilio,
    grupofamiliar: grupofamiliar,
    observacion: observacion,
  } = req.body);

  datos
    .create(dato)
    .then((list) => res.json(list))
    .catch((err) => res.json(err));
});

router.put("/asignarparcela/:id", (req, res) => {
  let id = req.params.id;

  const parcelaAsig = ({
    dni_extinto: dni_extinto,
    ficha: ficha,
    fecha: fecha,
    asignada: asignada,
  } = req.body);

  console.log(id);

  parcelas
    .update(parcelaAsig, { where: { idparcela: id } })
    .then((list) => res.json(list))
    .catch((err) => res.json(err));
});

module.exports = router;
