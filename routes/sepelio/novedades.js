const express = require("express");
const router = express.Router();

const Novedades = require("../../models/sepelio/novedades");

//INSERT NOVEDAD

router.post("/nuevanovedad", (req, res, next) => {
  const nov = ({ novedad, operador, fecha } = req.body);

  Novedades.create(nov)
    .then((notii) => {
      res.status(200).json(notii);
    })
    .catch((err) => {
      console.log(err);
    });
});

//GET NOVEDAD

router.get("/novedades", (req, res, next) => {
  Novedades.findAll({
    order: [["idnovedad", "DESC"]],
  })
    .then((noticias) => {
      res.status(200).json(noticias);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

module.exports = router;
