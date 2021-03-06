const express = require("express");
const router = express.Router();
const sequelize = require("sequelize");
const db = require("../../db/database");
const Op = sequelize.Op;
const ctjt = require("../../models/informes/ctjt");
const cbanco = require("../../models/informes/cbanco");
const cpolicia = require("../../models/informes/cpolicia");
const cconvenio = require("../../models/informes/cconvenio");
const c1000 = require("../../models/informes/c1000");

// EFETIVIDAD COBRADORES

router.get("/cobtotal", (req, res, next) => {
  let mes = req.query.mes;
  let ano = req.query.ano;

  c1000
    .findAll({

      where: {
        zona: { [Op.notIn]: [1, 3, 5, 60, 99] },
        mes: mes,
        ano: ano,
      },
      raw: true,
      order: sequelize.literal("zona ASC"),
    })

    .then((efectividad) => {
      res.status(200).json(efectividad);
    })

    .catch((err) => {
      res.status(400).json(err);
    });
});


// EFECTIVIDAD COBRADORES JUJUY

router.get("/cobw", (req, res, next) => {
  let mes = req.query.mes;
  let ano = req.query.ano;

  c1000
    .findAll({
      where: {
        zona: { [Op.in]: [21, 22, 39, 40, 41, 42, 45, 23, 48, 54, 69] },
        mes: mes,
        ano: ano,
      },
      raw: true,
      order: sequelize.literal("zona ASC"),
    })

    .then((efectividad) => {
      res.status(200).json(efectividad);
    })

    .catch((err) => {
      res.status(400).json(err);
    });
});

// EFECTIVIDAD COBRADORES PALPALA

router.get("/cobl", (req, res, next) => {
  let mes = req.query.mes;
  let ano = req.query.ano;

  c1000
    .findAll({
      where: {
        zona: { [Op.in]: [14, 15] },
        mes: mes,
        ano: ano,
      },
      raw: true,
      order: sequelize.literal("zona ASC"),
    })

    .then((efectividad) => {
      res.status(200).json(efectividad);
    })

    .catch((err) => {
      res.status(400).json(err);
    });
});

// EFECTIVIDAD COBRADORES PERICO

router.get("/cobr", (req, res, next) => {
  let mes = req.query.mes;
  let ano = req.query.ano;

  c1000
    .findAll({
      where: {
        zona: { [Op.in]: [4, 47] },
        mes: mes,
        ano: ano,
      },
      raw: true,
      order: sequelize.literal("zona ASC"),
    })

    .then((efectividad) => {
      res.status(200).json(efectividad);
    })

    .catch((err) => {
      res.status(400).json(err);
    });
});

// EFECTIVIDAD COBRADORES SAN PEDRO

router.get("/cobp", (req, res, next) => {
  let mes = req.query.mes;
  let ano = req.query.ano;

  c1000
    .findAll({
      where: {
        zona: { [Op.in]: [28, 61, 63, 64] },
        mes: mes,
        ano: ano,
      },
      raw: true,
      order: sequelize.literal("zona ASC"),
    })

    .then((efectividad) => {
      res.status(200).json(efectividad);
    })

    .catch((err) => {
      res.status(400).json(err);
    });
});


//   EFECTIVIDAD OFICINA

router.get("/oftotal", (req, res, next) => {
  let mes = req.query.mes;
  let ano = req.query.ano;
  c1000
    .findAll({

      where: {
        zona: { [Op.in]: [1, 3, 5, 60] },
        mes: mes,
        ano: ano,
      },
      raw: true,
      order: sequelize.literal("zona ASC"),
    })
    .then((efectividad) => {
      res.status(200).json(efectividad);
    })

    .catch((err) => {
      res.status(400).json(err);
    });
});


// EFECTIVIDAD OFICINA JUJUY

router.get("/ofw", (req, res, next) => {
  let mes = req.query.mes;
  let ano = req.query.ano;

  c1000
    .findAll({
      where: {
        zona: 1,
        mes: mes,
        ano: ano,
      },
      raw: true,
      order: sequelize.literal("zona ASC"),
    })

    .then((efectividad) => {
      res.status(200).json(efectividad);
    })

    .catch((err) => {
      res.status(400).json(err);
    });
});

// EFECTIVIDAD OFICINA PALPALA

