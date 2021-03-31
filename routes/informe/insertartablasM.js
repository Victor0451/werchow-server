const express = require("express");
const router = express.Router();
const db = require("../../db/database");
const moment = require("moment");

let mes = moment().format("MM");
let ano = moment().format("YYYY");

router.post("/insertc1000m", (req, res, next) => {
  db.infoSequelize
    .query(
      `
      INSERT INTO c1000m
      (
       zona, total, fichas, cobrado, fichascob, mes, ano, adelantado, descr
       )
      (
      select  m.ZONA as zona, 
      sum(m.CUOTA * m.DEUDA) as total,
      count(m.CONTRATO) as fichas, 
      0 as cobrado, 
      0 as fichascob , 
      ${mes} as mes, 
      ${ano} as ano, 0 as adelantado,
      CASE
      when m.ZONA = 1 then 'Oficina Jujuy'
      when m.ZONA = 3 then 'Oficina Palpala'
      when m.ZONA = 5 then 'Oficina Perico'
      when m.ZONA = 60 then 'Oficina San Pedro'
      when m.ZONA = 4 then 'Perico Genaro'
      when m.ZONA = 14 then 'Leon Marcelo'
      when m.ZONA = 15 then 'Leon Luis (Palp)'
      when m.ZONA = 29 then 'Norma Vargas'
      when m.ZONA = 64 then 'La Mendieta'
      when m.ZONA = 28 then 'Chavez Rodrigo'
      when m.ZONA = 21 then 'Mariana Gazquez'
      when m.ZONA = 47 then 'El Carmen Narvaez'
      when m.ZONA = 22 then 'Alejandro Tejerina'
      when m.ZONA = 43 then 'Arana Pablo'
      when m.ZONA = 53 then 'Rivadeneira'
      when m.ZONA = 41 then 'Luis Leon'
      when m.ZONA = 69 then 'Choque Guadalupe'
      when m.ZONA = 23 then 'Rodriguez'
      when m.ZONA = 39 then 'Arana Pablo'
      when m.ZONA = 45 then 'Guillermo Rodriguez'
      when m.ZONA = 42 then 'Guillermo Rodriguez'
      when m.ZONA = 77 then 'Leon (X)'
      when m.ZONA = 40 then 'Trujillo'
      when m.ZONA = 63 then 'Rivadeneira'
      when m.ZONA = 66 then 'Trujillo (X)'
      ELSE 'Verificar'
      END as descr
      
      from werchow.som as m
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

router.post("/insertctjtm", (req, res, next) => {
  db.infoSequelize
    .query(
      `
      INSERT INTO ctjtm
      (
       grupo, sucursal, total, fichas, cobrado, fichascob, mes, ano, descr, adelantado
       )
      (
      select  m.GRUPO, 
      m.SUCURSAL, 
      sum(m.CUOTA) as total ,
      count(m.CONTRATO) as fichas, 
      0 as cobrado, 
      0 as fichascob ,
      ${mes} as mes, 
      ${ano} as ano,
      CASE
      when m.GRUPO = 3400 then 'Credicash'
      when m.GRUPO = 3600 then 'Credimas'
      when m.GRUPO = 3700 then 'Naranja'
      when m.GRUPO = 3800 then 'Nevada'
      when m.GRUPO = 3900 then 'Su-Credito'
      when m.GRUPO = 4000 then 'Visa'
      
      ELSE 'Verificar'
      END as descr,
      0 as adelantado

      from werchow.som as m
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
