const express = require("express");
const router = express.Router();
const Sequelize = require("sequelize");
const db = require("../../db/database");
const Op = Sequelize.Op;

//GET SERVICIOS VENDIDOS

router.get("/serviciosvendidos", (req, res, next) => {

    let mes = req.query.mes
    let ano = req.query.ano

    db.sepelioSequelize.query(

        `   
            SELECT 'venta de servicios' as 'tipo', operador_venta as 'operador', COUNT(monto) 'cant', SUM(monto) 'monto'
            FROM servicio_venta
            WHERE MONTH(fecha_venta) = ${mes}
            AND YEAR(fecha_venta) = ${ano}
            GROUP BY operador_venta
        `
    )
        .then((cantidad) => {
            res.status(200).json(cantidad);
        })
        .catch((err) => {
            res.status(400).json(err);
        });
});


// GET GASTOS CAJAS 

router.get("/cajassepelio", (req, res, next) => {

    let mes = req.query.mes
    let ano = req.query.ano

    db.sepelioSequelize.query(

        `   
            SELECT 'gastos en caja' as 'tipo' ,operadortramite 'operador', COUNT(total) 'cant', SUM(total) 'monto'
            FROM gastos_caja
            WHERE MONTH(fecha) = ${mes}
            AND YEAR(fecha) = ${ano}
            GROUP BY operadortramite
        `
    )
        .then((cantidad) => {
            res.status(200).json(cantidad);
        })
        .catch((err) => {
            res.status(400).json(err);
        });
});


router.get("/cajasepelio/:id", (req, res, next) => {

    db.sepelioSequelize.query(

        `   
            SELECT 'gastos en caja' as 'tipo' ,operadortramite 'operador', concepto,  total 'monto'
            FROM gastos_caja
            WHERE idservicio = ${req.params.id}            
        `
    )
        .then((cantidad) => {
            res.status(200).json(cantidad);
        })
        .catch((err) => {
            res.status(400).json(err);
        });
});

// GET GASTOS SERVICIO

