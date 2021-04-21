const express = require("express");
const router = express.Router();
const sequelize = require("sequelize");
const moment = require("moment");

const planificacionGuardias = require("../../models/sepelio/planificacion_guardias");
const db = require("../../db/database");

router.get("/listadoplani", (req, res) => {
  planificacionGuardias
    .findAll({
      where: {
        mes_planificacion: moment().locale("es-es").format("MMMM"),
      },
    })
    .then((titular) => res.json(titular))
    .catch((err) => res.json(err));
});

router.get("/plani/:id", (req, res) => {
  planificacionGuardias
    .findOne({
      where: {
        idturno: req.params.id
      },
    })
    .then((titular) => res.json(titular))
    .catch((err) => res.json(err));
});

router.post("/nuevaplani", (req, res) => {
  const planificacion = ({
    lugar,
    inicio,
    fin,
    operador,
    mes_planificacion,
    feriado,
    tarea
  } = req.body);

  planificacionGuardias
    .create(planificacion)
    .then((plani) => {

      res.json(plani)

      db.sepelioSequelize.query(
        `
          UPDATE planificacion_guardias
          SET horas = TIMEDIFF(fin,inicio)
          WHERE horas IS NULL
 
        `
      )
    }

    )
    .catch((err) => res.json(err));
});

router.put("/editarplani/:id", (req, res) => {
  const p = ({
    lugar,
    inicio,
    fin,
    operador,
    mes_planificacion,
    feriado
  } = req.body);

  planificacionGuardias
    .update({
      lugar: p.lugar,
      inicio: p.inicio,
      fin: p.fin,
      operador: p.operador,
      mes_planificacion: p.mes_planificacion,
      feriado: p.feriado,
    },
      { where: { idturno: req.params.id } })

    .then((plani) => {

      res.json(plani)

      db.sepelioSequelize.query(
        `
          UPDATE planificacion_guardias
          SET horas = TIMEDIFF(fin,inicio)
          WHERE idturno = ${req.params.id}
 
        `
      )
    }

    )
    .catch((err) => res.json(err));
});

router.get("/liquidarguardias", (req, res) => {

  let mes = req.query.mes
  let ano = req.query.ano


  db.sepelioSequelize.query(

    `
  
    SELECT
    s.idturno,
    s.operador,
    s.mes_planificacion,
    s.inicio, 
    s.fin,
    s.horas,
    s.liquidado,
    s.aprobado,
    s.operadorliq,
    s.fecha_liquidacion,
    s.fecha_aprobacion,
    s.operadorap,

    
    (
    CASE

    when s.tarea = 'Guardia oficina' and s.feriado = 1
    then TIME_FORMAT(s.horas, "%H")* h.feriado
    when s.tarea = 'Guardia oficina' and DAYOFWEEK(inicio) in (1,7) 
    then TIME_FORMAT(s.horas, "%H")* h.finde
    when s.tarea = 'Guardia oficina' and DAYOFWEEK(inicio) not in (1,7) 
    then TIME_FORMAT(s.horas, "%H")* h.dias_habiles

    end
    ) as 'liquidacion'

    FROM planificacion_guardias as s
    INNER JOIN honorarios as h on h.trabajo = s.tarea
    where MONTH(s.inicio) = ${mes}
    and YEAR(s.inicio) = ${ano}
   `
  )
    .then((titular) => res.json(titular))
    .catch((err) => res.json(err));
});


router.get("/resumenguardias", (req, res) => {

  let mes = req.query.mes
  let ano = req.query.ano

  db.sepelioSequelize.query(

    `
    
      SELECT
 
      s.operador,           
      sum((
          CASE
      
          when s.tarea = 'Guardia oficina' and s.feriado = 1
          then TIME_FORMAT(s.horas, "%H")* h.feriado
          when s.tarea = 'Guardia oficina' and DAYOFWEEK(inicio) in (1,7) 
          then TIME_FORMAT(s.horas, "%H")* h.finde
          when s.tarea = 'Guardia oficina' and DAYOFWEEK(inicio) not in (1,7) 
          then TIME_FORMAT(s.horas, "%H")* h.dias_habiles
      
          end
          )) as 'liquidacion',
           s.mes_planificacion
  
      FROM planificacion_guardias as s
      INNER JOIN honorarios as h on h.trabajo = s.tarea
      where MONTH(s.inicio) = ${mes}
      and YEAR(s.inicio) = ${ano}

      GROUP BY s.operador, s.mes_planificacion
     `

  )
    .then((titular) => res.json(titular))
    .catch((err) => res.json(err));
});

router.put("/regliqguardia/:id", (req, res) => {

  let operador = req.body.params.operador

  db.sepelioSequelize.query(
    `
          UPDATE planificacion_guardias
          SET liquidado = 1 , 
          fecha_liquidacion = '${moment().format('YYYY-MM-DD HH:mm:ss')}',
          operadorliq = '${operador}'
          WHERE idturno = ${req.params.id}
 
        `
  )
    .then((titular) => res.json(titular))
    .catch((err) => res.json(err));


});

router.put("/aprobarliqguardia/:id", (req, res) => {

  let operador = req.body.params.operador

  db.sepelioSequelize.query(
    `
          UPDATE planificacion_guardias
          SET aprobado = 1 , 
          fecha_aprobacion = '${moment().format('YYYY-MM-DD HH:mm:ss')}',
          operadorap = '${operador}'
          WHERE idturno = ${req.params.id}
 
        `
  )
    .then((titular) => res.json(titular))
    .catch((err) => res.json(err));


});

router.put("/cancelarliqguardia/:id", (req, res) => {

  let operador = req.body.params.operador

  db.sepelioSequelize.query(
    `
          UPDATE planificacion_guardias
          SET aprobado = 0 , 
          fecha_aprobacion = '${moment().format('YYYY-MM-DD HH:mm:ss')}',
          operadorap = '${operador}'
          WHERE idturno = ${req.params.id}
 
        `
  )
    .then((titular) => res.json(titular))
    .catch((err) => res.json(err));


});

router.delete("/eliminarturno/:id", (req, res) => {

  planificacionGuardias.destroy({
    where: { idturno: req.params.id }
  })
    .then((titular) => res.json(titular))
    .catch((err) => res.json(err));


});

module.exports = router;
