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

router.get("/ecobradores/:id", (req, res, next) => {
  let mes = req.params.id;
  c1000
    .findAll({
      attributes: ["zona", "total", "fichas", "cobrado", "fichascob"],
      where: {
        zona: { [Op.notIn]: [1, 3, 5, 60, 99] },
        mes: mes
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

router.get("/eoficina/:id", (req, res, next) => {
  let mes = req.params.id;
  c1000
    .findAll({
      attributes: ["zona", "total", "fichas", "cobrado", "fichascob"],
      where: {
        zona: { [Op.in]: [1, 3, 5, 60] },
        mes: mes
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

router.get("/etarjetapalpala/:id", (req, res, next) => {
  let mes = req.params.id;
  ctjt
    .findAll({
      attributes: ["grupo", "total", "fichas", "cobrado", "fichascob"],
      where: {
        sucursal: "L",
        mes: mes
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

router.get("/etarjetaperico/:id", (req, res, next) => {
  let mes = req.params.id;
  ctjt
    .findAll({
      attributes: ["grupo", "total", "fichas", "cobrado", "fichascob"],
      where: {
        sucursal: "R",
        mes: mes
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

router.get("/etarjetasanpedro/:id", (req, res, next) => {
  let mes = req.params.id;
  ctjt
    .findAll({
      attributes: ["grupo", "total", "fichas", "cobrado", "fichascob"],
      where: {
        sucursal: "P",
        mes: mes
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

router.get("/etarjetassj/:id", (req, res, next) => {
  let mes = req.params.id;
  ctjt
    .findAll({
      attributes: ["grupo", "total", "fichas", "cobrado", "fichascob"],
      where: {
        sucursal: "W",
        mes: mes
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

router.get("/epolicia/:id", (req, res, next) => {
  let mes = req.params.id;
  cpolicia
    .findAll({
      attributes: ["tipo", "total", "fichas", "cobrado", "fichascob"],
      where: {
        mes: mes
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

router.get("/ebanco/:id", (req, res, next) => {
  let mes = req.params.id;
  cbanco
    .findAll({
      attributes: ["tipo", "total", "fichas", "cobrado", "fichascob"],
      where: {
        mes: mes
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

router.get("/econvenios/:id", (req, res, next) => {
  let mes = req.params.id;
  cconvenio
    .findAll({
      attributes: ["tipo", "total", "fichas", "cobrado", "fichascob"],
      where: {
        mes: mes
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
