const express = require("express");
const router = express.Router();
const sequelize = require("sequelize");
const Op = sequelize.Op;
const moment = require("moment");

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
      where: { idservicio: req.params.id, importe: { [Op.ne]: 0 } },
    })
    .then((titular) => res.json(titular))
    .catch((err) => res.json(err));
});

module.exports = router;
