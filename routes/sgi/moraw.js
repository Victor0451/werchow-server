const express = require("express");
const router = express.Router();
const sequelize = require("sequelize");
const db = require("../../db/database");
const Op = sequelize.Op;
const m1000 = require("../../models/sgi/m1000");
const mtjt = require("../../models/sgi/mtjt");
const mbanconv = require("../../models/sgi/mbanconv");

// MORA COBRADORES

router.get("/mcobradores", (req, res, next) => {
  m1000
    .findAll({
      attributes: ["zona", "fichas", "mora", "fichasrec", "morarec"],
      where: { zona: { [Op.notIn]: [1, 3, 5, 60, 99] } },
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

router.get("/mtarjetas", (req, res, next) => {
  mtjt
    .findAll({
      attributes: ["grupo", "fichas", "mora", "fichasrec", "morarec"],
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

router.get("/moficina", (req, res, next) => {
  m1000
    .findAll({
      attributes: ["zona", "fichas", "mora", "fichasrec", "morarec"],
      where: { zona: { [Op.in]: [1, 3, 5, 60] } },
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

router.get("/mbanconv", (req, res, next) => {
  mbanconv
    .findAll({
      where: { mes: 10, ano: 2019 },
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
