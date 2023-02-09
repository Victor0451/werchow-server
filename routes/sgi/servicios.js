const express = require("express");
const router = express.Router();
const db = require("../../db/database")
const moment = require('moment')

const usos = require('../../models/servicios/usos')
const consulta = require('../../models/servicios/consulta')
const practica = require('../../models/servicios/practica')
const farmacia = require('../../models/servicios/farmacia')
const enfermeria = require('../../models/servicios/enfermeria')
const caja = require('../../models/servicios/caja')
const medicosTurnos = require('../../models/servicios/medicos_turnos')
const planesSocio = require('../../models/servicios/planes_socio')
const planesVisita = require('../../models/servicios/planes_visita')



router.get("/traersucursales", (req, res, next) => {
    db.sgiSequelize.query(

        `
    SELECT codigo, sucursal
    FROM sucursal 
     `
    )
        .then(listado => {
            res.status(200).json(listado[0]);
        })
        .catch(err => {
            res.status(400).json(err);
        });
});

router.get("/traerespecialidades", (req, res, next) => {
    db.serviciosSequelize.query(

        `
    SELECT ESPECIAL, NOMBRE
    FROM ESPECIAL 
    ORDER BY NOMBRE 
     `
    )
        .then(listado => {
            res.status(200).json(listado[0]);
        })
        .catch(err => {
            res.status(400).json(err);
        });
});

router.get("/traermedporsuc", (req, res, next) => {

    let suc = req.query.suc
    let esp = req.query.esp

    db.serviciosSequelize.query(
        `
    SELECT COD_PRES, NOMBRE
    FROM PRESTADO
    WHERE SUC = '${suc}' 
    AND SUBSTR(LIS_ESPE,1,3) = '${esp}'
    AND OTERO = 1
    
     `
    )
        .then(listado => {
            res.status(200).json(listado[0]);
        })
        .catch(err => {
            res.status(400).json(err);
        });
});

router.get("/traerefermporsuc", (req, res, next) => {

    let suc = req.query.suc

    db.serviciosSequelize.query(
        `
    SELECT COD_PRES, NOMBRE
    FROM PRESTADO
    WHERE SUC = '${suc}' 
    AND SUBSTR(LIS_ESPE,1,3) = 'ENF'    
    
     `
    )
        .then(listado => {
            res.status(200).json(listado[0]);
        })
        .catch(err => {
            res.status(400).json(err);
        });
});


router.get("/traerdetallemedico/:id", (req, res, next) => {

    db.serviciosSequelize.query(
        `
    SELECT 
        COD_PRES, 
        NOMBRE, 
        DIRECCION, 
        TELEFONOS, 
        HORARIO1, 
        HORARIO2, 
        MAX_DESC, 
        PRECIO_99, 
        SUBSTR(LIS_ESPE,1,3) "SERVICIO", 
        CON_PAGA,
        LUGAR,
        OTERO,
        PROMO
    FROM PRESTADO
    WHERE COD_PRES = '${req.params.id}'     
    
     `
    )
        .then(listado => {
            res.status(200).json(listado[0][0]);
        })
        .catch(err => {
            res.status(400).json(err);
        });
});



router.get("/norden", (req, res, next) => {

    db.serviciosSequelize.query(
        `
    SELECT iduso
    FROM USOS
    ORDER BY iduso DESC
        
     `
    )
        .then(listado => {
            res.status(200).json(listado[0][0]);
        })
        .catch(err => {
            res.status(400).json(err);
        });
});


router.get("/traerordenusos/:id", (req, res, next) => {

    db.serviciosSequelize.query(
        `
    SELECT *
    FROM USOS
    WHERE iduso = ${req.params.id}
        
     `
    )
        .then(listado => {
            res.status(200).json(listado[0][0]);
        })
        .catch(err => {
            res.status(400).json(err);
        });
});



