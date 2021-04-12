const express = require("express");
const router = express.Router();
const sequelize = require("sequelize");
const Op = sequelize.Op;
const db = require("../../db/database");
const tareasAdicionales = require("../../models/sepelio/tareas_adicionales");
const moment = require('moment')


router.get("/traertareas/:id", (req, res) => {

    let id = req.params.id;

    tareasAdicionales
        .findAll({
            where: { idturno: id },
        })
        .then((list) => res.json(list))
        .catch((err) => res.json(err));
});


router.post("/registrartarea", (req, res) => {

    const task = {
        fecha: fecha,
        inicio: inicio,
        fin: fin,
        tarea: tarea,
        opeador: operador,
        observaciones: observaciones,
        feriado: feriado

    } = req.body

    tareasAdicionales
        .create(task)
        .then((list) => {
            res.json(list)
            db.sepelioSequelize.query(
                `
                  UPDATE tareas_adicionales
                  SET horas = TIMEDIFF(fin,inicio)
                  WHERE horas IS NULL         
                `
            )

        })
        .catch((err) => res.json(err));
});


router.get("/liquidartareas", (req, res) => {
    let mes = req.query.mes
    let ano = req.query.ano

    db.sepelioSequelize.query(

        `
        SELECT
        s.idtarea,
        s.operador,
        s.tarea,
        s.inicio,
        s.fin,
        s.horas,
        s.liquidado,
        (
        CASE
        
        when s.tarea = 'Tramites' and s.feriado = 1
        then TIME_FORMAT(s.horas, "%H") * h.feriado
        when s.tarea = 'Tramites' and DAYOFWEEK(s.inicio) not in (1,7)
        then TIME_FORMAT(s.horas, "%H") * h.dias_habiles
        when s.tarea = 'Tramites' and DAYOFWEEK(s.inicio) in (1,7)
        then TIME_FORMAT(s.horas, "%H") * h.finde

        when s.tarea = 'Viaje interior' and s.feriado = 1
        then TIME_FORMAT(s.horas, "%H") * h.feriado
        when s.tarea = 'Viaje interior' and DAYOFWEEK(s.inicio) not in (1,7)
        then TIME_FORMAT(s.horas, "%H") * h.dias_habiles
        when s.tarea = 'Viaje interior' and DAYOFWEEK(s.inicio) in (1,7)
        then TIME_FORMAT(s.horas, "%H") * h.finde
        
        
        when s.tarea = 'Guardia oficina' and s.feriado = 1
        then TIME_FORMAT(s.horas, "%H") * h.feriado
        when s.tarea = 'Guardia oficina' and DAYOFWEEK(s.inicio) not in (1,7)
        then TIME_FORMAT(s.horas, "%H") * h.dias_habiles
        when s.tarea = 'Guardia oficina' and DAYOFWEEK(s.inicio) in (1,7)
        then TIME_FORMAT(s.horas, "%H") * h.finde
        
        
        when s.tarea = 'Atencion sala' and s.feriado = 1
        then TIME_FORMAT(s.horas, "%H") * h.feriado
        when s.tarea = 'Atencion sala' and DAYOFWEEK(s.inicio) not in (1,7)
        then TIME_FORMAT(s.horas, "%H") * h.dias_habiles
        when s.tarea = 'Atencion sala' and DAYOFWEEK(s.inicio) in (1,7)
        then TIME_FORMAT(s.horas, "%H") * h.finde
        
        
        when s.tarea = 'Instalacion' and s.feriado = 1
        then TIME_FORMAT(s.horas, "%H") * h.feriado
        when s.tarea = 'Instalacion' and DAYOFWEEK(s.inicio) not in (1,7)
        then TIME_FORMAT(s.horas, "%H") * h.dias_habiles
        when s.tarea = 'Instalacion' and DAYOFWEEK(s.inicio) in (1,7)
        then TIME_FORMAT(s.horas, "%H") * h.finde
        
        
        when s.tarea = 'Conduccion' and s.feriado = 1
        then TIME_FORMAT(s.horas, "%H") * h.feriado
        when s.tarea = 'Conduccion' and DAYOFWEEK(s.inicio) not in (1,7)
        then TIME_FORMAT(s.horas, "%H") * h.dias_habiles
        when s.tarea = 'Conduccion' and DAYOFWEEK(s.inicio) in (1,7)
        then TIME_FORMAT(s.horas, "%H") * h.finde
        
        
        when s.tarea = 'Limpieza sala' and s.feriado = 1
        then TIME_FORMAT(s.horas, "%H") * h.feriado
        when s.tarea = 'Limpieza sala' and DAYOFWEEK(s.inicio) not in (1,7)
        then TIME_FORMAT(s.horas, "%H") * h.dias_habiles
        when s.tarea = 'Limpieza sala' and DAYOFWEEK(s.inicio) in (1,7)
        then TIME_FORMAT(s.horas, "%H") * h.finde
        
        
        END
        ) as 'liquidacion'
        
        FROM tareas_adicionales as s
        INNER JOIN honorarios as h on h.trabajo = s.tarea
        where MONTH(s.inicio) = ${mes}
        and YEAR(s.inicio) = ${ano}
        
     `
    )
        .then((titular) => res.json(titular))
        .catch((err) => res.json(err));
});