router.get("/ofl", (req, res, next) => {
  let mes = req.query.mes;
  let ano = req.query.ano;

  c1000
    .findAll({
      where: {
        zona: 3,
        mes: mes,
        ano: ano,
      },
      raw: true,
      order: sequelize.literal("zona ASC"),
    })

    .then((efectividad) => {
      res.status(200).json(efectividad);
    })

    .catch((err) => {
      res.status(400).json(err);
    });
});

// EFECTIVIDAD OFICINA PERICO

router.get("/ofr", (req, res, next) => {
  let mes = req.query.mes;
  let ano = req.query.ano;

  c1000
    .findAll({
      where: {
        zona: 5,
        mes: mes,
        ano: ano,
      },
      raw: true,
      order: sequelize.literal("zona ASC"),
    })

    .then((efectividad) => {
      res.status(200).json(efectividad);
    })

    .catch((err) => {
      res.status(400).json(err);
    });
});

// EFECTIVIDAD OFICINA SAN PEDRO

router.get("/ofp", (req, res, next) => {
  let mes = req.query.mes;
  let ano = req.query.ano;

  c1000
    .findAll({
      where: {
        zona: 60,
        mes: mes,
        ano: ano,
      },
      raw: true,
      order: sequelize.literal("zona ASC"),
    })

    .then((efectividad) => {
      res.status(200).json(efectividad);
    })

    .catch((err) => {
      res.status(400).json(err);
    });
});




// EFECTIVIDAD TARJETAS

router.get("/tjttotal", (req, res, next) => {
  let mes = req.query.mes;
  let ano = req.query.ano;

  db.infoSequelize.query(

    `
    select grupo, descr, 
    sum(total) as 'total', 
    sum(fichas) as 'fichas', 
    sum(cobrado) as 'cobrado',
    sum(fichascob) as 'fichascob',
    sum(adelantado) as 'adelantado'
    from ctjt
    where mes = ${mes}
    and ano = ${ano}
    group by grupo, descr

    `
  )

    .then((efectividad) => {
      res.status(200).json(efectividad);
    })

    .catch((err) => {
      res.status(400).json(err);
    });
});


router.get("/tjtl", (req, res, next) => {
  let mes = req.query.mes;
  let ano = req.query.ano;
  ctjt
    .findAll({

      where: {
        sucursal: "L",
        mes: mes,
        ano: ano,
      },
      raw: true,
      order: sequelize.literal("grupo ASC"),
    })

    .then((efectividad) => {
      res.status(200).json(efectividad);
    })

    .catch((err) => {
      res.status(400).json(err);
    });
});

router.get("/tjtr", (req, res, next) => {
  let mes = req.query.mes;
  let ano = req.query.ano;
  ctjt
    .findAll({

      where: {
        sucursal: "R",
        mes: mes,
        ano: ano,
      },
      raw: true,
      order: sequelize.literal("grupo ASC"),
    })

    .then((efectividad) => {
      res.status(200).json(efectividad);
    })

    .catch((err) => {
      res.status(400).json(err);
    });
});

router.get("/tjtp", (req, res, next) => {
  let mes = req.query.mes;
  let ano = req.query.ano;
  ctjt
    .findAll({

      where: {
        sucursal: "P",
        mes: mes,
        ano: ano,
      },
      raw: true,
      order: sequelize.literal("grupo ASC"),
    })

    .then((efectividad) => {
      res.status(200).json(efectividad);
    })

    .catch((err) => {
      res.status(400).json(err);
    });
});

router.get("/tjtw", (req, res, next) => {
  let mes = req.query.mes;
  let ano = req.query.ano;
  ctjt
    .findAll({

      where: {
        sucursal: "W",
        mes: mes,
        ano: ano,
      },
      raw: true,
      order: sequelize.literal("grupo ASC"),
    })

    .then((efectividad) => {
      res.status(200).json(efectividad);
    })

    .catch((err) => {
      res.status(400).json(err);
    });
});

//POLICIA JUJUY

router.get("/poltotal", (req, res, next) => {
  let mes = req.query.mes;
  let ano = req.query.ano;

  db.infoSequelize.query(

    `
    select 'Policia' as 'descr', 
    sum(total) as 'total' , 
    sum(fichas) as 'fichas', 
    sum(cobrado) as 'cobrado', 
    sum(fichascob) as 'fichascob',
    sum(adelantado) as 'adelantado'
    from cpolicia
    where mes = ${mes}
    and ano = ${ano}

    `
  )

    .then((efectividad) => {
      res.status(200).json(efectividad);
    })

    .catch((err) => {
      res.status(400).json(err);
    });
});

