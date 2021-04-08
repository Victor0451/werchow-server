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

router.post("/nuevaplani", (req, res) => {
  const planificacion = ({
    lugar,
    inicio,
    fin,
    operador,
    mes_planificacion,
    feriado
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

router.get("/liquidarguardias", (req, res) => {

  db.sepelioSequelize.query(

    `
  
    SELECT
    idturno,
    operador,
    mes_planificacion,
    inicio, 
    fin,
    horas,
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
   `
  )
    .then((titular) => res.json(titular))
    .catch((err) => res.json(err));
});



router.get("/registrarliqguardias", (req, res) => {

  let titulo = `liqguardia${moment().format('MMYYYY')}`

  db.sepelioSequelize.query(

    `
    CREATE TABLE IF NOT EXISTS ${titulo} (INDEX(operador)) AS

    SELECT
    idturno,
    operador,
    mes_planificacion,
    inicio, 
    fin,
    horas,
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
   `
  )
    .then((titular) => res.json(titular))
    .catch((err) => res.json(err));
});



module.exports = router;
