const express = require("express");
const router = express.Router();

const Noticia = require("../../models/sgi/noticia");

//INSERT NOTICIA

router.post("/nuevanoticia", (req, res, next) => {
  const { fecha, noticia, operador, perfil } = req.body;
  const notii = {
    fecha,
    noticia,
    operador,
    perfil,
  };

  Noticia.create(notii)
    .then((notii) => {
      res.status(200).json(notii);
    })
    .catch((err) => {
      console.log(err);
    });
});

//GET NOTICIA

router.get("/noticias/:id", (req, res, next) => {
  Noticia.findOne({
    where: { perfil: req.params.id },
    order: [["idnoticia", "DESC"]],
  })
    .then((noticias) => {
      res.status(200).json(noticias);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

module.exports = router;
