const express = require("express");
const router = express.Router();

const Novedades = require("../../models/sgi/novedades");

//INSERT NOTICIA

router.post("/nuevanoticia", (req, res, next) => {
  const { fecha, novedad, operador } = req.body;
  const nov = {
    fecha,
    novedad,
    operador
  };

  Novedades.create(nov)
    .then((notii) => {
      res.status(200).json(notii);
    })
    .catch((err) => {
      console.log(err);
    });
});

//GET NOTICIA

router.get("/traernovedades", (req, res, next) => {

  Novedades.findAll({
    where: { estado: 1 },
    order: [["idnovedades", "DESC"]],
  })
    .then((noticias) => {
      res.status(200).json(noticias);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

module.exports = router;
