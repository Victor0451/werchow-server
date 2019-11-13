const express = require("express");
const router = express.Router();

const Ataudes = require("../../models/sepelio/ataudes");

//INSERT NOTICIA

router.post("/nuevanoticia", (req, res, next) => {
  const { fecha, noticia, operador } = req.body;
  const notii = {
    fecha,
    noticia,
    operador
  };

  Noticia.create(notii)
    .then(notii => {
      res.status(200).json(notii);
    })
    .catch(err => {
      console.log(err);
    });
});

//GET NOTICIA

router.get("/cantidad", (req, res, next) => {
  Ataudes.findAll({
    order: [["COD_ART", "ASC"]]
  })
    .then(cantidad => {
      res.status(200).json(cantidad);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

module.exports = router;
