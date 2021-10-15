const express = require("express");
const router = express.Router();
const sequelize = require("sequelize");
const Op = sequelize.Op;
const datos = require("../../models/sgi/datos");
const datosAtencion = require("../../models/sgi/datos_atencion");

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

router.get("/tarerdatosatencion", (req, res) => {
  datosAtencion
    .findAll()
    .then((list) => res.json(list))
    .catch((err) => res.json(err));
});

router.post("/altadatomesaentrada", (req, res) => {
  const dato = ({
    apellido = apellido,
    nombre = nombre,
    dni = dni,
    parentezco = parentezco,
    telefono = telefono,
    motivo = motivo,
    operador = operado,
    fecha = fecha,
    operadoratencion = operadoratencion,
  } = req.body);

  datosAtencion
    .create(dato)
    .then((list) => res.json(list))
    .catch((err) => res.json(err));
});

module.exports = router;
