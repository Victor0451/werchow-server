const express = require("express");
const router = express.Router();

const Noticia = require("../../models/sgi/noticia");

//INSERT NOTICIA

router.post("/nuevanoticia", (req, res, next) => {
  const { fecha, noticia, operador } = req.body;
  const notii = {
    fecha,
    noticia,
    operador
  };
console.log(notii)
  
    Noticia
      .create(notii)
      .then(notii => {
        res.status(200).json(notii);
      })
      .catch(err => {
       console.log(err)
      });
});

//GET NOTICIA

router.get("/noticias", (req, res, next) => {
  Noticia
    .findOne({
      order: [["fecha", "DESC"]]
    })
    .then(noticias => {
      res.status(200).json(noticias);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

module.exports = router;
