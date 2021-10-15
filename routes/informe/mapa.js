const express = require("express");
const router = express.Router();
const db = require("../../db/database");
const moment = require("moment");

router.get("/asesores", (req, res, next) => {
  db.wSequelize
    .query(
      `
        SELECT usu_ide as 'value',usu_nick as 'label'
        from werchow.usuario
        where usu_ide = 'ASESOR'
        and usu_estado = 'ACTIVO'
`
    )
    .then((mapa) => {
      res.status(200).json(mapa);
    })

    .catch((err) => {
      res.status(400).json(err);
    });
});

router.get("/recuperadores", (req, res, next) => {
  db.wSequelize
    .query(
      `
      SELECT usu_ide as 'value',usu_nick as 'label'
      from werchow.usuario
      where usu_ide in (4,7,8,77,97)
  `
    )
    .then((mapa) => {
      res.status(200).json(mapa);
    })

    .catch((err) => {
      res.status(400).json(err);
    });
});

router.get("/mapaasesor", (req, res, next) => {
  let asesor = req.query.asesor;
  let ano = req.query.ano;

  console.log(asesor, ano);

  db.wSequelize
    .query(
      `
      SELECT u.usu_alta as 'anti', u.usu_nick as 'asesor', p.prod_mes as 'mes', COUNT(p.prod_afiliado) as 'ventas', SUM(prod_monto) as 'monto'
      FROM werchow.produccion as p
      INNER JOIN werchow.usuario as u on u.usu_ide = p.prod_asesor
      where p.prod_anio = ${ano}
      and p.prod_estado = 'LIQUIDAR'
      and p.prod_adh = 'V'
      and p.prod_plan != 'NOVELL'
      and u.usu_ide = ${asesor}      
      GROUP BY p.prod_mes, u.usu_nick , u.usu_alta , p.prod_mesn
      ORDER BY p.prod_mesn ASC
      `
    )

    .then((mapa) => {
      res.status(200).json(mapa);
    })

    .catch((err) => {
      res.status(400).json(err);
    });
});

router.get("/maparec", (req, res, next) => {
  let rec = req.query.rec;
  let emp = req.query.emp;
  let desde = req.query.desde;
  let hasta = req.query.hasta;

  db.wSequelize
    .query(
      `
        SELECT u.usu_nick as rec, u.usu_alta as anti, l.liq_accion as 'accion', COUNT(*) as 'cantidad',  SUM(l.liq_monto * l.liq_cuotas) as 'monto', l.liq_emp as 'empresa' 
        FROM werchow.liquidaciones as l
        INNER JOIN werchow.usuario as u on u.usu_ide = l.liq_recup
        where l.liq_fechacarga BETWEEN '${desde}' and '${hasta}'
        and l.liq_recup = ${rec}
        and l.liq_emp = '${emp}'
        and l.liq_accion not in ('PRESTAMO')
        GROUP BY l.liq_accion, l.liq_emp
        ORDER BY l.liq_accion
        `
    )

    .then((mapa) => {
      res.status(200).json(mapa);
    })

    .catch((err) => {
      res.status(400).json(err);
    });
});

router.get("/mapareccamp", (req, res, next) => {
  let rec = req.query.rec;
  let emp = req.query.emp;
  let desde = req.query.desde;
  let hasta = req.query.hasta;

  if (rec === "4") {
    db.sgiSequelize
      .query(
        `
      SELECT c.operador, c.descripcion, COUNT(cc.contrato) as 'cantidad', SUM(cc.cuota) as 'monto', '${emp}' as 'empresa'
      FROM campanas as c
      INNER JOIN campanacasos as cc on c.idcampana = cc.idcampana
      WHERE fechacampana BETWEEN '${desde}' and '${hasta}'        
      AND c.operador = 'mgalian'
      and c.empresa = '${emp}'
      and c.descripcion != 'Policia'
      GROUP BY c.descripcion       
      `
      )

      .then((mapa) => {
        res.status(200).json(mapa);
      })

      .catch((err) => {
        res.status(400).json(err);
      });
  } else if (rec === "97") {
    db.sgiSequelize
      .query(
        `
      SELECT c.operador, c.descripcion, COUNT(cc.contrato) as 'cantidad', SUM(cc.cuota) as 'monto', '${emp}' as 'empresa'
      FROM campanas as c
      INNER JOIN campanacasos as cc on c.idcampana = cc.idcampana
      WHERE fechacampana BETWEEN '${desde}' and '${hasta}'        
      AND c.operador = 'ggimenez'
      and c.empresa = '${emp}'
      and c.descripcion != 'Policia'
      GROUP BY c.descripcion       
      `
      )

      .then((mapa) => {
        res.status(200).json(mapa);
      })

      .catch((err) => {
        res.status(400).json(err);
      });
  }
});

router.get("/maparec2", (req, res, next) => {
  let rec = req.query.rec;
  let emp = req.query.emp;
  let ano = req.query.ano;
  let accion = req.query.accion;

  db.wSequelize
    .query(
      `
      SELECT u.usu_nick as rec, u.usu_alta as anti, l.liq_accion as 'accion', COUNT(*) as 'cantidad',  SUM(l.liq_monto * l.liq_cuotas) as 'monto',MONTH(liq_fechacarga) as 'mes', l.liq_emp as 'empresa' 
      FROM werchow.liquidaciones as l
      INNER JOIN werchow.usuario as u on u.usu_ide = l.liq_recup
      where year(liq_fechacarga) = ${ano}
      and l.liq_recup = ${rec}
      and l.liq_emp = '${emp}'
      and l.liq_accion = '${accion}'
      GROUP BY l.liq_accion, l.liq_emp, MONTH(l.liq_fechacarga)
      ORDER BY MONTH(l.liq_fechacarga) asc

        `
    )

    .then((mapa) => {
      res.status(200).json(mapa);
    })

    .catch((err) => {
      res.status(400).json(err);
    });
});

router.get("/mapacampanasactivas", (req, res, next) => {
  let rec = req.query.rec;
  let emp = req.query.emp;
  let camp = req.query.camp;

  db.sgiSequelize
    .query(
      `
      select cc.estadocaso, cc.contrato, cc.apellido, cc.nombre, cc.calle, cc.nro_calle, cc.barrio, cc.localidad, cc.telefono, cc.movil, cc.cuota, cc.idcaso, cc.accion
      from campanas as c
      INNER JOIN campanacasos as cc on cc.idcampana = c.idcampana
      where c.descripcion = '${camp}'
      and c.empresa = '${emp}'
      and c.operador = '${rec}'
      and cc.fechacampana BETWEEN '${moment()
        .startOf("month")
        .format("YYYY-MM-DD")}' and '${moment()
        .endOf("month")
        .format("YYYY-MM-DD")}'

        `
    )

    .then((mapa) => {
      res.status(200).json(mapa);
    })

    .catch((err) => {
      res.status(400).json(err);
    });
});

router.get("/traeraccionesreg/:id", (req, res, next) => {
  db.sgiSequelize
    .query(
      `
      select *
      from gestioncaso
      where idcaso = ${req.params.id}
      `
    )

    .then((mapa) => {
      res.status(200).json(mapa);
    })

    .catch((err) => {
      res.status(400).json(err);
    });
});

module.exports = router;