router.get("/traerpracticas/:id", (req, res, next) => {

    db.serviciosSequelize.query(
        `
    SELECT *
    FROM PRACTICA
    WHERE NRO_ORDEN = '${req.params.id}'
        
     `
    )
        .then(listado => {
            res.status(200).json(listado[0]);
        })
        .catch(err => {
            res.status(400).json(err);
        });
});


router.get("/traerpracticaspresador/:id", (req, res, next) => {
    let id = req.params.id
    let lugar = req.query.lugar

    db.serviciosSequelize.query(
        `
            SELECT CODIGOS, DESCRIP, PRECIO_${lugar} "IMPORTE", idpractica
            FROM AUT_PRAC
            WHERE COD_PRES${lugar} = '${id}'
                
             `
    )
        .then(listado => {
            res.status(200).json(listado[0]);
        })
        .catch(err => {
            res.status(400).json(err);
        });





});

router.get("/traerfarmacias", (req, res, next) => {

    db.serviciosSequelize.query(
        `
    SELECT *
    FROM FARMA
    
        
     `
    )
        .then(listado => {
            res.status(200).json(listado[0]);
        })
        .catch(err => {
            res.status(400).json(err);
        });
});

router.get("/traerfarmacia/:id", (req, res, next) => {

    db.serviciosSequelize.query(
        `
    SELECT *
    FROM FARMACIA
    WHERE NRO_ORDEN = '${req.params.id}'
    
        
     `
    )
        .then(listado => {
            res.status(200).json(listado[0]);
        })
        .catch(err => {
            res.status(400).json(err);
        });
});

router.get("/traerenfermeria/:id", (req, res, next) => {

    db.serviciosSequelize.query(
        `
    SELECT p.practica, a.NOMBRE
    FROM ENFERMER as e
    INNER JOIN PRESTADO as a on a.COD_PRES = e.DESTINO
    INNER JOIN PRACT_ENFER as p on p.idpractica = e.PRACTICA
    WHERE e.NRO_ORDEN = '${req.params.id}'
    
        
     `
    )
        .then(listado => {
            res.status(200).json(listado[0]);
        })
        .catch(err => {
            res.status(400).json(err);
        });
});



router.get("/ordenessinrendir", (req, res, next) => {

    db.serviciosSequelize.query(
        `
    SELECT 
        SUC,
        FECHA, 
        COUNT(ORDEN) "CANTIDAD"  
    FROM USOS
    WHERE RENDIDO = 0
    AND ANULADO IS NULL
    AND SUC = '${req.query.suc}'
    AND OPERADOR = '${req.query.user}'
    GROUP BY SUC, FECHA
    
        
     `
    )
        .then(listado => {
            res.status(200).json(listado[0]);
        })
        .catch(err => {
            res.status(400).json(err);
        });
});

router.get("/ordenespordia", (req, res, next) => {

    db.serviciosSequelize.query(
        `
    SELECT 
        SERVICIO, 
        COUNT(ORDEN) "CANTIDAD",
        SUM(IMPORTE)  "IMPORTE"
    FROM USOS
    WHERE RENDIDO = 0
    AND FECHA = '${req.query.fecha}'
    AND ANULADO IS NULL
    AND SUC = '${req.query.suc}'
    AND OPERADOR = '${req.query.user}'
    GROUP BY SERVICIO
    
        
     `
    )
        .then(listado => {
            res.status(200).json(listado[0]);
        })
        .catch(err => {
            res.status(400).json(err);
        });
});

