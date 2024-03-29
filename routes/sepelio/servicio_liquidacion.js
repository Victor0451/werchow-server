const express = require("express");
const router = express.Router();
const sequelize = require("sequelize");
const Op = sequelize.Op;
const db = require("../../db/database");
const serviciosliquidacion = require("../../models/sepelio/servicio_liquidacion");
const moment = require("moment");

router.post("/postliquidacion", (req, res) => {
  const liquidacion = req.body;

  serviciosliquidacion
    .create(liquidacion)
    .then((servicio) => {
      res.status(200).json(servicio);

      db.sepelioSequelize.query(
        `
          UPDATE servicio_gastos
          SET liquidado = 1
          WHERE idservicio = ${liquidacion.idservicio}

  `
      );

      db.sepelioSequelize.query(
        `
          UPDATE servicios
          SET liquidado = 1, fecha_liquidacion = '${moment(
            liquidacion.fecha_liquidacion
          ).format("YYYY-MM-DD HH:mm:ss")}'
          WHERE idservicio = ${liquidacion.idservicio}

  `
      );
    })

    .catch((err) => {
      res.status(400).json(err);
    });
});

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
        ORDER BY gastos_cargados DESC

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
        s.idservicio,
        s.idgastos,
        s.operador,
        s.inicio,
        s.fin,        
        s.tipo_gasto,
        s.liquidado,
        s.aprobado,
        s.fecha_liquidacion,
        s.fecha_aprobacion,
        s.operadorap,
        s.operadorliq,
         (         
          

          CASE



          when s.tipo_gasto = 'Viaje interior' and s.feriado = 1
          then  h.feriado
          when s.tipo_gasto = 'Viaje interior' and DAYOFWEEK(s.inicio) not in (1,7)
          then  h.dias_habiles
          when s.tipo_gasto = 'Viaje interior' and DAYOFWEEK(s.inicio) in (1,7)
          then  h.finde
          
          
          when s.tipo_gasto = 'Guardia oficina' and s.feriado = 1
          then (TIME_FORMAT(s.horas, "%H" ) + (TIME_FORMAT(s.horas, "%i")  / 60)) * h.feriado
          when s.tipo_gasto = 'Guardia oficina' and DAYOFWEEK(s.inicio) not in (1,7)
          then (TIME_FORMAT(s.horas, "%H" ) + (TIME_FORMAT(s.horas, "%i")  / 60)) * h.dias_habiles
          when s.tipo_gasto = 'Guardia oficina' and DAYOFWEEK(s.inicio) in (1,7)
          then (TIME_FORMAT(s.horas, "%H" ) + (TIME_FORMAT(s.horas, "%i")  / 60)) * h.finde
          
          
          when s.tipo_gasto = 'Atencion sala' and s.feriado = 1
          then h.feriado
          when s.tipo_gasto = 'Atencion sala' and DAYOFWEEK(s.inicio) not in (1,7)
          then h.dias_habiles
          when s.tipo_gasto = 'Atencion sala' and DAYOFWEEK(s.inicio) in (1,7)
          then h.finde
          
          
          when s.tipo_gasto = 'Instalacion' and s.feriado = 1
          then h.feriado
          when s.tipo_gasto = 'Instalacion' and DAYOFWEEK(s.inicio) not in (1,7)
          then h.dias_habiles
          when s.tipo_gasto = 'Instalacion' and DAYOFWEEK(s.inicio) in (1,7)
          then h.finde
          
          
          when s.tipo_gasto = 'Conduccion' and s.feriado = 1
          then h.feriado
          when s.tipo_gasto = 'Conduccion' and DAYOFWEEK(s.inicio) not in (1,7)
          then h.dias_habiles
          when s.tipo_gasto = 'Conduccion' and DAYOFWEEK(s.inicio) in (1,7)
          then h.finde
          
          
          when s.tipo_gasto = 'Limpieza sala' and s.feriado = 1
          then h.feriado
          when s.tipo_gasto = 'Limpieza sala' and DAYOFWEEK(s.inicio) not in (1,7)
          then h.dias_habiles
          when s.tipo_gasto = 'Limpieza sala' and DAYOFWEEK(s.inicio) in (1,7)
          then h.finde

          when s.tipo_gasto = 'Extra' and s.feriado = 1
          then h.feriado
          when s.tipo_gasto = 'Extra' and DAYOFWEEK(s.inicio) not in (1,7)
          then h.dias_habiles
          when s.tipo_gasto = 'Extra' and DAYOFWEEK(s.inicio) in (1,7)
          then h.finde
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
