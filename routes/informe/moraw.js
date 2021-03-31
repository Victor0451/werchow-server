const express = require("express");
const router = express.Router();
const sequelize = require("sequelize");
const db = require("../../db/database");
const Op = sequelize.Op;
const m1000 = require('../../models/informes/m1000')
const mtjt = require('../../models/informes/mtjt')



// MORA OFICINA

router.get("/morasoof", (req, res, next) => {

  let mes = req.query.mes;
  let ano = req.query.ano;

  m1000.findAll({
    where: {
      zona: { [Op.in]: [1, 3, 5, 60] },
      mes: mes,
      ano: ano

    }
  })


    .then((list) => res.json(list))
    .catch((err) => res.json(err));
});

// MORA COBRADOR

router.get("/morasoofcob", (req, res, next) => {

  let mes = req.query.mes;
  let ano = req.query.ano;

  m1000.findAll({
    where: {
      zona: { [Op.notIn]: [1, 3, 5, 60] },
      mes: mes,
      ano: ano

    }
  })


    .then((list) => res.json(list))
    .catch((err) => res.json(err));
});

// MORA TARJETA

router.get("/morasotjt", (req, res, next) => {

  let mes = req.query.mes;
  let ano = req.query.ano;

  mtjt.findAll({
    where: {
      mes: mes,
      ano: ano

    }
  })

    .then((list) => res.json(list))
    .catch((err) => res.json(err));
});


module.exports = router;
