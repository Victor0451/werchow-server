const express = require("express");
const router = express.Router();
const sequelize = require("sequelize");
const Op = sequelize.Op;
const ordenesPago = require("../../models/sgi/ordenes_pago");
const detalleOrdenPago = require("../../models/sgi/detalle_orden_pago");
const db = require('../../db/database')



router.get("/norden", (req, res) => {
    db.sgiSequelize.query(

        `
        SELECT idorden
        FROM ordenes_pago
        ORDER BY idorden DESC
        
        `

    )
        .then((list) => res.json(list[0][0]))
        .catch((err) => res.json(err));
});


router.get("/ordenesprestador/:id", (req, res) => {
    db.serviciosSequelize.query(

        `
        SELECT
            u.CONTRATO,
            u.SUC,
            u.FECHA,
            u.SERVICIO,
            u.ORDEN,
            p.COD_PRES,
            p.NOMBRE,
            p.CON_PAGA 'VALOR',
            u.IMPORTE 'IMPORTE',
            u.IMP_LIQ 'LIQUIDAR',            
            u.NUSOS          
        FROM
            PRESTADO AS p
        INNER JOIN USOS AS u ON u.PRESTADO = p.COD_PRES
        WHERE
            u.CONTROL IS NULL
        AND u.ANULADO IS NULL
        AND u.SERVICIO = 'ORDE'
        AND p.COD_PRES = '${req.params.id}'
        
        `

    )
        .then((list) => res.json(list[0]))
        .catch((err) => res.json(err));
});

router.get("/ordenesprestadorfa/:id", (req, res) => {
    db.serviciosSequelize.query(

        `
        SELECT
            u.CONTRATO,
            u.SUC,
            u.FECHA,
            u.SERVICIO,
            u.ORDEN,
            p.COD_PRES,
            p.NOMBRE,
            p.CON_PAGA 'VALOR',
            u.IMPORTE 'IMPORTE',
            u.IMP_LIQ 'LIQUIDAR'   
            
        FROM
            PRESTADO AS p
        INNER JOIN USOSFA AS u ON u.PRESTADO = p.COD_PRES
        WHERE
            u.CONTROL IS NULL
        AND u.ANULADO in ("FALSO", "")
        AND u.SERVICIO = 'ORDE'
        AND p.COD_PRES = '${req.params.id}'
        
        `

    )
        .then((list) => res.json(list[0]))
        .catch((err) => res.json(err));
});

router.get("/practicasprestador/:id", (req, res) => {
    db.serviciosSequelize.query(

        `
        SELECT
            u.CONTRATO,
            u.SUC,
            u.FECHA,
            u.SERVICIO,
            u.ORDEN,
            p.COD_PRES,
            p.NOMBRE,
            p.CON_PAGA 'VALOR',
            u.IMPORTE 'IMPORTE',            
            u.NUSOS,
            u.IMP_LIQ 'LIQUIDAR'               
        FROM
            PRESTADO AS p
        INNER JOIN USOS AS u ON u.PRESTADO = p.COD_PRES
        WHERE
            u.CONTROL IS NULL
        AND u.ANULADO IS NULL
        AND u.SERVICIO NOT IN ("ORDE", "FARM" )
        AND p.COD_PRES = '${req.params.id}'
        
        `

    )
        .then((list) => res.json(list[0]))
        .catch((err) => res.json(err));
});

router.get("/practicasprestadorfa/:id", (req, res) => {
    db.serviciosSequelize.query(

        `
        SELECT
            u.CONTRATO,
            u.SUC,
            u.FECHA,
            u.SERVICIO,
            u.ORDEN,
            p.COD_PRES,
            p.NOMBRE,
            p.CON_PAGA 'VALOR',
            u.IMPORTE 'IMPORTE',
            u.IMP_LIQ 'LIQUIDAR'                      
        FROM
            PRESTADO AS p
        INNER JOIN USOSFA AS u ON u.PRESTADO = p.COD_PRES
        WHERE
            u.CONTROL IS NULL
        AND u.ANULADO in ("FALSO", "")
        AND u.SERVICIO NOT IN ("ORDE", "FARM" )
        AND p.COD_PRES = '${req.params.id}'
        
        `

    )
        .then((list) => res.json(list[0]))
        .catch((err) => res.json(err));
});

router.get("/tipofacturas", (req, res) => {
    db.sgiSequelize.query(

        `
        SELECT
            tipo_factura 'label',
            tipo_factura 'value'
        FROM
            tipo_facturas
        WHERE estado = 1
        `

    )
        .then((list) => res.json(list[0]))
        .catch((err) => res.json(err));
});

router.get("/sinautorizar", (req, res) => {

    ordenesPago
        .findAll(
            { where: { autorizado: 0, estado: 1 } }
        )
        .then((list) => res.json(list))
        .catch((err) => res.json(err));
});


router.get("/detalleorden", (req, res) => {

    db.sgiSequelize.query(

        `
        SELECT *
        FROM detalle_orden_pago
        WHERE norden = '${req.query.id}'
        
        `
    )
        .then((list) => res.json(list[0]))
        .catch((err) => res.json(err));
});