router.get("/listadocajas", (req, res, next) => {

    db.serviciosSequelize.query(
        `
        SELECT 
                FECHA,
                
                (
                SELECT 
                SUM(IMPORTE)
                FROM CAJA as C1
                WHERE C.FECHA = C1.FECHA
                AND MOVIM = 'I'
                AND DETALLE != 'SALDO INICIAL'
                ) 'INGRESOS',
                
                (
                SELECT 
                SUM(IMPORTE)
                FROM CAJA as C2
                WHERE C.FECHA = C2.FECHA
                AND MOVIM = 'E'
                AND DETALLE != 'VALORES A DEPOSITAR'
                ) 'EGRESOS',
                
                (
                (
                SELECT 
                SUM(IMPORTE)
                FROM CAJA as C1
                WHERE C.FECHA = C1.FECHA
                AND MOVIM = 'I'
                AND DETALLE != 'SALDO INICIAL'
                )
                -
                (
                SELECT 
                SUM(IMPORTE)
                FROM CAJA as C2
                WHERE C.FECHA = C2.FECHA
                AND MOVIM = 'E'
                AND DETALLE != 'VALORES A DEPOSITAR'
                )
                )'VAL_DEPOSIT'
        
        FROM CAJA AS C
        
        GROUP BY FECHA
        ORDER BY FECHA DESC
        
     `
    )
        .then(listado => {
            res.status(200).json(listado[0]);
        })
        .catch(err => {
            res.status(400).json(err);
        });
});

router.get("/traeringresos/:id", (req, res, next) => {

    db.serviciosSequelize.query(
        `
            SELECT 
                DETALLE,
                SUM(IMPORTE) "IMPORTE"
            FROM CAJA 
            WHERE MOVIM = 'I'
            AND DETALLE != 'SALDO INICIAL'
            AND FECHA = '${req.params.id}'

            GROUP BY DETALLE
          
     `
    )
        .then(listado => {
            res.status(200).json(listado[0]);
        })
        .catch(err => {
            res.status(400).json(err);
        });
});

router.get("/traeregresos/:id", (req, res, next) => {

    db.serviciosSequelize.query(
        `
            SELECT 
                DETALLE,
                SUM(IMPORTE) "IMPORTE"
            FROM CAJA 
            WHERE MOVIM = 'E'
            AND DETALLE != 'VALORES A DEPOSITAR'
            AND FECHA = '${req.params.id}'

            GROUP BY DETALLE
          
     `
    )
        .then(listado => {
            res.status(200).json(listado[0]);
        })
        .catch(err => {
            res.status(400).json(err);
        });
});

router.get("/chekcaja", (req, res, next) => {

    console.log(req.query)

    db.serviciosSequelize.query(
        `
            SELECT 
                FECHA                
            FROM CAJA 
            WHERE FECHA = '${req.query.fecha}'
            AND OPERADOR = '${req.query.user}'
            
     `
    )
        .then(listado => {
            res.status(200).json(listado[0]);
        })
        .catch(err => {
            res.status(400).json(err);
        });
});

router.get("/traerpractenfer", (req, res, next) => {

    db.serviciosSequelize.query(
        `
            SELECT 
                *
            FROM PRACT_ENFER

     `
    )
        .then(listado => {
            res.status(200).json(listado[0]);
        })
        .catch(err => {
            res.status(400).json(err);
        });
});

router.get("/traerordenesemitidas", (req, res, next) => {

    db.serviciosSequelize.query(
        `
            SELECT 
                iduso,
                FECHA, 
                ORDEN, 
                CONTRATO,
                NRO_DOC,
                SERVICIO,
                IMPORTE
            FROM USOS
            WHERE ANULADO IS NULL
            ORDER BY FECHA DESC

     `
    )
        .then(listado => {
            res.status(200).json(listado[0]);
        })
        .catch(err => {
            res.status(400).json(err);
        });
});


router.get("/verificarconsultas/:id", (req, res, next) => {

    db.serviciosSequelize.query(
        `
        SELECT 
            COUNT(CONTRATO) 'orde'
        FROM USOS
        WHERE CONTRATO = '${req.params.id}'
        AND SERVICIO = 'ORDE'
        AND YEAR(FECHA) = YEAR(CURDATE())
        AND MONTH(FECHA) = MONTH(CURDATE())
        AND ANULADO IS NULL
     `
    )
        .then(listado => {
            res.status(200).json(listado[0][0]);
        })
        .catch(err => {
            res.status(400).json(err);
        });
});


