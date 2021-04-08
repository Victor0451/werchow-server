const express = require("express");
const router = express.Router();
const sequelize = require("sequelize");
const Op = sequelize.Op;
const db = require('../../db/database')
const moment = require('moment')

router.get("/traerliquidacion", (req, res) => {

    let titulo = `liqguardia${moment().format('MMYYYY')}`

    db.sepelioSequelize.query(

        `
     SELECT operador, SUM(liquidacion) as 'liquidacion', mes_planificacion
     FROM ${titulo}
     GROUP BY operador, mes_planificacion


     `
    )
        .then((titular) => res.json(titular))
        .catch((err) => res.json(err));
});

module.exports = router;
