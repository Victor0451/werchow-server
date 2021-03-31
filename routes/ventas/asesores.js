const express = require("express");
const router = express.Router();
const db = require("../../db/database");
//const Op = Sequelize.Op;

//GET ASESORES

router.get("/asesoresactivos", (req, res, next) => {

    db.wSequelize.query(
        `
        SELECT usu_ide, usu_apellido, usu_nombre, usu_nick, usu_alta
        FROM usuario
        WHERE usu_estado = 'ACTIVO'
        AND usu_perfil= 'ASESOR'
        `
    )
        .then((ventas) => {
            res.status(200).json(ventas);
        })

        .catch((err) => {
            res.status(400).json(err);
        });
});

router.get("/detalleasesor/:id", (req, res, next) => {

    db.wSequelize.query(
        `
        SELECT usu_ide, 
               usu_apellido,
               usu_nombre, 
               usu_dni,
               usu_nick, 
               usu_alta, 
               usu_grupo, 
               
               (select COUNT(prod_afiliado)
               from produccion
               where prod_asesor = ${req.params.id}
               and prod_estado = 'LIQUIDAR'
               and prod_plan = 'NOVELL'
                ) as 'novell',
        
                (select COUNT(prod_afiliado)
                from produccion
                where prod_asesor = ${req.params.id}
                and prod_estado = 'LIQUIDAR'
                and prod_pago = 'POLICIA'
                ) as 'policia',
        
                (select COUNT(prod_afiliado)
                from produccion
                where prod_asesor = ${req.params.id}
                and prod_estado = 'LIQUIDAR'
                and prod_pago != 'POLICIA'
                and prod_plan != 'NOVELL'
                ) as 'resto'
        
        FROM usuario as u  
        WHERE usu_ide = ${req.params.id}
        `
    )
        .then((ventas) => {
            res.status(200).json(ventas);
        })

        .catch((err) => {
            res.status(400).json(err);
        });
});



module.exports = router;