router.get("/resumentareas", (req, res) => {

    let mes = req.query.mes
    let ano = req.query.ano

    db.sepelioSequelize.query(

        `
      
        SELECT
   
        s.operador,           
        sum((
            CASE
        
            when s.tarea = 'Tramites' and s.feriado = 1
            then TIME_FORMAT(s.horas, "%H") * h.feriado
            when s.tarea = 'Tramites' and DAYOFWEEK(s.inicio) not in (1,7)
            then TIME_FORMAT(s.horas, "%H") * h.dias_habiles
            when s.tarea = 'Tramites' and DAYOFWEEK(s.inicio) in (1,7)
            then TIME_FORMAT(s.horas, "%H") * h.finde
    
            when s.tarea = 'Viaje interior' and s.feriado = 1
            then TIME_FORMAT(s.horas, "%H") * h.feriado
            when s.tarea = 'Viaje interior' and DAYOFWEEK(s.inicio) not in (1,7)
            then TIME_FORMAT(s.horas, "%H") * h.dias_habiles
            when s.tarea = 'Viaje interior' and DAYOFWEEK(s.inicio) in (1,7)
            then TIME_FORMAT(s.horas, "%H") * h.finde
            
            
            when s.tarea = 'Guardia oficina' and s.feriado = 1
            then TIME_FORMAT(s.horas, "%H") * h.feriado
            when s.tarea = 'Guardia oficina' and DAYOFWEEK(s.inicio) not in (1,7)
            then TIME_FORMAT(s.horas, "%H") * h.dias_habiles
            when s.tarea = 'Guardia oficina' and DAYOFWEEK(s.inicio) in (1,7)
            then TIME_FORMAT(s.horas, "%H") * h.finde
            
            
            when s.tarea = 'Atencion sala' and s.feriado = 1
            then TIME_FORMAT(s.horas, "%H") * h.feriado
            when s.tarea = 'Atencion sala' and DAYOFWEEK(s.inicio) not in (1,7)
            then TIME_FORMAT(s.horas, "%H") * h.dias_habiles
            when s.tarea = 'Atencion sala' and DAYOFWEEK(s.inicio) in (1,7)
            then TIME_FORMAT(s.horas, "%H") * h.finde
            
            
            when s.tarea = 'Instalacion' and s.feriado = 1
            then TIME_FORMAT(s.horas, "%H") * h.feriado
            when s.tarea = 'Instalacion' and DAYOFWEEK(s.inicio) not in (1,7)
            then TIME_FORMAT(s.horas, "%H") * h.dias_habiles
            when s.tarea = 'Instalacion' and DAYOFWEEK(s.inicio) in (1,7)
            then TIME_FORMAT(s.horas, "%H") * h.finde
            
            
            when s.tarea = 'Conduccion' and s.feriado = 1
            then TIME_FORMAT(s.horas, "%H") * h.feriado
            when s.tarea = 'Conduccion' and DAYOFWEEK(s.inicio) not in (1,7)
            then TIME_FORMAT(s.horas, "%H") * h.dias_habiles
            when s.tarea = 'Conduccion' and DAYOFWEEK(s.inicio) in (1,7)
            then TIME_FORMAT(s.horas, "%H") * h.finde
            
            
            when s.tarea = 'Limpieza sala' and s.feriado = 1
            then TIME_FORMAT(s.horas, "%H") * h.feriado
            when s.tarea = 'Limpieza sala' and DAYOFWEEK(s.inicio) not in (1,7)
            then TIME_FORMAT(s.horas, "%H") * h.dias_habiles
            when s.tarea = 'Limpieza sala' and DAYOFWEEK(s.inicio) in (1,7)
            then TIME_FORMAT(s.horas, "%H") * h.finde

            END
            )) as 'liquidacion',

            s.mes_planificacion
    
        FROM tareas_adicionales as s
        INNER JOIN honorarios as h on h.trabajo = s.tarea
        where MONTH(s.inicio) = ${mes}
        and YEAR(s.inicio) = ${ano}
        
        GROUP BY s.operador, s.mes_planificacion
       `

    )
        .then((titular) => res.json(titular))
        .catch((err) => res.json(err));
});


router.put("/regliqtareas/:id", (req, res) => {

    db.sepelioSequelize.query(
        `
            UPDATE tareas_adicionales
            SET liquidado = 1 , 
            fecha_liquidacion = '${moment().format('YYYY-MM-DD HH:mm:ss')}'
            WHERE idtarea = ${req.params.id}
   
          `
    )
        .then((titular) => res.json(titular))
        .catch((err) => res.json(err));


});

module.exports = router;