router.get("/verificarpracticas/:id", (req, res, next) => {

    db.serviciosSequelize.query(
        `
        SELECT 
            COUNT(CONTRATO) 'orde'
        FROM USOS
        WHERE CONTRATO = '${req.params.id}'
        AND SERVICIO = 'PBIO'
        AND YEAR(FECHA) = YEAR(CURDATE())
        AND MONTH(FECHA) = MONTH(CURDATE())
        AND ANULADO IS NULL
     `
    )
        .then(listado => {
            res.status(200).json(listado[0][0]);
        })
        .catch(err => {
            res.status(400).json(err);
        });
});

router.get("/verificarusosenorden/:id", (req, res, next) => {

    db.serviciosSequelize.query(
        `
        SELECT 
            COUNT(CONTRATO) 'orde'
        FROM USOS
        WHERE CONTRATO = '${req.params.id}'
        AND SERVICIO = 'PBIO'
        AND YEAR(FECHA) = YEAR('${req.query.fecha}')
        AND MONTH(FECHA) = MONTH('${req.query.fecha}')
        AND ANULADO IS NULL
     `
    )
        .then(listado => {
            res.status(200).json(listado[0][0]);
        })
        .catch(err => {
            res.status(400).json(err);
        });
});

router.get("/contarfisio/:id", (req, res, next) => {

    db.serviciosSequelize.query(
        `
            SELECT 
            
            CASE
                WHEN SUM(CANT_PRA) IS NULL
                THEN 0

                WHEN SUM(CANT_PRA) IS NOT NULL
                THEN SUM(CANT_PRA)

                END 'N'            
            
            FROM PRACTICA
            WHERE CONTRATO = ${req.params.id}
            AND PRAC_REA = 'FIS'
     `
    )
        .then(listado => {
            res.status(200).json(listado[0]);
        })
        .catch(err => {
            res.status(400).json(err);
        });
});

// LIQUIDACIONES

router.get("/liquidacion", (req, res, next) => {

    db.serviciosSequelize.query(
        `
        SELECT
            FECHA,
            CONTRATO,
            SUM(IMPORTE) 'VSIST',
            (SUM(IMPORTE) * 2) 'VNOM',
            ROUND(((SUM(IMPORTE) * 2) * 0.75), 2) 'VLIQ'
        FROM
            USOS
        WHERE
            PRESTADO = '${req.query.medico}'
        AND FECHA BETWEEN '${req.query.desde}'
        AND '${req.query.hasta}'
        AND ANULADO IS NULL
        GROUP BY
            FECHA,
            CONTRATO
     `
    )
        .then(listado => {
            res.status(200).json(listado[0]);
        })
        .catch(err => {
            res.status(400).json(err);
        });
});


// GESTION TURNOS

router.get("/traermedicos", (req, res, next) => {

    db.serviciosSequelize.query(
        `
    SELECT COD_PRES, NOMBRE
    FROM PRESTADO
    WHERE DIRECCION LIKE '%OTERO%'
    
     `
    )
        .then(listado => {
            res.status(200).json(listado[0]);
        })
        .catch(err => {
            res.status(400).json(err);
        });
});


router.get("/traermedicostodos", (req, res, next) => {

    db.serviciosSequelize.query(
        `
    SELECT COD_PRES, NOMBRE
    FROM PRESTADO
    ORDER BY NOMBRE ASC
    
     `
    )
        .then(listado => {
            res.status(200).json(listado[0]);
        })
        .catch(err => {
            res.status(400).json(err);
        });
});

router.get("/buscarturnos", (req, res, next) => {

    let medico = req.query.medico
    let dia = req.query.dia
    let turno = req.query.turno

    db.serviciosSequelize.query(
        `
    SELECT *
    FROM MEDICOS_TURNOS
    WHERE doctor = '${medico}'
    AND fecha = '${dia}'
    AND turno = '${turno}'
    AND estado != 2
    
     `
    )
        .then(listado => {
            res.status(200).json(listado[0]);
        })
        .catch(err => {
            res.status(400).json(err);
        });
});

