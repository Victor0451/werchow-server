const express = require("express");
const router = express.Router();
const db = require("../../db/database")


router.get("/consultas", (req, res, next) => {

    const query = req.query.consul



    db.wSequelize.query(

        `
        ${query}

        `
    )
        .then(listado => {

            res.status(200).json(listado[0]);
        })
        .catch(err => {
            res.status(400).json(err);
        });
});

router.get("/traerkey", (req, res, next) => {


    db.sgiSequelize.query(

        `
        SELECT *        
        FROM openia_keys
        WHERE estado = 1        

        `
    )
        .then(listado => {

            res.status(200).json(listado[0][0]);
        })
        .catch(err => {
            res.status(400).json(err);
        });
});



module.exports = router;