router.get("/polw", (req, res, next) => {
  let mes = req.query.mes;
  let ano = req.query.ano;
  cpolicia
    .findAll({

      where: {
        sucursal: "W",
        mes: mes,
        ano: ano,
      },
      raw: true,
    })

    .then((efectividad) => {
      res.status(200).json(efectividad);
    })

    .catch((err) => {
      res.status(400).json(err);
    });
});

//POLICIA PALPALA

router.get("/poll", (req, res, next) => {
  let mes = req.query.mes;
  let ano = req.query.ano;
  cpolicia
    .findAll({

      where: {
        sucursal: "L",
        mes: mes,
        ano: ano,
      },
      raw: true,
    })

    .then((efectividad) => {
      res.status(200).json(efectividad);
    })

    .catch((err) => {
      res.status(400).json(err);
    });
});


//POLICIA PERICO

router.get("/polr", (req, res, next) => {
  let mes = req.query.mes;
  let ano = req.query.ano;
  cpolicia
    .findAll({

      where: {
        sucursal: "R",
        mes: mes,
        ano: ano,
      },
      raw: true,
    })

    .then((efectividad) => {
      res.status(200).json(efectividad);
    })

    .catch((err) => {
      res.status(400).json(err);
    });
});


//POLICIA SAN PEDRO

router.get("/polp", (req, res, next) => {
  let mes = req.query.mes;
  let ano = req.query.ano;
  cpolicia
    .findAll({

      where: {
        sucursal: "p",
        mes: mes,
        ano: ano,
      },
      raw: true,
    })

    .then((efectividad) => {
      res.status(200).json(efectividad);
    })

    .catch((err) => {
      res.status(400).json(err);
    });
});


// BANCO MACRO JUJUY

router.get("/bantotal", (req, res, next) => {
  let mes = req.query.mes;
  let ano = req.query.ano;

  db.infoSequelize.query(

    `
    select 'Banco Macro' as 'descr', 
    sum(total) as 'total' , 
    sum(fichas) as 'fichas', 
    sum(cobrado) as 'cobrado', 
    sum(fichascob) as 'fichascob', 
    sum(adelantado) as 'adelantado'
    from cbanco
    where mes = ${mes}
    and ano = ${ano}

    `
  )

    .then((efectividad) => {
      res.status(200).json(efectividad);
    })

    .catch((err) => {
      res.status(400).json(err);
    });
});


router.get("/banw", (req, res, next) => {
  let mes = req.query.mes;
  let ano = req.query.ano;
  cbanco
    .findAll({

      where: {
        sucursal: 'W',
        mes: mes,
        ano: ano,
      },
      raw: true,
    })

    .then((efectividad) => {
      res.status(200).json(efectividad);
    })

    .catch((err) => {
      res.status(400).json(err);
    });
});


// BANCO MACRO PALPALA

router.get("/banl", (req, res, next) => {
  let mes = req.query.mes;
  let ano = req.query.ano;
  cbanco
    .findAll({

      where: {
        sucursal: 'L',
        mes: mes,
        ano: ano,
      },
      raw: true,
    })

    .then((efectividad) => {
      res.status(200).json(efectividad);
    })

    .catch((err) => {
      res.status(400).json(err);
    });
});

// BANCO MACRO PERICO

router.get("/banr", (req, res, next) => {
  let mes = req.query.mes;
  let ano = req.query.ano;
  cbanco
    .findAll({

      where: {
        sucursal: 'R',
        mes: mes,
        ano: ano,
      },
      raw: true,
    })

    .then((efectividad) => {
      res.status(200).json(efectividad);
    })

    .catch((err) => {
      res.status(400).json(err);
    });
});

// BANCO MACRO SAN PEDRO

router.get("/banp", (req, res, next) => {
  let mes = req.query.mes;
  let ano = req.query.ano;
  cbanco
    .findAll({

      where: {
        sucursal: 'P',
        mes: mes,
        ano: ano,
      },
      raw: true,
    })

    .then((efectividad) => {
      res.status(200).json(efectividad);
    })

    .catch((err) => {
      res.status(400).json(err);
    });
});


// RESUMEN COB SUCURSALES

