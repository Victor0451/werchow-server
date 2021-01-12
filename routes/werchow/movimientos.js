const express = require("express");
const router = express.Router();
const mutual = require("../../models/werchow/mutual");
const bajasmutual = require("../../models/werchow/bajas_mutual");
const Sequelize = require("sequelize");
const Op = Sequelize.Op;

//GET ALTAS MENSUAL

router.get("/altasmensuales", (req, res, next) => {
  let desde = req.query.desde;
  let hasta = req.query.hasta;

  console.log(req.query);

  mutual
    .findAll({
      attributes: [
        "CONTRATO",
        "NRO_DOC",
        "APELLIDOS",
        "NOMBRES",
        "NACIMIENTO",
        "ALTA",
        "CALLE",
        "NRO_CALLE",
        "BARRIO",
        "TELEFONO",
        "MOVIL",
      ],
      where: { ALTA: { [Op.between]: [desde, hasta] } },
    })
    .then((pagos) => res.status(200).json(pagos))
    .catch((err) => res.status(400).json(err));
});

router.get("/bajasmensuales", (req, res, next) => {
  let desde = req.query.desde;
  let hasta = req.query.hasta;
  bajasmutual
    .findAll({
      attributes: [
        "CONTRATO",
        "NRO_DOC",
        "APELLIDOS",
        "NOMBRES",
        "NACIMIENTO",
        "ALTA",
        "BAJA",
        "CALLE",
        "NRO_CALLE",
        "BARRIO",
        "TELEFONO",
        "MOVIL",
      ],
      where: { BAJA: { [Op.between]: [desde, hasta] } },
    })
    .then((pagos) => res.status(200).json(pagos))
    .catch((err) => res.status(400).json(err));
});

module.exports = router;