router.get("/buscarordenes", (req, res, next) => {

    let desde = req.query.desde
    let hasta = req.query.hasta


    db.serviciosSequelize.query(
        `
    SELECT *
    FROM USOS
    WHERE FECHA BETWEEN '${moment(desde).format('YYYY-MM-DD')}' AND '${moment(hasta).format('YYYY-MM-DD')}'
    
     `
    )
        .then(listado => {
            res.status(200).json(listado[0]);
        })
        .catch(err => {
            res.status(400).json(err);
        });
});

router.get("/buscarordenesfa", (req, res, next) => {

    let desde = req.query.desde
    let hasta = req.query.hasta


    db.serviciosSequelize.query(
        `
    SELECT *
    FROM USOSFA
    WHERE FECHA BETWEEN '${moment(desde).format('YYYY-MM-DD')}' AND '${moment(hasta).format('YYYY-MM-DD')}'
    
     `
    )
        .then(listado => {
            res.status(200).json(listado[0]);
        })
        .catch(err => {
            res.status(400).json(err);
        });
});

router.get("/buscaconsultaspormedico", (req, res, next) => {

    let desde = req.query.desde
    let hasta = req.query.hasta
    let medico = req.query.medico


    db.serviciosSequelize.query(
        `
    
    SELECT
        u.SUC,
        u.FECHA,
        u.SERVICIO,
        u.ORDEN,
        p.COD_PRES,
        p.NOMBRE,
        p.CON_PAGA 'VALOR',
        u.IMPORTE 'COSEGURO',
        (p.CON_PAGA - u.IMPORTE) 'WERCHOW'
    FROM
        PRESTADO AS p
    INNER JOIN USOS AS u ON u.PRESTADO = p.COD_PRES
    WHERE
        u.FECHA BETWEEN '${moment(desde).format('YYYY-MM-DD')}' AND '${moment(hasta).format('YYYY-MM-DD')}'
    AND u.ANULADO IS NULL
    AND COD_PRES = '${medico}'     
    
     `
    )
        .then(listado => {
            res.status(200).json(listado[0]);
        })
        .catch(err => {
            res.status(400).json(err);
        });
});

router.get("/buscaconsultaspormedicofa", (req, res, next) => {

    let desde = req.query.desde
    let hasta = req.query.hasta
    let medico = req.query.medico


    db.serviciosSequelize.query(
        `
    
    SELECT
        u.SUC,
        u.FECHA,
        u.SERVICIO,
        u.ORDEN,
        p.COD_PRES,
        p.NOMBRE,
        p.CON_PAGA 'VALOR',
        u.IMPORTE 'COSEGURO',
        (p.CON_PAGA - u.IMPORTE) 'WERCHOW'
    FROM
        PRESTADO AS p
    INNER JOIN USOSFA AS u ON u.PRESTADO = p.COD_PRES
    WHERE
        u.FECHA BETWEEN '${moment(desde).format('DD/MM/YYYY')}' AND '${moment(hasta).format('DD/MM/YYYY')}'
    AND u.ANULADO in ('VERDADERO', '')    
    AND COD_PRES = '${medico}'     
    
     `
    )
        .then(listado => {
            res.status(200).json(listado[0]);
        })
        .catch(err => {
            res.status(400).json(err);
        });
});


router.get("/buscausosporprestador", (req, res, next) => {

    let desde = req.query.desde
    let hasta = req.query.hasta

    db.serviciosSequelize.query(
        `
        SELECT 
            u.SUC,
            m.NOMBRE,
            COUNT(u.CONTRATO) 'USOS',
            ROUND(SUM(u.IMPORTE),2) 'IMPORTE'
        FROM PRESTADO as m
        INNER JOIN USOS as u on u.PRESTADO = m.COD_PRES
        WHERE u.FECHA BETWEEN '${moment(desde).format('YYYY-MM-DD')}' AND '${moment(hasta).format('YYYY-MM-DD')}'
        AND u.ANULADO IS NULL
        GROUP BY u.SUC, m.NOMBRE 
        ORDER BY m.NOMBRE
        
     `
    )
        .then(listado => {
            res.status(200).json(listado[0]);
        })
        .catch(err => {
            res.status(400).json(err);
        });
});