router.get("/gastosservicio", (req, res, next) => {

    let mes = req.query.mes
    let ano = req.query.ano

    db.sepelioSequelize.query(

        `   
        SELECT
       'gastos en servicios' as 'tipo',
        operador,
        COUNT(s.tipo_gasto) as 'cant',
        sum((         
          
          CASE
          when s.tipo_gasto = 'Viaje interior' and s.feriado = 1
          then (TIME_FORMAT(s.horas, "%H" ) + (TIME_FORMAT(s.horas, "%i")  / 60)) * h.feriado
          when s.tipo_gasto = 'Viaje interior' and DAYOFWEEK(s.inicio) not in (1,7)
          then (TIME_FORMAT(s.horas, "%H" ) + (TIME_FORMAT(s.horas, "%i")  / 60)) * h.dias_habiles
          when s.tipo_gasto = 'Viaje interior' and DAYOFWEEK(s.inicio) in (1,7)
          then (TIME_FORMAT(s.horas, "%H" ) + (TIME_FORMAT(s.horas, "%i")  / 60)) * h.finde
          
          
          when s.tipo_gasto = 'Guardia oficina' and s.feriado = 1
          then (TIME_FORMAT(s.horas, "%H" ) + (TIME_FORMAT(s.horas, "%i")  / 60)) * h.feriado
          when s.tipo_gasto = 'Guardia oficina' and DAYOFWEEK(s.inicio) not in (1,7)
          then (TIME_FORMAT(s.horas, "%H" ) + (TIME_FORMAT(s.horas, "%i")  / 60)) * h.dias_habiles
          when s.tipo_gasto = 'Guardia oficina' and DAYOFWEEK(s.inicio) in (1,7)
          then (TIME_FORMAT(s.horas, "%H" ) + (TIME_FORMAT(s.horas, "%i")  / 60)) * h.finde
          
          
          when s.tipo_gasto = 'Atencion sala' and s.feriado = 1
          then (TIME_FORMAT(s.horas, "%H" ) + (TIME_FORMAT(s.horas, "%i")  / 60)) * h.feriado
          when s.tipo_gasto = 'Atencion sala' and DAYOFWEEK(s.inicio) not in (1,7)
          then (TIME_FORMAT(s.horas, "%H" ) + (TIME_FORMAT(s.horas, "%i")  / 60)) * h.dias_habiles
          when s.tipo_gasto = 'Atencion sala' and DAYOFWEEK(s.inicio) in (1,7)
          then (TIME_FORMAT(s.horas, "%H" ) + (TIME_FORMAT(s.horas, "%i")  / 60)) * h.finde
          
          
          when s.tipo_gasto = 'Instalacion' and s.feriado = 1
          then (TIME_FORMAT(s.horas, "%H" ) + (TIME_FORMAT(s.horas, "%i")  / 60)) * h.feriado
          when s.tipo_gasto = 'Instalacion' and DAYOFWEEK(s.inicio) not in (1,7)
          then (TIME_FORMAT(s.horas, "%H" ) + (TIME_FORMAT(s.horas, "%i")  / 60)) * h.dias_habiles
          when s.tipo_gasto = 'Instalacion' and DAYOFWEEK(s.inicio) in (1,7)
          then (TIME_FORMAT(s.horas, "%H" ) + (TIME_FORMAT(s.horas, "%i")  / 60)) * h.finde
          
          
          when s.tipo_gasto = 'Conduccion' and s.feriado = 1
          then (TIME_FORMAT(s.horas, "%H" ) + (TIME_FORMAT(s.horas, "%i")  / 60)) * h.feriado
          when s.tipo_gasto = 'Conduccion' and DAYOFWEEK(s.inicio) not in (1,7)
          then (TIME_FORMAT(s.horas, "%H" ) + (TIME_FORMAT(s.horas, "%i")  / 60)) * h.dias_habiles
          when s.tipo_gasto = 'Conduccion' and DAYOFWEEK(s.inicio) in (1,7)
          then (TIME_FORMAT(s.horas, "%H" ) + (TIME_FORMAT(s.horas, "%i")  / 60)) * h.finde
          
          
          when s.tipo_gasto = 'Limpieza sala' and s.feriado = 1
          then (TIME_FORMAT(s.horas, "%H" ) + (TIME_FORMAT(s.horas, "%i")  / 60)) * h.feriado
          when s.tipo_gasto = 'Limpieza sala' and DAYOFWEEK(s.inicio) not in (1,7)
          then (TIME_FORMAT(s.horas, "%H" ) + (TIME_FORMAT(s.horas, "%i")  / 60)) * h.dias_habiles
          when s.tipo_gasto = 'Limpieza sala' and DAYOFWEEK(s.inicio) in (1,7)
          then (TIME_FORMAT(s.horas, "%H" ) + (TIME_FORMAT(s.horas, "%i")  / 60)) * h.finde

          when s.tipo_gasto = 'Extra' and s.feriado = 1
          then (TIME_FORMAT(s.horas, "%H" ) + (TIME_FORMAT(s.horas, "%i")  / 60)) * h.feriado
          when s.tipo_gasto = 'Extra' and DAYOFWEEK(s.inicio) not in (1,7)
          then (TIME_FORMAT(s.horas, "%H" ) + (TIME_FORMAT(s.horas, "%i")  / 60)) * h.dias_habiles
          when s.tipo_gasto = 'Extra' and DAYOFWEEK(s.inicio) in (1,7)
          then (TIME_FORMAT(s.horas, "%H" ) + (TIME_FORMAT(s.horas, "%i")  / 60)) * h.finde

          end
          
          )) as 'monto'
          
                  
        FROM servicio_gastos as s
        INNER JOIN honorarios as h on h.trabajo = s.tipo_gasto
        WHERE MONTH(s.inicio) = ${mes}
        AND YEAR(s.inicio) = ${ano}
        GROUP BY operador
            
            `
    )
        .then((cantidad) => {
            res.status(200).json(cantidad);
        })
        .catch((err) => {
            res.status(400).json(err);
        });
});

