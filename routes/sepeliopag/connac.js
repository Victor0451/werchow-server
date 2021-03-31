const express = require("express");
const router = express.Router();
const Sequelize = require("sequelize");
const moment = require("moment");
const db = require("../../db/database");

const Op = Sequelize.Op;

const connac = require("../../models/sepeliospag/connac");

//GET BY ID

router.get("/convenios", (req, res, next) => {
  connac
    .findAll()
    .then((listado) => {
      res.status(200).json(listado);
    })
    .catch((err) => {
      console.log(err);
    });
});

module.exports = router;
