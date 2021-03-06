const express = require("express");
const router = express.Router();
const sequelize = require("sequelize");
const db = require("../../db/database");
const Op = sequelize.Op;
const ctjtm = require("../../models/informes/ctjtm");
const c1000m = require("../../models/informes/c1000m");

// EFETIVIDAD COBRADORES

// EFETIVIDAD COBRADORES

router.get("/cobtotal", (req, res, next) => {
  let mes = req.query.mes;
  let ano = req.query.ano;

  c1000m
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

  c1000m
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

  c1000m
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

  c1000m
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

  c1000m
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
  c1000m
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

  c1000m
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

  c1000m
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

  c1000m
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

  c1000m
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
    from ctjtm
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
  ctjtm
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
  ctjtm
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
  ctjtm
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
  ctjtm
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










router.get("/ecobradores", (req, res, next) => {
  let mes = req.query.mes;
  let ano = req.query.ano;

  c1000m
    .findAll({
      attributes: [
        "zona",
        "total",
        "fichas",
        "cobrado",
        "fichascob",
        "adelantado",
      ],
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

//   EFECTIVIDAD OFICINA

router.get("/eoficina", (req, res, next) => {
  let mes = req.query.mes;
  let ano = req.query.ano;
  c1000m
    .findAll({
      attributes: [
        "zona",
        "total",
        "fichas",
        "cobrado",
        "fichascob",
        "adelantado",
      ],
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

// EFECTIVIDAD TARJETAS

router.get("/etarjetapalpala", (req, res, next) => {
  let mes = req.query.mes;
  let ano = req.query.ano;
  ctjtm
    .findAll({
      attributes: [
        "grupo",
        "total",
        "fichas",
        "cobrado",
        "fichascob",
        "adelantado",
      ],
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

router.get("/etarjetaperico", (req, res, next) => {
  let mes = req.query.mes;
  let ano = req.query.ano;
  ctjtm
    .findAll({
      attributes: [
        "grupo",
        "total",
        "fichas",
        "cobrado",
        "fichascob",
        "adelantado",
      ],
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

router.get("/etarjetasanpedro", (req, res, next) => {
  let mes = req.query.mes;
  let ano = req.query.ano;
  ctjtm
    .findAll({
      attributes: [
        "grupo",
        "total",
        "fichas",
        "cobrado",
        "fichascob",
        "adelantado",
      ],
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

router.get("/etarjetassj", (req, res, next) => {
  let mes = req.query.mes;
  let ano = req.query.ano;
  ctjtm
    .findAll({
      attributes: [
        "grupo",
        "total",
        "fichas",
        "cobrado",
        "fichascob",
        "adelantado",
      ],
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


// RESUMEN COB SUCURSALES

router.get("/respercob", (req, res, next) => {
  let mes = req.query.mes;
  let ano = req.query.ano;
  c1000m
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
  c1000m
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
  c1000m
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
  c1000m
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

router.get("/respalofi", (req, res, next) => {
  let mes = req.query.mes;
  let ano = req.query.ano;
  c1000m
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
  c1000m
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
  c1000m
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
  c1000m
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
  ctjtm
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
  ctjtm
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
  ctjtm
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
  ctjtm
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
  c1000m
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



router.get("/restar", (req, res, next) => {
  let mes = req.query.mes;
  let ano = req.query.ano;
  ctjtm
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
  c1000m
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
  c1000m
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
  c1000m
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
  c1000m
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
