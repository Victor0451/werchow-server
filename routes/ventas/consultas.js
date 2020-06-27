const express = require("express");
const router = express.Router();
const db = require("../../db/database");
//const Op = Sequelize.Op;
//const produccion = require("../../models/werchow/produccion");

//GET AT WERCHOW

router.get("/consultaventas", (req, res, next) => {
  let mes = req.query.mes;
  let ano = req.query.ano;
  db.wSequelize
    .query(
      `
      SELECT 
      p.prod_empre,
      p.prod_mes,
      p.prod_anio,
      p.prod_afiliado,
      p.prod_apeafi,
      p.prod_nomafi,
      p.prod_dniafi,
      p.prod_plan,
      p.prod_recibo,
      p.prod_monto,
      p.prod_pago,
      p.prod_cta_tar,
      p.prod_estado,
      u.usu_nick,
      u.usu_ide,
       (CASE 
          WHEN p.prod_empre = 'W' 
              AND EXISTS( 
                  SELECT NULL
                  FROM maestro
                  WHERE p.prod_dniafi = NRO_DOC		
                  )			
          
          THEN 'CARGADA'           
    
          WHEN p.prod_empre = 'M' 
              AND EXISTS( 
                SELECT NULL
                FROM mutual
                WHERE p.prod_dniafi = NRO_DOC		
                )			

          THEN 'CARGADA'          
          ELSE 'NO CARGADA'
          
      END) AS carga,
      
      (CASE 
          WHEN p.prod_empre = 'W' 
             AND EXISTS( 
               SELECT NULL
               FROM pagos
               WHERE p.prod_recibo = NRO_RECIBO 						
               AND ANO = 2020
               AND movim = 'P'
               )
          THEN 'SI PAGO'
             
    
          WHEN p.prod_empre = 'M' 
             AND EXISTS( 
               SELECT NULL
             FROM pagos_mutual
             WHERE p.prod_recibo = NRO_RECIBO 
             AND ANO = 2020
             AND movim = 'P'
             )
          THEN 'SI PAGO'

          ELSE 'NO PAGO'
          
      END) AS pago
  
      FROM produccion AS p
      INNER JOIN usuario AS u ON p.prod_asesor = u.usu_ide
            
      WHERE p.prod_mes = '${mes}'
      AND p.prod_anio = ${ano}

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
