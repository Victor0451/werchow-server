const express = require("express");
const router = express.Router();
const sequelize = require("sequelize");
const Op = sequelize.Op;
const moment = require("moment");
const db = require("../../db/database");

const servicioGasto = require("../../models/sepelio/servicio_gastos");

router.post("/cargargasto", (req, res) => {
  const gasto = req.body;

  servicioGasto
    .create(gasto)
    .then((titular) => res.json(titular))
    .catch((err) => res.json(err));
});

router.get("/listadogastos/:id", (req, res) => {
  servicioGasto
    .findAll({
      where: { idservicio: req.params.id },
    })
    .then((titular) => res.json(titular))
    .catch((err) => res.json(err));
});

router.get("/operadoressep", (req, res) => {
  db.sepelioSequelize
    .query(
      `
   SELECT operador as 'value', operador as 'label'
   FROM operadorsep
   `
    )
    .then((titular) => res.json(titular))
    .catch((err) => res.json(err));
});

router.get("/gastliq", (req, res) => {
  db.sepelioSequelize
    .query(
      `
   SELECT trabajo as 'value', trabajo as 'label'
   FROM honorarios
   `
    )
    .then((titular) => res.json(titular))
    .catch((err) => res.json(err));
});

module.exports = router;