router.get("/gastosservicio/:id", (req, res, next) => {

    db.sepelioSequelize.query(

        `   
        SELECT
       'gastos en servicios' as 'tipo',
        operador,        
        s.tipo_gasto,        
               
        (  
          CASE
          when s.tipo_gasto = 'Viaje interior' and s.feriado = 1
          then (TIME_FORMAT(s.horas, "%H" ) + (TIME_FORMAT(s.horas, "%i")  / 60)) * h.feriado
          when s.tipo_gasto = 'Viaje interior' and DAYOFWEEK(s.inicio) not in (1,7)
          then (TIME_FORMAT(s.horas, "%H" ) + (TIME_FORMAT(s.horas, "%i")  / 60)) * h.dias_habiles
          when s.tipo_gasto = 'Viaje interior' and DAYOFWEEK(s.inicio) in (1,7)
          then (TIME_FORMAT(s.horas, "%H" ) + (TIME_FORMAT(s.horas, "%i")  / 60)) * h.finde
          
          
          when s.tipo_gasto = 'Guardia oficina' and s.feriado = 1
          then (TIME_FORMAT(s.horas, "%H" ) + (TIME_FORMAT(s.horas, "%i")  / 60)) * h.feriado
          when s.tipo_gasto = 'Guardia oficina' and DAYOFWEEK(s.inicio) not in (1,7)
          then (TIME_FORMAT(s.horas, "%H" ) + (TIME_FORMAT(s.horas, "%i")  / 60)) * h.dias_habiles
          when s.tipo_gasto = 'Guardia oficina' and DAYOFWEEK(s.inicio) in (1,7)
          then (TIME_FORMAT(s.horas, "%H" ) + (TIME_FORMAT(s.horas, "%i")  / 60)) * h.finde
          
          
          when s.tipo_gasto = 'Atencion sala' and s.feriado = 1
          then (TIME_FORMAT(s.horas, "%H" ) + (TIME_FORMAT(s.horas, "%i")  / 60)) * h.feriado
          when s.tipo_gasto = 'Atencion sala' and DAYOFWEEK(s.inicio) not in (1,7)
          then (TIME_FORMAT(s.horas, "%H" ) + (TIME_FORMAT(s.horas, "%i")  / 60)) * h.dias_habiles
          when s.tipo_gasto = 'Atencion sala' and DAYOFWEEK(s.inicio) in (1,7)
          then (TIME_FORMAT(s.horas, "%H" ) + (TIME_FORMAT(s.horas, "%i")  / 60)) * h.finde
          
          
          when s.tipo_gasto = 'Instalacion' and s.feriado = 1
          then (TIME_FORMAT(s.horas, "%H" ) + (TIME_FORMAT(s.horas, "%i")  / 60)) * h.feriado
          when s.tipo_gasto = 'Instalacion' and DAYOFWEEK(s.inicio) not in (1,7)
          then (TIME_FORMAT(s.horas, "%H" ) + (TIME_FORMAT(s.horas, "%i")  / 60)) * h.dias_habiles
          when s.tipo_gasto = 'Instalacion' and DAYOFWEEK(s.inicio) in (1,7)
          then (TIME_FORMAT(s.horas, "%H" ) + (TIME_FORMAT(s.horas, "%i")  / 60)) * h.finde
          
          
          when s.tipo_gasto = 'Conduccion' and s.feriado = 1
          then (TIME_FORMAT(s.horas, "%H" ) + (TIME_FORMAT(s.horas, "%i")  / 60)) * h.feriado
          when s.tipo_gasto = 'Conduccion' and DAYOFWEEK(s.inicio) not in (1,7)
          then (TIME_FORMAT(s.horas, "%H" ) + (TIME_FORMAT(s.horas, "%i")  / 60)) * h.dias_habiles
          when s.tipo_gasto = 'Conduccion' and DAYOFWEEK(s.inicio) in (1,7)
          then (TIME_FORMAT(s.horas, "%H" ) + (TIME_FORMAT(s.horas, "%i")  / 60)) * h.finde
          
          
          when s.tipo_gasto = 'Limpieza sala' and s.feriado = 1
          then (TIME_FORMAT(s.horas, "%H" ) + (TIME_FORMAT(s.horas, "%i")  / 60)) * h.feriado
          when s.tipo_gasto = 'Limpieza sala' and DAYOFWEEK(s.inicio) not in (1,7)
          then (TIME_FORMAT(s.horas, "%H" ) + (TIME_FORMAT(s.horas, "%i")  / 60)) * h.dias_habiles
          when s.tipo_gasto = 'Limpieza sala' and DAYOFWEEK(s.inicio) in (1,7)
          then (TIME_FORMAT(s.horas, "%H" ) + (TIME_FORMAT(s.horas, "%i")  / 60)) * h.finde

          when s.tipo_gasto = 'Extra' and s.feriado = 1
          then (TIME_FORMAT(s.horas, "%H" ) + (TIME_FORMAT(s.horas, "%i")  / 60)) * h.feriado
          when s.tipo_gasto = 'Extra' and DAYOFWEEK(s.inicio) not in (1,7)
          then (TIME_FORMAT(s.horas, "%H" ) + (TIME_FORMAT(s.horas, "%i")  / 60)) * h.dias_habiles
          when s.tipo_gasto = 'Extra' and DAYOFWEEK(s.inicio) in (1,7)
          then (TIME_FORMAT(s.horas, "%H" ) + (TIME_FORMAT(s.horas, "%i")  / 60)) * h.finde

          end
          
          ) as 'monto'
          
                  
        FROM servicio_gastos as s
        INNER JOIN honorarios as h on h.trabajo = s.tipo_gasto
        WHERE s.idservicio = ${req.params.id}
            
            `
    )
        .then((cantidad) => {
            res.status(200).json(cantidad);
        })
        .catch((err) => {
            res.status(400).json(err);
        });
});

module.exports = router;
