const express = require("express");
const moment = require("moment");
const router = express.Router();
const sequelize = require("sequelize");
const db = require("../../db/database");
const Op = sequelize.Op;
const parcelas = require("../../models/sepelio/parcelas");
const servicios = require("../../models/sepelio/servicios");
const parceLugares = require("../../models/sepelio/parcelas_lugares");

router.get("/verificarparcela/:id", (req, res) => {
  let id = req.params.id;
  parcelas
    .findAll({
      where: { idservicio: id },
    })
    .then((list) => res.json(list))
    .catch((err) => res.json(err));
});

router.get("/traerparcela/:id", (req, res) => {
  let id = req.params.id;
  parcelas
    .findAll({
      attributes: ["idparcela", "parcela", "mza", "lote"],
      where: { idparcela: id },
    })
    .then((list) => res.json(list))
    .catch((err) => res.json(err));
});

router.get("/parcelaslibres", (req, res) => {
  parcelas
    .findAll({
      where: { asignada: 0 },
    })
    .then((list) => res.json(list))
    .catch((err) => res.json(err));
});

router.get("/parcelasocupadas", (req, res) => {
  parcelas
    .findAll({
      where: { asignada: 1 },
    })
    .then((list) => res.json(list))
    .catch((err) => res.json(err));
});

router.get("/parcelasocupadasrango", (req, res) => {
  let desde = req.query.desde;
  let hasta = req.query.hasta;

  db.sepelioSequelize
    .query(
      `
    SELECT * 
    FROM parcelas
    WHERE fecha BETWEEN '${moment(desde).format("YYYY-MM-DD")}' AND '${moment(
        hasta
      ).format("YYYY-MM-DD")}'

    `
    )
    .then((list) => res.json(list[0]))
    .catch((err) => res.json(err));
});

router.get("/traerid/:id", (req, res) => {
  let id = req.params.id;

  parcelas
    .findOne({
      attributes: ["idparcela"],
      where: { dni_extinto: id },
    })
    .then((list) => res.json(list))
    .catch((err) => res.json(err));
});

router.get("/traerparcela", (req, res) => {
  let id = req.query.id;

  parcelas
    .findOne({
      where: { idparcela: id },
    })
    .then((list) => res.json(list))
    .catch((err) => res.json(err));
});

router.get("/historialparcelas", (req, res) => {
  parceLugares
    .findAll({
      where: { idparcela: req.query.id },
    })
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

  parcelas
    .update(parcelaAsig, { where: { idparcela: id } })
    .then((list) => res.json(list))
    .catch((err) => res.json(err));
});

router.put("/asignarparcelaaparte/:id", (req, res) => {
  let id = req.params.id;

  const parce = ({
    idservicio: idservicio,
    dni_extinto: dni_extinto,
    fecha: fecha,
    ficha: ficha,
    operador_asignacion: operador_asignacion,
    fecha_asignacion: fecha_asignacion,
    asignada: asignada,
  } = req.body);

  parcelas
    .update(parce, { where: { idparcela: id } })
    .then((list) => res.json(list))
    .catch((err) => res.json(err));
});

router.put("/putid", (req, res) => {
  const ides = ({ idservicio: idservicio, idparcela: idparcela } = req.body);

  parcelas
    .update(
      { idservicio: ides.idservicio },
      { where: { idparcela: ides.idparcela } }
    )
    .then((list) => {
      res.json(list);
    })
    .catch((err) => res.json(err));
});

router.put("/updatelugar", (req, res) => {
  let { idparcela, lugares } = req.body;

  parcelas
    .update({ lugares: lugares }, { where: { idparcela: idparcela } })
    .then((list) => {
      res.json(list);
    })
    .catch((err) => res.json(err));
});

router.put("/putidserv", (req, res) => {
  const ides = ({ idservicio: idservicio, idparcela: idparcela } = req.body);

  servicios
    .update(
      { idparcela: ides.idparcela },
      { where: { idservicio: ides.idservicio } }
    )
    .then((list) => res.json(list))
    .catch((err) => res.json(err));
});

router.post("/asignarlugar", (req, res) => {
  const { idparcela, contrato, dni, fecha, operador, lugar } = req.body;

  parceLugares
    .create({
      idparcela: idparcela,
      contrato: contrato,
      dni: dni,
      fecha: fecha,
      operador: operador,
      lugar: lugar,
    })
    .then((list) => res.json(list))
    .catch((err) => res.json(err));
});

module.exports = router;