router.get("/respalofi", (req, res, next) => {
  let mes = req.query.mes;
  let ano = req.query.ano;
  c1000
    .findAll({
      attributes: [
        [sequelize.literal("COALESCE(SUM(total + adelantado))"), "total"],
        [sequelize.literal("COALESCE(SUM(cobrado + adelantado))"), "cobrado"],
      ],
      where: {
        mes: mes,
        ano: ano,
        zona: 3,
      },
      raw: true,
    })

    .then((efectividad) => {
      res.status(200).json(efectividad);
    })

    .catch((err) => {
      res.status(400).json(err);
    });
});

router.get("/resperofi", (req, res, next) => {
  let mes = req.query.mes;
  let ano = req.query.ano;
  c1000
    .findAll({
      attributes: [
        [sequelize.literal("COALESCE(SUM(total + adelantado))"), "total"],
        [sequelize.literal("COALESCE(SUM(cobrado + adelantado))"), "cobrado"],
      ],
      where: {
        mes: mes,
        ano: ano,
        zona: 5,
      },
      raw: true,
    })

    .then((efectividad) => {
      res.status(200).json(efectividad);
    })

    .catch((err) => {
      res.status(400).json(err);
    });
});

router.get("/resspofi", (req, res, next) => {
  let mes = req.query.mes;
  let ano = req.query.ano;
  c1000
    .findAll({
      attributes: [
        [sequelize.literal("COALESCE(SUM(total + adelantado))"), "total"],
        [sequelize.literal("COALESCE(SUM(cobrado + adelantado))"), "cobrado"],
      ],
      where: {
        mes: mes,
        ano: ano,
        zona: 60,
      },
      raw: true,
    })

    .then((efectividad) => {
      res.status(200).json(efectividad);
    })

    .catch((err) => {
      res.status(400).json(err);
    });
});

router.get("/resssjofi", (req, res, next) => {
  let mes = req.query.mes;
  let ano = req.query.ano;
  c1000
    .findAll({
      attributes: [
        [sequelize.literal("COALESCE(SUM(total + adelantado))"), "total"],
        [sequelize.literal("COALESCE(SUM(cobrado + adelantado))"), "cobrado"],
      ],
      where: {
        mes: mes,
        ano: ano,
        zona: 1,
      },
      raw: true,
    })

    .then((efectividad) => {
      res.status(200).json(efectividad);
    })

    .catch((err) => {
      res.status(400).json(err);
    });
});

router.get("/respaltar", (req, res, next) => {
  let mes = req.query.mes;
  let ano = req.query.ano;
  ctjt
    .findAll({
      attributes: [
        [sequelize.literal("COALESCE(SUM(total + adelantado))"), "total"],
        [sequelize.literal("COALESCE(SUM(cobrado + adelantado))"), "cobrado"],
      ],
      where: {
        mes: mes,
        ano: ano,
        sucursal: "L",
      },
      raw: true,
    })

    .then((efectividad) => {
      res.status(200).json(efectividad);
    })

    .catch((err) => {
      res.status(400).json(err);
    });
});

router.get("/respertar", (req, res, next) => {
  let mes = req.query.mes;
  let ano = req.query.ano;
  ctjt
    .findAll({
      attributes: [
        [sequelize.literal("COALESCE(SUM(total + adelantado))"), "total"],
        [sequelize.literal("COALESCE(SUM(cobrado + adelantado))"), "cobrado"],
      ],
      where: {
        mes: mes,
        ano: ano,
        sucursal: "R",
      },
      raw: true,
    })

    .then((efectividad) => {
      res.status(200).json(efectividad);
    })

    .catch((err) => {
      res.status(400).json(err);
    });
});

router.get("/ressptar", (req, res, next) => {
  let mes = req.query.mes;
  let ano = req.query.ano;
  ctjt
    .findAll({
      attributes: [
        [sequelize.literal("COALESCE(SUM(total + adelantado))"), "total"],
        [sequelize.literal("COALESCE(SUM(cobrado + adelantado))"), "cobrado"],
      ],
      where: {
        mes: mes,
        ano: ano,
        sucursal: "P",
      },
      raw: true,
    })

    .then((efectividad) => {
      res.status(200).json(efectividad);
    })

    .catch((err) => {
      res.status(400).json(err);
    });
});