router.get("/traerordenes", (req, res) => {

    let perfil = req.query.perfil
    let user = req.query.user


    if (perfil === "1" || perfil === "3") {
        db.sgiSequelize.query(

            `
        SELECT *
        FROM ordenes_pago   
        ORDER BY 
        fecha DESC,
        pagado ASC


        `
        )
            .then((list) => res.json(list[0]))
            .catch((err) => res.json(err));
    } else {

        db.sgiSequelize.query(

            `
        SELECT *
        FROM ordenes_pago   
        WHERE operador_carga = '${user}'
        ORDER BY pagado ASC

        `
        )
            .then((list) => res.json(list[0]))
            .catch((err) => res.json(err));

    }


});



router.get("/traerordenespendientes", (req, res) => {

    db.sgiSequelize.query(

        `
    SELECT *
    FROM ordenes_pago   
    WHERE autorizado = 0
    ORDER BY idorden DESC
    
    `
    )
        .then((list) => res.json(list[0]))
        .catch((err) => res.json(err));

})



router.post("/nuevaorden", (req, res) => {
    const orPag = {

        fecha: fecha,
        proveedor: proveedor,
        nombre: nombre,
        cuit_cuil: cuit_cuil,
        total: total,
        operador_carga: operador_carga,
        norden: norden,
        observacion: observacion,
        autorizado: autorizado,
        tipo_orden: tipo_orden,
        nfactura: nfactura,
        tipo_factura: tipo_factura,
        fecha_pago: fecha_pago,
        pagado: pagado,
        estado: estado


    } = req.body

    ordenesPago
        .create(orPag)
        .then((list) => res.json(list))
        .catch((err) => res.json(err));
});

router.post("/nuevodetalle", (req, res) => {

    detOrdenPag = {

        norden: norden,
        nconsulta: nconsulta,
        sucursal: sucursal,
        prestador: prestador,
        importe: importe,
        operador_carga: operador_carga,
        fecha: fecha,

    } = req.body

    detalleOrdenPago
        .create(detOrdenPag)
        .then((list) => {
            res.json(list)


        })
        .catch((err) => {
            res.json(err)

        });
});


router.put("/updatecheckusos/:id", (req, res) => {

    let id = req.params.id;

    db.serviciosSequelize.query(

        `
        UPDATE USOS
        SET CONTROL = 1,
            NORDEN = '${req.body.nor}',
            FECHA_CONTROL= '${req.body.fec}'
        WHERE ORDEN = '${id}'

        `
    )
        .then((list) => res.json(list))
        .catch((err) => res.json(err));

});

router.put("/updatecheckusosfa/:id", (req, res) => {

    let id = req.params.id;

    db.serviciosSequelize.query(

        `
            UPDATE USOSFA
            SET CONTROL = 1,
                NORDEN = '${req.body.nor}',
                FECHA_CONTROL= '${req.body.fec}'
            WHERE ORDEN = '${id}'
    
            `
    )
        .then((list) => res.json(list))
        .catch((err) => res.json(err));
});


router.put("/deschekusos/:id", (req, res) => {

    let id = req.params.id;

    db.serviciosSequelize.query(

        `
        UPDATE USOS
        SET CONTROL = NULL,
            NORDEN = NULL,
            FECHA_CONTROL= NULL
        WHERE ORDEN = '${id}'

        `
    )
        .then((list) => res.json(list))
        .catch((err) => res.json(err));

});

router.put("/deschekusosfa/:id", (req, res) => {

    let id = req.params.id;

    db.serviciosSequelize.query(

        `
        UPDATE USOSFA
        SET CONTROL = NULL,
            NORDEN = NULL,
            FECHA_CONTROL= NULL
        WHERE ORDEN = '${id}'

        `
    )
        .then((list) => res.json(list))
        .catch((err) => res.json(err));

});

router.put("/autorizar", (req, res) => {

    db.sgiSequelize.query(

        `
            UPDATE ordenes_pago
            SET autorizado = 1,
                fecha_autorizacion = '${req.body.fec}',
                operador_autorizacion = '${req.body.user}'
            WHERE norden = '${req.body.orden}'
    
            `
    )
        .then((list) => res.json(list))
        .catch((err) => res.json(err));
});

router.put("/pagarorden/:id", (req, res) => {

    db.sgiSequelize.query(

        `
            UPDATE ordenes_pago
            SET pagado = 1                
            WHERE idorden = ${req.params.id}
    
            `
    )
        .then((list) => res.json(list))
        .catch((err) => res.json(err));
});

router.put("/anularorden/:id", (req, res) => {

    db.sgiSequelize.query(

        `
            UPDATE ordenes_pago
            SET estado = 0               
            WHERE idorden = ${req.params.id}
    
            `
    )
        .then((list) => res.json(list))
        .catch((err) => res.json(err));
});

router.delete("/eliminar/:id", (req, res) => {
    let id = req.params.id;

    tabEf
        .destroy({ where: { id: id } })
        .then((list) => res.json(list))
        .catch((err) => res.json(err));
});




module.exports = router;
