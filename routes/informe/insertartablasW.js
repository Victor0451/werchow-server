const express = require("express");
const router = express.Router();
const db = require("../../db/database");
const moment = require("moment");

let mes = moment().format("MM");
let ano = moment().format("YYYY");

router.post("/insertcbanco", (req, res, next) => {
  db.infoSequelize
    .query(
      `
      INSERT INTO cbanco
      (
        tipo, total, fichas, cobrado, fichascob, mes, ano, adelantado, sucursal
       )
      (
      select  'ssj' as tipo,  sum(m.CUOTA) as total ,count(m.CONTRATO) as fichas, 0 as cobrado, 0 as fichascob , ${mes} as mes, ${ano} as ano, 0 as adelantado, m.SUCURSAL
      from werchow.sow as m
      where m.GRUPO > 5000
      and m.GRUPO not in (7777,8500)
      group by m.SUCURSAL
       )
       `
    )

    .then((efectividad) => {
      res.status(200).json(efectividad);
    })

    .catch((err) => {
      res.status(400).json(err);
    });
});

router.post("/insertcpolicia", (req, res, next) => {
  db.infoSequelize
    .query(
      `
        INSERT INTO cpolicia
        (
          tipo, total, fichas, cobrado, fichascob, mes, ano, adelantado, sucursal
         )
        (
        select  'ssj' as tipo,  sum(m.CUOTA) as total ,count(m.CONTRATO) as fichas, 0 as cobrado, 0 as fichascob , ${mes} as mes, ${ano} as ano, 0 as adelantado, m.SUCURSAL
        from werchow.sow as m
        where m.GRUPO = 6
        group by m.SUCURSAL
         )
         `
    )

    .then((efectividad) => {
      res.status(200).json(efectividad);
    })

    .catch((err) => {
      res.status(400).json(err);
    });
});

router.post("/insertc1000", (req, res, next) => {
  db.infoSequelize
    .query(
      `
        INSERT INTO c1000
        (
         zona, total, fichas, cobrado, fichascob, mes, ano, adelantado
         )
        (
        select  m.ZONA as zona, sum(m.CUOTA * m.DEUDA) as total ,count(m.CONTRATO) as fichas, 0 as cobrado, 0 as fichascob , ${mes} as mes, ${ano} as ano, 0 as adelantado
        from werchow.sow as m
        where m.ZONA != 99
        and m.GRUPO = 1000
        group by m.ZONA
         )
           `
    )

    .then((efectividad) => {
      res.status(200).json(efectividad);
    })

    .catch((err) => {
      res.status(400).json(err);
    });
});

router.post("/insertctjt", (req, res, next) => {
  db.infoSequelize
    .query(
      `
        INSERT INTO ctjt
        (
         grupo, sucursal, total, fichas, cobrado, fichascob, mes, ano
         )
        (
        select  m.GRUPO, m.SUCURSAL,  sum(m.CUOTA) as total ,count(m.CONTRATO) as fichas, 0 as cobrado, 0 as fichascob , ${mes} as mes, ${ano} as ano
        from werchow.sow as m
        where  m.GRUPO in(3400,3600,3700,3800,3900,4000)
        group by m.GRUPO,m.SUCURSAL
        order by m.SUCURSAL
         )
           `
    )

    .then((efectividad) => {
      res.status(200).json(efectividad);
    })

    .catch((err) => {
      res.status(400).json(err);
    });
});

module.exports = router;
