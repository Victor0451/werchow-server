const express = require("express");
const router = express.Router();
const sequelize = require("sequelize");
const Op = sequelize.Op;
const db = require("../../db/database");
const serviciosliduidacion = require('../../models/sepelio/servicio_liquidacion')


router.get("/serviciosaliquidar", (req, res) => {
  db.sepelioSequelize
    .query(
      `
        select * 
        from servicios as s
        where exists (
        select idservicio
        from servicio_gastos 
        where idservicio = s.idservicio
        ) 

      `
    )
    .then((servicio) => {
      res.status(200).json(servicio);
    })

    .catch((err) => {
      res.status(400).json(err);
    });
});



router.get("/liquidacionoperador/:id", (req, res) => {
  db.sepelioSequelize
    .query(
      `
        SELECT
        operador,
        
        tipo_gasto,
        (
        CASE
        when s.tipo_gasto = 'Viaje interior' and CONCAT(ELT(WEEKDAY(s.fecha_gasto + 1), 'Lunes','Martes','Miercoles','Jueves','Viernes','Sabado','Domingo')) in ('Lunes','Martes','Miercoles','Jueves','Viernes')
        then (DATE_FORMAT(TIMEDIFF(s.hs_fin ,  s.hs_inicio), "%h") * h.dias_habiles)
        when s.tipo_gasto = 'Viaje interior' and CONCAT(ELT(WEEKDAY(s.fecha_gasto + 1), 'Lunes','Martes','Miercoles','Jueves','Viernes','Sabado','Domingo')) in ('Sabado',NULL) 
        then (DATE_FORMAT(TIMEDIFF(s.hs_fin ,  s.hs_inicio), "%h") * h.finde)
        
        when s.tipo_gasto = 'Guardia oficina' and CONCAT(ELT(WEEKDAY(s.fecha_gasto + 1), 'Lunes','Martes','Miercoles','Jueves','Viernes','Sabado','Domingo')) in ('Sabado',NULL) 
        then ( DATE_FORMAT(TIMEDIFF(s.hs_fin ,  s.hs_inicio), "%h") * h.finde)
        when s.tipo_gasto = 'Guardia oficina' and CONCAT(ELT(WEEKDAY(s.fecha_gasto + 1), 'Lunes','Martes','Miercoles','Jueves','Viernes','Sabado','Domingo')) in ('Lunes','Martes','Miercoles','Jueves','Viernes')
        then (DATE_FORMAT(TIMEDIFF(s.hs_fin ,  s.hs_inicio), "%h") * h.dias_habiles)
        
        when s.tipo_gasto = 'Atencion sala' and CONCAT(ELT(WEEKDAY(s.fecha_gasto + 1), 'Lunes','Martes','Miercoles','Jueves','Viernes','Sabado','Domingo')) in ('Sabado',NULL) 
        then ( DATE_FORMAT(TIMEDIFF(s.hs_fin ,  s.hs_inicio), "%h") * h.finde)
        when s.tipo_gasto = 'Atencion sala' and CONCAT(ELT(WEEKDAY(s.fecha_gasto + 1), 'Lunes','Martes','Miercoles','Jueves','Viernes','Sabado','Domingo')) in ('Lunes','Martes','Miercoles','Jueves','Viernes')
        then (DATE_FORMAT(TIMEDIFF(s.hs_fin ,  s.hs_inicio), "%h") * h.dias_habiles)
        
        when s.tipo_gasto = 'Instalacion' and CONCAT(ELT(WEEKDAY(s.fecha_gasto + 1), 'Lunes','Martes','Miercoles','Jueves','Viernes','Sabado','Domingo')) in ('Sabado',NULL) 
        then (h.finde)
        when s.tipo_gasto = 'Instalacion' and CONCAT(ELT(WEEKDAY(s.fecha_gasto + 1), 'Lunes','Martes','Miercoles','Jueves','Viernes','Sabado','Domingo')) in ('Lunes','Martes','Miercoles','Jueves','Viernes')
        then (h.dias_habiles)
        
        when s.tipo_gasto = 'Conduccion' and CONCAT(ELT(WEEKDAY(s.fecha_gasto + 1), 'Lunes','Martes','Miercoles','Jueves','Viernes','Sabado','Domingo')) in ('Sabado',NULL) 
        then (h.finde)
        when s.tipo_gasto = 'Conduccion' and CONCAT(ELT(WEEKDAY(s.fecha_gasto + 1), 'Lunes','Martes','Miercoles','Jueves','Viernes','Sabado','Domingo')) in ('Lunes','Martes','Miercoles','Jueves','Viernes')
        then (h.dias_habiles)
        
        when s.tipo_gasto = 'Limpieza sala' and CONCAT(ELT(WEEKDAY(s.fecha_gasto + 1), 'Lunes','Martes','Miercoles','Jueves','Viernes','Sabado','Domingo')) in ('Sabado',NULL) 
        then (h.finde)
        when s.tipo_gasto = 'Limpieza sala' and CONCAT(ELT(WEEKDAY(s.fecha_gasto + 1), 'Lunes','Martes','Miercoles','Jueves','Viernes','Sabado','Domingo')) in ('Lunes','Martes','Miercoles','Jueves','Viernes')
        then (h.dias_habiles)
        end
        ) as 'liquidacion'
        
        FROM servicio_gastos as s
        INNER JOIN honorarios as h on h.trabajo = s.tipo_gasto
        where s.idservicio = ${req.params.id}
  
        `
    )
    .then((servicio) => {
      res.status(200).json(servicio);
    })

    .catch((err) => {
      res.status(400).json(err);
    });
});
module.exports = router;
