const express = require("express");
const router = express.Router();
const db = require("../../db/database");
//const Op = Sequelize.Op;

//GET AT WERCHOW

router.get("/consultaventas", (req, res, next) => {
  let desde = req.query.desde;
  let hasta = req.query.hasta;
  console.log(desde, hasta);
  db.wSequelize
    .query(
      ` select  m.EMPRESA, m.CONTRATO, m.APELLIDOS, m.NOMBRES, m.NRO_DOC, m.ALTA, m.PLAN, m.LOCALIDAD, m.PRODUCTOR, cf.IMPORTE
      from werchow.maestro as m
      inner join werchow.cuo_fija as cf on cf.CONTRATO = m.CONTRATO
      where m.ALTA between '${desde}' and '${hasta}'
      `
    )
    .then(atcampana => {
      res.status(200).json(atcampana);
    })

    .catch(err => {
      res.status(400).json(err);
    });
});

router.get("/consultaventasm", (req, res, next) => {
  let desde = req.query.desde;
  let hasta = req.query.hasta;
  console.log(desde, hasta);
  db.wSequelize
    .query(
      ` select  m.EMPRESA, m.CONTRATO, m.APELLIDOS, m.NOMBRES, m.NRO_DOC, m.ALTA, m.PLAN, m.LOCALIDAD, m.PRODUCTOR, cf.IMPORTE
      from werchow.mutual as m
      inner join werchow.cuo_mutual as cf on cf.CONTRATO = m.CONTRATO
      where m.ALTA between '${desde}' and '${hasta}'
      `
    )
    .then(atcampana => {
      res.status(200).json(atcampana);
    })

    .catch(err => {
      res.status(400).json(err);
    });
});

module.exports = router;