router.get("/buscausosporprestadorfa", (req, res, next) => {

    let desde = req.query.desde
    let hasta = req.query.hasta

    db.serviciosSequelize.query(
        `
        SELECT 
            u.SUC,
            m.NOMBRE,
            COUNT(u.CONTRATO) 'USOS',
            ROUND(SUM(u.IMPORTE),2) 'IMPORTE'
        FROM PRESTADO as m
        INNER JOIN USOSFA as u on u.PRESTADO = m.COD_PRES
        WHERE u.FECHA BETWEEN '${moment(desde).format('DD/MM/YYYY')}' AND '${moment(hasta).format('DD/MM/YYYY')}'
        AND u.ANULADO in ('VERDADERO', '')
        GROUP BY u.SUC, m.NOMBRE
        ORDER BY m.NOMBRE
    
     `
    )
        .then(listado => {
            res.status(200).json(listado[0]);
        })
        .catch(err => {
            res.status(400).json(err);
        });
});

// PLANES ORTODONCIA

router.get("/planesorto", (req, res, next) => {


    db.serviciosSequelize.query(
        `
        SELECT 
           *
        FROM planes_ortodoncia
        WHERE estado = 1
            
     `
    )
        .then(listado => {
            res.status(200).json(listado[0][0]);
        })
        .catch(err => {
            res.status(400).json(err);
        });
});


router.get("/traerplanorto/:id", (req, res, next) => {


    db.serviciosSequelize.query(
        `
        SELECT 
           *
        FROM planes_socio
        WHERE idplansocio = ${req.params.id}
            
     `
    )
        .then(listado => {
            res.status(200).json(listado[0][0]);
        })
        .catch(err => {
            res.status(400).json(err);
        });
});

router.get("/traerplansocio/:id", (req, res, next) => {


    db.serviciosSequelize.query(
        `
        SELECT 
           *
        FROM planes_socio
        WHERE contrato = ${req.params.id}
            
     `
    )
        .then(listado => {
            res.status(200).json(listado[0][0]);
        })
        .catch(err => {
            res.status(400).json(err);
        });
});

router.get("/traerplandni/:id", (req, res, next) => {


    db.serviciosSequelize.query(
        `
        SELECT 
           *
        FROM planes_socio
        WHERE dni = ${req.params.id}
            
     `
    )
        .then(listado => {
            res.status(200).json(listado[0][0]);
        })
        .catch(err => {
            res.status(400).json(err);
        });
});

router.get("/traerplanvisit/:id", (req, res, next) => {


    db.serviciosSequelize.query(
        `
        SELECT 
           *
        FROM planes_visitas
        WHERE idplan = ${req.params.id}
            
     `
    )
        .then(listado => {
            res.status(200).json(listado[0]);
        })
        .catch(err => {
            res.status(400).json(err);
        });
});


router.get("/traervisitas", (req, res, next) => {


    db.serviciosSequelize.query(
        `
        SELECT
            CONCAT(
                'Socio: ',
                ps.contrato,
                '-',
                ps.socio,
                '.',
                ' ',
                'DR/A: ',
                ps.prestador_nombre,
                '.'
            ) 'title',
            1 'allDay',
            pv.fecha 'start',
            pv.fecha 'end',
            pv.nvisita,
            pv.pago
        FROM
            planes_visitas AS pv
        INNER JOIN planes_socio AS ps ON ps.idplansocio = pv.idplan
        
            
     `
    )
        .then(listado => {
            res.status(200).json(listado[0]);
        })
        .catch(err => {
            res.status(400).json(err);
        });
});


//INSERT 

