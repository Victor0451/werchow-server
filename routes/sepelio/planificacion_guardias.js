const express = require("express");
const router = express.Router();
const sequelize = require("sequelize");
const moment = require("moment");

const planificacionGuardias = require("../../models/sepelio/planificacion_guardias");

router.get("/listadoplani", (req, res) => {
  planificacionGuardias
    .findAll({
      where: {
        mes_planificacion: moment().locale("es-es").format("MMMM"),
      },
    })
    .then((titular) => res.json(titular))
    .catch((err) => res.json(err));
});

router.post("/nuevaplani", (req, res) => {
  const planificacion = ({
    lugar,
    fecha,
    hs_inicio,
    hs_fin,
    operador,
    mes_planificacion,
  } = req.body);

  console.log(planificacion);

  planificacionGuardias
    .create(planificacion)
    .then((plani) => res.json(plani))
    .catch((err) => res.json(err));
});

module.exports = router;