router.get("/resssjtar", (req, res, next) => {
  let mes = req.query.mes;
  let ano = req.query.ano;
  ctjt
    .findAll({
      attributes: [
        [sequelize.literal("COALESCE(SUM(total + adelantado))"), "total"],
        [sequelize.literal("COALESCE(SUM(cobrado + adelantado))"), "cobrado"],
      ],
      where: {
        mes: mes,
        ano: ano,
        sucursal: "W",
      },
      raw: true,
    })

    .then((efectividad) => {
      res.status(200).json(efectividad);
    })

    .catch((err) => {
      res.status(400).json(err);
    });
});

router.get("/respalban", (req, res, next) => {
  let mes = req.query.mes;
  let ano = req.query.ano;
  cbanco
    .findAll({
      attributes: [
        [sequelize.literal("COALESCE(SUM(total + adelantado))"), "total"],
        [sequelize.literal("COALESCE(SUM(cobrado + adelantado))"), "cobrado"],
      ],
      where: {
        mes: mes,
        ano: ano,
        sucursal: "L",
      },
      raw: true,
    })

    .then((efectividad) => {
      res.status(200).json(efectividad);
    })

    .catch((err) => {
      res.status(400).json(err);
    });
});

router.get("/resperban", (req, res, next) => {
  let mes = req.query.mes;
  let ano = req.query.ano;
  cbanco
    .findAll({
      attributes: [
        [sequelize.literal("COALESCE(SUM(total + adelantado))"), "total"],
        [sequelize.literal("COALESCE(SUM(cobrado + adelantado))"), "cobrado"],
      ],
      where: {
        mes: mes,
        ano: ano,
        sucursal: "R",
      },
      raw: true,
    })

    .then((efectividad) => {
      res.status(200).json(efectividad);
    })

    .catch((err) => {
      res.status(400).json(err);
    });
});

router.get("/resspban", (req, res, next) => {
  let mes = req.query.mes;
  let ano = req.query.ano;
  cbanco
    .findAll({
      attributes: [
        [sequelize.literal("COALESCE(SUM(total + adelantado))"), "total"],
        [sequelize.literal("COALESCE(SUM(cobrado + adelantado))"), "cobrado"],
      ],
      where: {
        mes: mes,
        ano: ano,
        sucursal: "P",
      },
      raw: true,
    })

    .then((efectividad) => {
      res.status(200).json(efectividad);
    })

    .catch((err) => {
      res.status(400).json(err);
    });
});

router.get("/resssjban", (req, res, next) => {
  let mes = req.query.mes;
  let ano = req.query.ano;
  cbanco
    .findAll({
      attributes: [
        [sequelize.literal("COALESCE(SUM(total + adelantado))"), "total"],
        [sequelize.literal("COALESCE(SUM(cobrado + adelantado))"), "cobrado"],
      ],
      where: {
        mes: mes,
        ano: ano,
        sucursal: "W",
      },
      raw: true,
    })

    .then((efectividad) => {
      res.status(200).json(efectividad);
    })

    .catch((err) => {
      res.status(400).json(err);
    });
});

router.get("/respalpol", (req, res, next) => {
  let mes = req.query.mes;
  let ano = req.query.ano;
  cpolicia
    .findAll({
      attributes: [
        [sequelize.literal("COALESCE(SUM(total + adelantado))"), "total"],
        [sequelize.literal("COALESCE(SUM(cobrado + adelantado))"), "cobrado"],
      ],
      where: {
        mes: mes,
        ano: ano,
        sucursal: "L",
      },
      raw: true,
    })

    .then((efectividad) => {
      res.status(200).json(efectividad);
    })

    .catch((err) => {
      res.status(400).json(err);
    });
});

router.get("/resperpol", (req, res, next) => {
  let mes = req.query.mes;
  let ano = req.query.ano;
  cpolicia
    .findAll({
      attributes: [
        [sequelize.literal("COALESCE(SUM(total + adelantado))"), "total"],
        [sequelize.literal("COALESCE(SUM(cobrado + adelantado))"), "cobrado"],
      ],
      where: {
        mes: mes,
        ano: ano,
        sucursal: "R",
      },
      raw: true,
    })

    .then((efectividad) => {
      res.status(200).json(efectividad);
    })

    .catch((err) => {
      res.status(400).json(err);
    });
});

router.get("/ressppol", (req, res, next) => {
  let mes = req.query.mes;
  let ano = req.query.ano;
  cpolicia
    .findAll({
      attributes: [
        [sequelize.literal("COALESCE(SUM(total + adelantado))"), "total"],
        [sequelize.literal("COALESCE(SUM(cobrado + adelantado))"), "cobrado"],
      ],
      where: {
        mes: mes,
        ano: ano,
        sucursal: "P",
      },
      raw: true,
    })

    .then((efectividad) => {
      res.status(200).json(efectividad);
    })

    .catch((err) => {
      res.status(400).json(err);
    });
});

