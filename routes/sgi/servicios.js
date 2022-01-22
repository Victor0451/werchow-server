const express = require("express");
const router = express.Router();
const db = require("../../db/database")
const moment = require('moment')

const usos = require('../../models/servicios/usos')
const consulta = require('../../models/servicios/consulta')
const practica = require('../../models/servicios/practica')
const farmacia = require('../../models/servicios/farmacia')
const caja = require('../../models/servicios/caja')



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
    SELECT COD_PRES, NOMBRE, DIRECCION, TELEFONOS, HORARIO1, HORARIO2, MAX_DESC, PRECIO_99, SUBSTR(LIS_ESPE,1,3) "SERVICIO"
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

    if (id === 'C_NAZ') {
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

    } else if (id === 'C_SIU') {
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


router.get("/ordenessinrendir", (req, res, next) => {

    db.serviciosSequelize.query(
        `
    SELECT 
        FECHA, 
        COUNT(ORDEN) "CANTIDAD"  
    FROM USOS
    WHERE RENDIDO = 0
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


module.exports = router;
