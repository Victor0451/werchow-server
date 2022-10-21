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
    AND DIRECCION LIKE '%OTERO%'
    
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
    SELECT COD_PRES, NOMBRE, DIRECCION, TELEFONOS, HORARIO1, HORARIO2, MAX_DESC, PRECIO_99, SUBSTR(LIS_ESPE,1,3) "SERVICIO", CON_PAGA
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

    if (id === 'C_YEV') {
        db.serviciosSequelize.query(
            `
        SELECT CODIGOS, DESCRIP, PRECIO_06 "IMPORTE", idpractica
        FROM AUT_PRAC
        WHERE COD_PRES06 = '${req.params.id}'
            
         `
        )
            .then(listado => {
                res.status(200).json(listado[0]);
            })
            .catch(err => {
                res.status(400).json(err);
            });

    } else if (id === 'C_PAR') {
        db.serviciosSequelize.query(
            `
            SELECT CODIGOS, DESCRIP, PRECIO_02 "IMPORTE", idpractica
            FROM AUT_PRAC
            WHERE COD_PRES02 = '${req.params.id}'
                
             `
        )
            .then(listado => {
                res.status(200).json(listado[0]);
            })
            .catch(err => {
                res.status(400).json(err);
            });

    } else if (id === 'C_BIO') {
        db.serviciosSequelize.query(
            `
        SELECT CODIGOS, DESCRIP, PRECIO_13 "IMPORTE", idpractica
        FROM AUT_PRAC
        WHERE COD_PRES13 = '${req.params.id}'
            
         `
        )
            .then(listado => {
                res.status(200).json(listado[0]);
            })
            .catch(err => {
                res.status(400).json(err);
            });

    } else if (id === 'C_CVA') {
        db.serviciosSequelize.query(
            `
        SELECT CODIGOS, DESCRIP, PRECIO_03 "IMPORTE", idpractica
        FROM AUT_PRAC
        WHERE COD_PRES03 = '${req.params.id}'
            
         `
        )
            .then(listado => {
                res.status(200).json(listado[0]);
            })
            .catch(err => {
                res.status(400).json(err);
            });

    } else if (id === 'C_TEM') {
        db.serviciosSequelize.query(
            `
        SELECT CODIGOS, DESCRIP, PRECIO_02 "IMPORTE", idpractica
        FROM AUT_PRAC
        WHERE COD_PRES02 = '${req.params.id}'
            
         `
        )
            .then(listado => {
                res.status(200).json(listado[0]);
            })
            .catch(err => {
                res.status(400).json(err);
            });

    } else if (id === 'C_SOT') {
        db.serviciosSequelize.query(
            `
        SELECT CODIGOS, DESCRIP, PRECIO_14 "IMPORTE", idpractica
        FROM AUT_PRAC
        WHERE COD_PRES14 = '${req.params.id}'
            
         `
        )
            .then(listado => {
                res.status(200).json(listado[0]);
            })
            .catch(err => {
                res.status(400).json(err);
            });

    } else if (id === 'C_KCA') {
        db.serviciosSequelize.query(
            `
            SELECT CODIGOS, DESCRIP, PRECIO_17 "IMPORTE", idpractica
            FROM AUT_PRAC
            WHERE COD_PRES17 = '${req.params.id}'
                
             `
        )
            .then(listado => {
                res.status(200).json(listado[0]);
            })
            .catch(err => {
                res.status(400).json(err);
            });


    } else if (id === 'C_MIN') {
        db.serviciosSequelize.query(
            `
            SELECT CODIGOS, DESCRIP, PRECIO_01 "IMPORTE", idpractica
            FROM AUT_PRAC
            WHERE COD_PRES01 = '${req.params.id}'
                
             `
        )
            .then(listado => {
                res.status(200).json(listado[0]);
            })
            .catch(err => {
                res.status(400).json(err);
            });


    } else if (id === 'C_OVI') {
        db.serviciosSequelize.query(
            `
            SELECT CODIGOS, DESCRIP, PRECIO_04 "IMPORTE", idpractica
            FROM AUT_PRAC
            WHERE COD_PRES04 = '${req.params.id}'
                
             `
        )
            .then(listado => {
                res.status(200).json(listado[0]);
            })
            .catch(err => {
                res.status(400).json(err);
            });


    } else if (id === 'C_CAB') {
        db.serviciosSequelize.query(
            `
            SELECT CODIGOS, DESCRIP, PRECIO_02 "IMPORTE", idpractica
            FROM AUT_PRAC
            WHERE COD_PRES02 = '${req.params.id}'
                
             `
        )
            .then(listado => {
                res.status(200).json(listado[0]);
            })
            .catch(err => {
                res.status(400).json(err);
            });


    } else if (id === 'C_FCD') {
        db.serviciosSequelize.query(
            `
            SELECT CODIGOS, DESCRIP, PRECIO_19 "IMPORTE", idpractica
            FROM AUT_PRAC
            WHERE COD_PRES19 = '${req.params.id}'
                
             `
        )
            .then(listado => {
                res.status(200).json(listado[0]);
            })
            .catch(err => {
                res.status(400).json(err);
            });


    } else if (id === 'C_CIB') {
        db.serviciosSequelize.query(
            `
            SELECT CODIGOS, DESCRIP, PRECIO_11 "IMPORTE", idpractica
            FROM AUT_PRAC
            WHERE COD_PRES11 = '${req.params.id}'
                
             `
        )
            .then(listado => {
                res.status(200).json(listado[0]);
            })
            .catch(err => {
                res.status(400).json(err);
            });


    }

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
        FECHA, 
        COUNT(ORDEN) "CANTIDAD"  
    FROM USOS
    WHERE RENDIDO = 0
    AND ANULADO IS NULL
    GROUP BY FECHA
    
        
     `
    )
        .then(listado => {
            res.status(200).json(listado[0]);
        })
        .catch(err => {
            res.status(400).json(err);
        });
});

router.get("/ordenespordia/:id", (req, res, next) => {

    db.serviciosSequelize.query(
        `
    SELECT 
        SERVICIO, 
        COUNT(ORDEN) "CANTIDAD",
        SUM(IMPORTE)  "IMPORTE"
    FROM USOS
    WHERE RENDIDO = 0
    AND FECHA = '${req.params.id}'
    AND ANULADO IS NULL
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

router.get("/chekcaja/:id", (req, res, next) => {

    db.serviciosSequelize.query(
        `
            SELECT 
                FECHA                
            FROM CAJA 
            WHERE FECHA = '${req.params.id}'
            
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


router.get("/verificaruso/:id", (req, res, next) => {

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
        VALOR,
        PUESTO,
        PRESTADO,
        OPERADOR,
        EMPRESA,
        RENDIDO,
        ANULADO
    } = req.body;

    console.log(res.body)

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

module.exports = router;
