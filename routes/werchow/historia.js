const express = require("express");
const router = express.Router();
const historiafox = require("../../models/werchow/historiafox");
const historia = require("../../models/werchow/historia");

// HISTORIA FOX

router.get("/historiasfox/:id", (req, res, next) => {
  historiafox
    .findAll({
      where: { CONTRATO: req.params.id },
      order: [["ACTUALIZA", "DESC"]]
    })
    .then(historia => {
      res.status(200).json(historia);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

// HISTORIA NUEVA

router.get("/historias/:id", (req, res, next) => {
  historia
    .findAll({
      where: { CONTRATO: req.params.id },
      order: [["FECHA", "DESC"]]
    })
    .then(historia => {
      res.status(200).json(historia);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

router.post("/nuevo", (req, res) => {
  const historiaReg = ({
    CONTRATO,
    OPERADOR,
    ANTERIOR,
    NUEVO,
    FECHA
  } = req.body);

  console.log(historiaReg); 

  historia
    .create(historiaReg)
    .then(historia => {
      res.status(200).json(historia);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

module.exports = router;
