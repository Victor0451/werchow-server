const express = require("express");
const router = express.Router();
const sequelize = require("sequelize");
const db = require("../../db/database");
const Op = sequelize.Op;
const m1000 = require("../../models/informes/m1000");
const mtjt = require("../../models/informes/mtjt");
const mbanconv = require("../../models/informes/mbanconv");


// MORA COBRADORES

router.get("/mcobradores/:id", (req, res, next) => {
  let mes = req.params.id;

  m1000
    .findAll({
      attributes: ["zona", "fichas", "mora", "fichasrec", "morarec"],
      where: { zona: { [Op.notIn]: [1, 3, 5, 60, 99] }, mes: mes },
      raw: true,
      order: sequelize.literal("zona ASC")
    })

    .then(mora => {
      res.status(200).json(mora);
    })

    .catch(err => {
      res.status(400).json(err);
    });
});


// MORA TARJETAS

router.get("/mtarjetas/:id", (req, res, next) => {
  let mes = req.params.id;
  mtjt
    .findAll({
      attributes: ["grupo", "fichas", "mora", "fichasrec", "morarec"],
      where: { mes: mes },
      raw: true,
      order: sequelize.literal("grupo ASC")
    })

    .then(mora => {
      res.status(200).json(mora);
    })

    .catch(err => {
      res.status(400).json(err);
    });
});

// MORA OFICINA

router.get("/moficina/:id", (req, res, next) => {
  let mes = req.params.id;
  m1000
    .findAll({
      attributes: ["zona", "fichas", "mora", "fichasrec", "morarec"],
      where: { zona: { [Op.in]: [1, 3, 5, 60] }, mes: mes },
      raw: true,
      order: sequelize.literal("zona ASC")
    })

    .then(mora => {
      res.status(200).json(mora);
    })

    .catch(err => {
      res.status(400).json(err);
    });
});

// MORA BANCO-CONVENIO

router.get("/mbanconv/:id", (req, res, next) => {
  let mes = req.params.id;
  mbanconv
    .findAll({
      where: { mes: mes, ano: 2019 },
      order: sequelize.literal("id_mora ASC")
    })

    .then(mora => {
      res.status(200).json(mora);
    })

    .catch(err => {
      res.status(400).json(err);
    });
});

module.exports = router;
