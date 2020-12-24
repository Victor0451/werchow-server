const express = require("express");
const router = express.Router();
const sequelize = require("sequelize");
const Op = sequelize.Op;
const eventos = require("../../models/sgi/eventos");

router.get("/traereventos", (req, res) => {
  eventos
    .findAll()
    .then((list) => res.json(list))
    .catch((err) => res.json(err));
});

module.exports = router;
