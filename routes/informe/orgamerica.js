const express = require("express");
const router = express.Router();
const db = require("../../db/database");

router.get("/liquidacion", (req, res, next) => {
  let mes = req.query.mes;
  let ano = req.query.ano;

  db.wSequelize
    .query(
      `
      SELECT m.CONTRATO, m.APELLIDOS, m.NOMBRES, m.CALLE, m.NRO_CALLE, m.BARRIO, m.TELEFONO, m.MOVIL, p.IMPORTE
      FROM maestro as m
      INNER JOIN pagos as p on p.CONTRATO = m.CONTRATO
      WHERE EXISTS (
      
      SELECT * 
      FROM pagos
      WHERE mes = ${mes}
      AND ano = ${ano}
      AND MOVIM = 'P'
      
      )
      
      AND m.PRODUCTOR = 100
      AND p.mes = ${mes}
      AND p.ano = ${ano}
      AND p.MOVIM = 'P'
`
    )
    .then((liq) => {
      res.status(200).json(liq);
    })

    .catch((err) => {
      res.status(400).json(err);
    });
});


module.exports = router;
