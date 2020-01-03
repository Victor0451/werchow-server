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

router.get("/ecobradores", (req, res, next) => {
  let mes = req.query.mes;
  let ano = req.query.ano;

  c1000
    .findAll({
      attributes: [
        "zona",
        "total",
        "fichas",
        "cobrado",
        "fichascob",
        "adelantado"
      ],
      where: {
        zona: { [Op.notIn]: [1, 3, 5, 60, 99] },
        mes: mes,
        ano: ano
      },
      raw: true,
      order: sequelize.literal("zona ASC")
    })

    .then(efectividad => {
      res.status(200).json(efectividad);
    })

    .catch(err => {
      res.status(400).json(err);
    });
});

//   EFECTIVIDAD OFICINA

router.get("/eoficina", (req, res, next) => {
  let mes = req.query.mes;
  let ano = req.query.ano;
  c1000
    .findAll({
      attributes: [
        "zona",
        "total",
        "fichas",
        "cobrado",
        "fichascob",
        "adelantado"
      ],
      where: {
        zona: { [Op.in]: [1, 3, 5, 60] },
        mes: mes,
        ano: ano
      },
      raw: true,
      order: sequelize.literal("zona ASC")
    })
    .then(efectividad => {
      res.status(200).json(efectividad);
    })

    .catch(err => {
      res.status(400).json(err);
    });
});

// EFECTIVIDAD TARJETAS

router.get("/etarjetapalpala", (req, res, next) => {
  let mes = req.query.mes;
  let ano = req.query.ano;
  ctjt
    .findAll({
      attributes: [
        "grupo",
        "total",
        "fichas",
        "cobrado",
        "fichascob",
        "adelantado"
      ],
      where: {
        sucursal: "L",
        mes: mes,
        ano: ano
      },
      raw: true,
      order: sequelize.literal("grupo ASC")
    })

    .then(efectividad => {
      res.status(200).json(efectividad);
    })

    .catch(err => {
      res.status(400).json(err);
    });
});

router.get("/etarjetaperico", (req, res, next) => {
  let mes = req.query.mes;
  let ano = req.query.ano;
  ctjt
    .findAll({
      attributes: [
        "grupo",
        "total",
        "fichas",
        "cobrado",
        "fichascob",
        "adelantado"
      ],
      where: {
        sucursal: "R",
        mes: mes,
        ano: ano
      },
      raw: true,
      order: sequelize.literal("grupo ASC")
    })

    .then(efectividad => {
      res.status(200).json(efectividad);
    })

    .catch(err => {
      res.status(400).json(err);
    });
});

router.get("/etarjetasanpedro", (req, res, next) => {
  let mes = req.query.mes;
  let ano = req.query.ano;
  ctjt
    .findAll({
      attributes: [
        "grupo",
        "total",
        "fichas",
        "cobrado",
        "fichascob",
        "adelantado"
      ],
      where: {
        sucursal: "P",
        mes: mes,
        ano: ano
      },
      raw: true,
      order: sequelize.literal("grupo ASC")
    })

    .then(efectividad => {
      res.status(200).json(efectividad);
    })

    .catch(err => {
      res.status(400).json(err);
    });
});

router.get("/etarjetassj", (req, res, next) => {
  let mes = req.query.mes;
  let ano = req.query.ano;
  ctjt
    .findAll({
      attributes: [
        "grupo",
        "total",
        "fichas",
        "cobrado",
        "fichascob",
        "adelantado"
      ],
      where: {
        sucursal: "W",
        mes: mes,
        ano: ano
      },
      raw: true,
      order: sequelize.literal("grupo ASC")
    })

    .then(efectividad => {
      res.status(200).json(efectividad);
    })

    .catch(err => {
      res.status(400).json(err);
    });
});

//POLICIA

router.get("/epolicia", (req, res, next) => {
  let mes = req.query.mes;
  let ano = req.query.ano;
  cpolicia
    .findAll({
      attributes: [
        "tipo",
        "total",
        "fichas",
        "cobrado",
        "fichascob",
        "adelantado"
      ],
      where: {
        mes: mes,
        ano: ano
      },
      raw: true
    })

    .then(efectividad => {
      res.status(200).json(efectividad);
    })

    .catch(err => {
      res.status(400).json(err);
    });
});

// BANCO MACRO

router.get("/ebanco", (req, res, next) => {
  let mes = req.query.mes;
  let ano = req.query.ano;
  cbanco
    .findAll({
      attributes: [
        "tipo",
        "total",
        "fichas",
        "cobrado",
        "fichascob",
        "adelantado"
      ],
      where: {
        mes: mes,
        ano: ano
      },
      raw: true
    })

    .then(efectividad => {
      res.status(200).json(efectividad);
    })

    .catch(err => {
      res.status(400).json(err);
    });
});

// CONVENIOS

router.get("/econvenios", (req, res, next) => {
  let mes = req.query.mes;
  let ano = req.query.ano;
  cconvenio
    .findAll({
      attributes: [
        "tipo",
        "total",
        "fichas",
        "cobrado",
        "fichascob",
        "adelantado"
      ],
      where: {
        mes: mes,
        ano: ano
      },
      raw: true
    })

    .then(efectividad => {
      res.status(200).json(efectividad);
    })

    .catch(err => {
      res.status(400).json(err);
    });
});

module.exports = router;
