const express = require("express");
const router = express.Router();

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
  Ataudes.findAll()
    .then((cantidad) => {
      res.status(200).json(cantidad);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

module.exports = router;
