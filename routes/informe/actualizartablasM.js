const express = require("express");
const router = express.Router();
const db = require("../../db/database");
const moment = require("moment");

let iniMes = moment().startOf("month").format("YYYY-MM-DD");
let finMes = moment().endOf("month").format("YYYY-MM-DD");
let mes = moment().format("MM");
let mesadel = moment().add(1, "M").format("MM");
let ano = moment().format("YYYY");

router.put("/c1000mcob", (req, res, next) => {
  db.infoSequelize
    .query(
      `
    UPDATE c1000m i
    JOIN werchow.som AS m ON i.zona = m.ZONA
    SET i.cobrado = 
    (
    SELECT  sum(p.IMPORTE)
    FROM  werchow.pagos_mutual AS p
    inner join werchow.som as so on so.CONTRATO = p.CONTRATO 
    WHERE  i.zona = so.ZONA
    and p.MOVIM = 'P'
    and p.DIA_REN between '${iniMes}' and '${finMes}'
    and so.ZONA not in (1,3,5,60,99)
    group by so.ZONA
    ),
    
    i.fichascob = 
    (
    SELECT  count(p.CONTRATO)
    FROM  werchow.pagos_mutual AS p
    inner join werchow.som as so on so.CONTRATO = p.CONTRATO 
    WHERE  i.zona = so.ZONA
    and p.MOVIM = 'P'
    and p.DIA_REN between '${iniMes}' and '${finMes}'
    and so.ZONA not in (1,3,5,60,99)
    group by so.ZONA
    )
    
    where i.mes = ${mes}
    and i.ano = ${ano}
    and i.zona not in (1,3,5,60)
 
`
    )

    .then((efectividad) => {
      res.status(200).json(efectividad);
    })

    .catch((err) => {
      res.status(400).json(err);
    });
});

router.put("/c1000mof", (req, res, next) => {
  db.infoSequelize
    .query(
      `
      UPDATE c1000m i
      JOIN werchow.som AS m ON i.zona = m.ZONA
      SET i.cobrado = 
      (
      SELECT  sum(p.IMPORTE)
      FROM  werchow.pagos_mutual AS p
      inner join werchow.som as so on so.CONTRATO = p.CONTRATO 
      WHERE  i.zona = so.ZONA
      and p.MOVIM = 'P'
      and p.DIA_REN between '${iniMes}' and '${finMes}'
      and so.ZONA in (1,3,5,60)
      group by so.ZONA
      ),
      
      i.fichascob = 
      (
      SELECT  count(p.CONTRATO)
      FROM  werchow.pagos_mutual AS p
      inner join werchow.som as so on so.CONTRATO = p.CONTRATO 
      WHERE  i.zona = so.ZONA
      and p.MOVIM = 'P'
      and p.DIA_REN between '${iniMes}' and '${finMes}'
      and so.ZONA in (1,3,5,60)
      group by so.ZONA
      )
      
      where i.mes = ${mes}
      and i.ano = ${ano}
      and i.zona in (1,3,5,60)
   
  `
    )

    .then((efectividad) => {
      res.status(200).json(efectividad);
    })

    .catch((err) => {
      res.status(400).json(err);
    });
});

router.put("/c1000madelantado", (req, res, next) => {
  db.infoSequelize
    .query(
      `
        UPDATE c1000m i
        JOIN werchow.som AS m ON i.zona = m.ZONA
        SET i.adelantado = 
        (
        SELECT   sum(p.IMPORTE)
        FROM  werchow.pagos_mutual AS p
        inner join werchow.som as so on so.CONTRATO = p.CONTRATO 
        WHERE  i.zona = so.ZONA
        and so.GRUPO = 1000
        and p.MES in (${mesadel})
        and p.ANO in (2020, 2021)
        and p.MOVIM = 'P'
        and p.DIA_REN between '${iniMes}' and '${finMes}'
        group by so.ZONA
        )
        where i.mes = ${mes}
        and i.ano = ${ano}
     
    `
    )

    .then((efectividad) => {
      res.status(200).json(efectividad);
    })

    .catch((err) => {
      res.status(400).json(err);
    });
});

router.put("/c1000mnonull", (req, res, next) => {
  db.infoSequelize
    .query(
      `
          UPDATE c1000m         
          SET adelantado = 0
          where adelantado is null
      `
    )

    .then((efectividad) => {
      res.status(200).json(efectividad);
    })

    .catch((err) => {
      res.status(400).json(err);
    });

  db.infoSequelize
    .query(
      `
          UPDATE c1000m         
          SET fichascob = 0
          where fichascob is null
      `
    )

    .then((efectividad) => {
      res.status(200).json(efectividad);
    })

    .catch((err) => {
      res.status(400).json(err);
    });

  db.infoSequelize
    .query(
      `
          UPDATE c1000m         
          SET cobrado = 0
          where cobrado is null
      `
    )

    .then((efectividad) => {
      res.status(200).json(efectividad);
    })

    .catch((err) => {
      res.status(400).json(err);
    });
});

router.put("/ctjtm/:id", (req, res, next) => {
  let id = req.params.id;

  db.infoSequelize
    .query(
      `
        UPDATE ctjtm i
        JOIN werchow.som AS m ON i.GRUPO = m.GRUPO
        SET i.fichascob =  
        (
        
        SELECT  count(p.ID_ABONADO)
        FROM werchow.som as m
        join werchow.debpesoM AS p on p.ID_ABONADO = m.CONTRATO
        WHERE m.GRUPO  = i.grupo
        and  p.CONVENIO in (3400,3600,3700,3800,3900,4000)
        and m.SUCURSAL = '${id}'
        
        ),
        
        i.cobrado= (
        SELECT  sum(p.IMPORTE)
        FROM werchow.som as m
        join werchow.debpesoM AS p on p.ID_ABONADO = m.CONTRATO
        WHERE m.GRUPO  = i.grupo
        and  p.CONVENIO in (3400,3600,3700,3800,3900,4000)
        and m.SUCURSAL = '${id}'
        )
        
        where i.sucursal = '${id}'
        and m.GRUPO  = i.grupo
        and i.mes= ${mes}
        and i.ano = ${ano}  
     
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
