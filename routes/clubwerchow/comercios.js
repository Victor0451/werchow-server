const express = require("express");
const router = express.Router();
const Sequelize = require("sequelize");
const moment = require("moment");
const db = require("../../db/database");

const Op = Sequelize.Op;

const comercios = require("../../models/clubwerchow/comercios");

//GET BY ID

router.get("/comercios", (req, res, next) => {
  comercios
    .findAll()
    .then((listado) => {
      res.status(200).json(listado);
    })
    .catch((err) => {
      console.log(err);
    });
});

router.get("/comercio/:id", (req, res, next) => {

  comercios
    .findOne({
      where: { idcomercio: req.params.id }
    })
    .then((listado) => {
      res.status(200).json(listado);
    })
    .catch((err) => {
      console.log(err);
    });
});

module.exports = router;