router.post("/regusos", (req, res, next) => {

    const uso = {
        SUC,
        ORDEN,
        CONTRATO,
        NRO_ADH,
        NRO_DOC,
        PLAN,
        EDAD,
        SEXO,
        OBRA_SOC,
        FECHA,
        FEC_CAJA,
        HORA,
        SERVICIO,
        IMPORTE,
        IMP_LIQ,
        VALOR,
        PUESTO,
        PRESTADO,
        OPERADOR,
        EMPRESA,
        RENDIDO,
        ANULADO,
        NUSOS
    } = req.body;


    usos
        .create(uso)
        .then(list => {
            res.status(200).json(list);
        })
        .catch(err => {
            console.log(err)
        });
});

router.post("/regconsulta", (req, res, next) => {

    const consul = {
        CONTRATO,
        FECHA,
        HORA,
        NRO_ORDEN,
        DESTINO,
        COD_PRES,
        IMPORTE,
        ANULADO,
        OPERADOR,
        OPE_ANU,
        DIAGNOSTIC,
        ATENCION,
        NRO_DNI,
        SUC
    } = req.body;

    consulta
        .create(consul)
        .then(list => {
            res.status(200).json(list);
        })
        .catch(err => {
            console.log(err)
        });
});


router.post("/regpractica", (req, res, next) => {

    const practi = ({
        SUC_PRA,
        CONTRATO,
        NRO_DNI,
        FECHA,
        HORA,
        NRO_ORDEN,
        PRAC_REA,
        CANT_PRA,
        IMPORTE,
        ANULADO,
        OPERADOR,
        OPE_ANU,
        COD_PRAC,
        DESCRIP,
        SUC
    } = req.body);


    practica.create(practi)
        .then(list => {
            res.status(200).json(list);
        })
        .catch(err => {
            console.log(err)
        });

});

router.post("/regfarmacia", (req, res, next) => {

    const farma = ({
        CONTRATO,
        FECHA,
        HORA,
        NRO_DOC,
        NRO_ORDEN,
        DESTINO,
        MODO,
        IMPORTE,
        ANULADO,
        OPERADOR,
        OPE_ANU,
        FEC_USO,
        CAN_MEDI,
        MATRICULA,
        HABILITA,
        SUC
    } = req.body);


    farmacia.create(farma)
        .then(list => {
            res.status(200).json(list);
        })
        .catch(err => {
            console.log(err)
        });

});

router.post("/regenfermeria", (req, res, next) => {

    const enfer = {

        CONTRATO,
        FECHA,
        HORA,
        NRO_ORDEN,
        DESTINO,
        IMPORTE,
        ANULADO,
        PRACTICA,
        CANTIDAD,
        OPERADOR,
        OPE_ANU,
        NRO_DNI,
        SUC

    } = req.body


    enfermeria.create(enfer)
        .then(list => {
            res.status(200).json(list);
        })
        .catch(err => {
            console.log(err)
        });

});

router.post("/regmovimcaja", (req, res, next) => {

    const caj = ({
        SUCURSAL,
        PUESTO,
        CODIGO,
        MOVIM,
        CUENTA,
        IMPORTE,
        TIPO,
        SERIE,
        NUMERO,
        CUIT,
        DETALLE,
        DET_AUX,
        FECHA,
        FEC_COMP,
        HORA,
        ORIGEN,
        OPERADOR,
        ASIENTO,
        EXENTO,
        CANT_AFIL,
        CAE,
        VTO_CAE,
    } = req.body);


    caja.create(caj)
        .then(list => {
            res.status(200).json(list);
        })
        .catch(err => {
            console.log(err)
        });

});


// TURNOS

router.post("/regturno", (req, res, next) => {

    let turnoReg = {
        turno,
        fecha,
        hora,
        doctor,
        paciente,
        obra_soc,
        telefono,
        operador,
        estado,
    } = req.body;


    medicosTurnos.create(turnoReg)
        .then(list => {
            res.status(200).json(list);
        })
        .catch(err => {
            console.log(err)
        });

});

// PLANES ORTODONCIA

