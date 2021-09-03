const express = require("express");
const router = express.Router();
const db = require("../../db/database");

const historialLiquidacion = require("../../models/sgi/historial_liquidaciones");

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

router.get("/verhistorial", (req, res, next) => {
  let mes = req.query.mes;
  let ano = req.query.ano;
  let entidad = req.query.entidad;

  historialLiquidacion
    .findOne({
      where: { mes: mes, ano: ano, entidad: entidad },
    })
    .then((liq) => {
      res.status(200).json(liq);
    })

    .catch((err) => {
      res.status(400).json(err);
    });
});

router.post("/reghistorial", (req, res, next) => {
  const { operador, fecha, mes, ano, cobranza, total, comision, entidad } =
    req.body;

  historialLiquidacion
    .create({
      operador: operador,
      fecha: fecha,
      mes: mes,
      ano: ano,
      cobranza: cobranza,
      total: total,
      comision: comision,
      entidad: entidad,
    })
    .then((cantidad) => {
      res.status(200).json(cantidad);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

module.exports = router;
