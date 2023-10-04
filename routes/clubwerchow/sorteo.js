const express = require("express");
const router = express.Router();
const Sequelize = require("sequelize");
const moment = require("moment");
const db = require("../../db/database");

const Op = Sequelize.Op;

const socios = require("../../models/clubwerchow/socios");
const solicitudWeb = require("../../models/clubwerchow/solicitudSorteoWeb");

//GET BY ID

router.post("/regsolicitud", (req, res, next) => {
  const data = {
    solicitante: req.body.solicitante,
    dni: req.body.dni,
    telefono: req.body.telefono,
    mail: req.body.mail,
    fecha: req.body.fecha,
    detalle: req.body.detalle,
    estado: req.body.estado,
  };

  solicitudWeb
    .create(data)
    .then((solicitud) => {
      res.status(200).json(solicitud);
    })
    .catch((err) => {
      console.log(err);
    });
});

router.get("/checksoli/:id", (req, res, next) => {
  solicitudWeb
    .findOne({
      where: { dni: req.params.id },
    })
    .then((solicitud) => {
      res.status(200).json(solicitud);
    })
    .catch((err) => {
      console.log(err);
    });
});

module.exports = router;