router.post("/nuevoplanorto", (req, res, next) => {

    let plan = {
        contrato,
        dni,
        socio,
        fecha,
        total,
        pagado,
        saldo,
        estado,
        prestador,
        prestador_nombre,
        operador
    } = req.body;


    planesSocio.create(plan)
        .then(list => {
            res.status(200).json(list);
        })
        .catch(err => {
            console.log(err)
        });

});

router.post("/nuevoplanvisita", (req, res, next) => {

    let visi = {
        idplan,
        nvisita,
        pago,
        fecha,
        pagado,
        operador
    } = req.body;


    planesVisita.create(visi)
        .then(list => {
            res.status(200).json(list);
        })
        .catch(err => {
            console.log(err)
        });

});


// UPDATE

router.put("/updaterendido/:id", (req, res, next) => {

    db.serviciosSequelize.query(
        `
        UPDATE USOS
        SET 
            RENDIDO = 1,
            FECHA_CIERRE = '${moment().format('YYYY-MM-DD')}'
        WHERE FECHA = '${req.params.id}'        
        
        `
    )

        .then(list => {
            res.status(200).json(list);
        })
        .catch(err => {
            console.log(err)
        });
});

// TURNOS

router.put("/updateestadoturno/:id", (req, res, next) => {

    console.log(req.body.params)

    db.serviciosSequelize.query(
        `
        UPDATE MEDICOS_TURNOS
        SET 
            estado = ${req.body.params.estado}            
        WHERE idturno = '${req.params.id}'        
        
        `
    )

        .then(list => {
            res.status(200).json(list);
        })
        .catch(err => {
            console.log(err)
        });
});

router.put("/anularorden/:id", (req, res, next) => {

    console.log(req.body.params)

    db.serviciosSequelize.query(
        `
        UPDATE USOS
        SET 
            ANULADO = 1
        WHERE ORDEN = '${req.params.id}'        
        
        `
    )

        .then(list => {
            res.status(200).json(list);
        })
        .catch(err => {
            console.log(err)
        });
});

router.put("/anularordenenfe/:id", (req, res, next) => {

    console.log(req.body.params)

    db.serviciosSequelize.query(
        `
        UPDATE ENFERMER
        SET 
            ANULADO = 1
        WHERE NRO_ORDEN = '${req.params.id}'        
        
        `
    )

        .then(list => {
            res.status(200).json(list);
        })
        .catch(err => {
            console.log(err)
        });
});

router.put("/anularordenfarm/:id", (req, res, next) => {

    console.log(req.body.params)

    db.serviciosSequelize.query(
        `
        UPDATE FARMACIA
        SET 
            ANULADO = 1
        WHERE NRO_ORDEN = '${req.params.id}'        
        
        `
    )

        .then(list => {
            res.status(200).json(list);
        })
        .catch(err => {
            console.log(err)
        });
});


router.put("/anularordenpract/:id", (req, res, next) => {

    console.log(req.body.params)

    db.serviciosSequelize.query(
        `
        UPDATE PRACTICA
        SET 
            ANULADO = 1
        WHERE NRO_ORDEN = '${req.params.id}'        
        
        `
    )

        .then(list => {
            res.status(200).json(list);
        })
        .catch(err => {
            console.log(err)
        });
});




// PLAN ORTODONCIA

router.put("/imppagovisit/:id", (req, res, next) => {


    db.serviciosSequelize.query(
        `
        UPDATE planes_visitas
        SET 
            pagado = 1,
            pago = ${req.body.pag}
        WHERE idvisita = '${req.params.id}'        
        
        `
    )

        .then(list => {
            res.status(200).json(list);
        })
        .catch(err => {
            console.log(err)
        });
});



router.put("/actplan/:id", (req, res, next) => {


    db.serviciosSequelize.query(
        `
        UPDATE planes_socio
        SET 
            pagado = pagado + ${req.body.pag},
            saldo = saldo - ${req.body.pag}
        WHERE idplansocio = '${req.params.id}'        
        
        `
    )

        .then(list => {
            res.status(200).json(list);
        })
        .catch(err => {
            console.log(err)
        });
});

module.exports = router;