router.get("/resssjpol", (req, res, next) => {
  let mes = req.query.mes;
  let ano = req.query.ano;
  cpolicia
    .findAll({
      attributes: [
        [sequelize.literal("COALESCE(SUM(total + adelantado))"), "total"],
        [sequelize.literal("COALESCE(SUM(cobrado + adelantado))"), "cobrado"],
      ],
      where: {
        mes: mes,
        ano: ano,
        sucursal: "W",
      },
      raw: true,
    })

    .then((efectividad) => {
      res.status(200).json(efectividad);
    })

    .catch((err) => {
      res.status(400).json(err);
    });
});

router.get("/respalconv", (req, res, next) => {
  let mes = req.query.mes;
  let ano = req.query.ano;
  cconvenio
    .findAll({
      attributes: [
        [sequelize.literal("COALESCE(SUM(total + adelantado))"), "total"],
        [sequelize.literal("COALESCE(SUM(cobrado + adelantado))"), "cobrado"],
      ],
      where: {
        mes: mes,
        ano: ano,
        sucursal: "L",
      },
      raw: true,
    })

    .then((efectividad) => {
      res.status(200).json(efectividad);
    })

    .catch((err) => {
      res.status(400).json(err);
    });
});

router.get("/resperconv", (req, res, next) => {
  let mes = req.query.mes;
  let ano = req.query.ano;
  cconvenio
    .findAll({
      attributes: [
        [sequelize.literal("COALESCE(SUM(total + adelantado))"), "total"],
        [sequelize.literal("COALESCE(SUM(cobrado + adelantado))"), "cobrado"],
      ],
      where: {
        mes: mes,
        ano: ano,
        sucursal: "R",
      },
      raw: true,
    })

    .then((efectividad) => {
      res.status(200).json(efectividad);
    })

    .catch((err) => {
      res.status(400).json(err);
    });
});

router.get("/resspconv", (req, res, next) => {
  let mes = req.query.mes;
  let ano = req.query.ano;
  cconvenio
    .findAll({
      attributes: [
        [sequelize.literal("COALESCE(SUM(total + adelantado))"), "total"],
        [sequelize.literal("COALESCE(SUM(cobrado + adelantado))"), "cobrado"],
      ],
      where: {
        mes: mes,
        ano: ano,
        sucursal: "P",
      },
      raw: true,
    })

    .then((efectividad) => {
      res.status(200).json(efectividad);
    })

    .catch((err) => {
      res.status(400).json(err);
    });
});

router.get("/resssjconv", (req, res, next) => {
  let mes = req.query.mes;
  let ano = req.query.ano;
  cconvenio
    .findAll({
      attributes: [
        [sequelize.literal("COALESCE(SUM(total + adelantado))"), "total"],
        [sequelize.literal("COALESCE(SUM(cobrado + adelantado))"), "cobrado"],
      ],
      where: {
        mes: mes,
        ano: ano,
        sucursal: "W",
      },
      raw: true,
    })

    .then((efectividad) => {
      res.status(200).json(efectividad);
    })

    .catch((err) => {
      res.status(400).json(err);
    });
});

// APIS WERCHOW NEXT

router.get("/resofi", (req, res, next) => {
  let mes = req.query.mes;
  let ano = req.query.ano;
  c1000
    .findAll({
      attributes: [
        "zona",
        [sequelize.literal("COALESCE(SUM(total + adelantado))"), "total"],
        [sequelize.literal("COALESCE(SUM(cobrado + adelantado))"), "cobrado"],
      ],
      where: {
        mes: mes,
        ano: ano,
        zona: { [Op.in]: [1, 3, 5, 60] },
      },
      raw: true,
      group: ["zona"],
      order: ["zona"],
    })

    .then((efectividad) => {
      res.status(200).json(efectividad);
    })

    .catch((err) => {
      res.status(400).json(err);
    });
});

