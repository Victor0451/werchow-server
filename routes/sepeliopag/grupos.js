const express = require("express");
const router = express.Router();
const Sequelize = require("sequelize");
const Op = Sequelize.Op;

const grupos = require("../../models/sepeliospag/grupos");

router.get("/grupos", (req, res, next) => {
  grupos
    .findAll()
    .then((ataud) => {
      res.status(200).json(ataud);
    })
    .catch((err) => {
      console.log(err);
    });
});

module.exports = router;
