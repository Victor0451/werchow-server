const express = require("express");
const router = express.Router();
const Sequelize = require("sequelize");
const moment = require("moment");
const db = require("../../db/database");

const Op = Sequelize.Op;

const socios = require("../../models/clubwerchow/socios");

//GET BY ID

router.post("/nuevasol", (req, res, next) => {
  const solicitud = ({
    fecha_solicitud,
    apellido,
    nombre,
    dni,
    telefono,
    mail,
    socio,
    nosocio,
    referido,
  } = req.body);

  console.log(req.body);

  socios
    .create(solicitud)
    .then((solicitud) => {
      res.status(200).json(solicitud);
    })
    .catch((err) => {
      console.log(err);
    });
});

router.put("/solcargada/:id", (req, res, next) => {
  let id = req.params.id;

  console.log(id);
  socios
    .update({ cargada: true }, { where: { idsocio: id } })
    .then((solicitud) => {
      res.status(200).json(solicitud);
    })
    .catch((err) => {
      console.log(err);
    });
});

router.get("/solicitudes", (req, res, next) => {
  socios
    .findAll()
    .then((solicitud) => {
      res.status(200).json(solicitud);
    })
    .catch((err) => {
      console.log(err);
    });
});

module.exports = router;