router.get("/resban", (req, res, next) => {
  let mes = req.query.mes;
  let ano = req.query.ano;
  cbanco
    .findAll({
      attributes: [
        "sucursal",
        [sequelize.literal("COALESCE(SUM(total + adelantado))"), "total"],
        [sequelize.literal("COALESCE(SUM(cobrado + adelantado))"), "cobrado"],
      ],
      where: {
        mes: mes,
        ano: ano,
      },
      raw: true,
      group: ["sucursal"],
      order: ["sucursal"],
    })

    .then((efectividad) => {
      res.status(200).json(efectividad);
    })

    .catch((err) => {
      res.status(400).json(err);
    });
});

router.get("/respol", (req, res, next) => {
  let mes = req.query.mes;
  let ano = req.query.ano;
  cpolicia
    .findAll({
      attributes: [
        "sucursal",
        [sequelize.literal("COALESCE(SUM(total + adelantado))"), "total"],
        [sequelize.literal("COALESCE(SUM(cobrado + adelantado))"), "cobrado"],
      ],
      where: {
        mes: mes,
        ano: ano,
      },
      raw: true,
      group: ["sucursal"],
      order: ["sucursal"],
    })

    .then((efectividad) => {
      res.status(200).json(efectividad);
    })

    .catch((err) => {
      res.status(400).json(err);
    });
});

router.get("/restar", (req, res, next) => {
  let mes = req.query.mes;
  let ano = req.query.ano;
  ctjt
    .findAll({
      attributes: [
        "sucursal",
        [sequelize.literal("COALESCE(SUM(total + adelantado))"), "total"],
        [sequelize.literal("COALESCE(SUM(cobrado + adelantado))"), "cobrado"],
      ],
      where: {
        mes: mes,
        ano: ano,
      },
      raw: true,
      group: ["sucursal"],
      order: ["sucursal"],
    })

    .then((efectividad) => {
      res.status(200).json(efectividad);
    })

    .catch((err) => {
      res.status(400).json(err);
    });
});

router.get("/respercob", (req, res, next) => {
  let mes = req.query.mes;
  let ano = req.query.ano;
  c1000
    .findAll({
      attributes: [
        [sequelize.literal("COALESCE(SUM(total + adelantado))"), "total"],
        [sequelize.literal("COALESCE(SUM(cobrado + adelantado))"), "cobrado"],
      ],
      where: {
        mes: mes,
        ano: ano,
        zona: { [Op.in]: [4, 47] },
      },
      raw: true,
    })

    .then((efectividad) => {
      res.status(200).json(efectividad);
    })

    .catch((err) => {
      res.status(400).json(err);
    });
});

router.get("/respalcob", (req, res, next) => {
  let mes = req.query.mes;
  let ano = req.query.ano;
  c1000
    .findAll({
      attributes: [
        [sequelize.literal("COALESCE(SUM(total + adelantado))"), "total"],
        [sequelize.literal("COALESCE(SUM(cobrado + adelantado))"), "cobrado"],
      ],
      where: {
        mes: mes,
        ano: ano,
        zona: { [Op.in]: [14, 15] },
      },
      raw: true,
    })

    .then((efectividad) => {
      res.status(200).json(efectividad);
    })

    .catch((err) => {
      res.status(400).json(err);
    });
});

router.get("/resspcob", (req, res, next) => {
  let mes = req.query.mes;
  let ano = req.query.ano;
  c1000
    .findAll({
      attributes: [
        [sequelize.literal("COALESCE(SUM(total + adelantado))"), "total"],
        [sequelize.literal("COALESCE(SUM(cobrado + adelantado))"), "cobrado"],
      ],
      where: {
        mes: mes,
        ano: ano,
        zona: { [Op.in]: [28, 63, 64] },
      },
      raw: true,
    })

    .then((efectividad) => {
      res.status(200).json(efectividad);
    })

    .catch((err) => {
      res.status(400).json(err);
    });
});

router.get("/resssjcob", (req, res, next) => {
  let mes = req.query.mes;
  let ano = req.query.ano;
  c1000
    .findAll({
      attributes: [
        [sequelize.literal("COALESCE(SUM(total + adelantado))"), "total"],
        [sequelize.literal("COALESCE(SUM(cobrado + adelantado))"), "cobrado"],
      ],
      where: {
        mes: mes,
        ano: ano,
        zona: { [Op.in]: [21, 22, 23, 39, 40, 41, 42, 43, 45, 53, 66, 69, 77] },
      },
      raw: true,
    })

    .then((efectividad) => {
      res.status(200).json(efectividad);
    })

    .catch((err) => {
      res.status(400).json(err);
    });
});

module.exports = router;
