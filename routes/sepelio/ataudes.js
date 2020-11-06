const express = require("express");
const router = express.Router();
const Sequelize = require("sequelize");
const Op = Sequelize.Op;

const Ataudes = require("../../models/sepelio/ataudes");

// //INSERT NOTICIA

router.post("/nuevo", (req, res, next) => {
  const ataud = ({
    nombre,
    tipo,
    medidas,
    uso,
    fabricante,
    stock,
    fecha_alta,
    operador,
    estado,
  } = req.body);

  Ataudes.create(ataud)
    .then((ataud) => {
      res.status(200).json(ataud);
    })
    .catch((err) => {
      console.log(err);
    });
});

//GET ATAUDES

router.get("/cantidad", (req, res, next) => {
  Ataudes.findAll({ where: { stock: { [Op.gt]: 0 } } })
    .then((cantidad) => {
      res.status(200).json(cantidad);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

router.get("/ataud/:id", (req, res, next) => {
  Ataudes.findOne({
    where: { idataud: req.params.id },
  })
    .then((cantidad) => {
      res.status(200).json(cantidad);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

router.put("/updatestock/:id", (req, res, next) => {
  Ataudes.update(
    { stock: req.body.nustock },
    { where: { idataud: req.params.id } }
  )
    .then((cantidad) => {
      res.status(200).json(cantidad);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

module.exports = router;
