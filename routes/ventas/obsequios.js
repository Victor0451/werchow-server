const express = require("express");
const router = express.Router();
const db = require("../../db/database");
const obsequios = require("../../models/sgi/obsequios");
//const Op = Sequelize.Op;

router.get("/categorias", (req, res) => {
    db.sgiSequelize
        .query(
            `
     SELECT categoria as 'value', categoria as 'label'
     FROM categoria_obsequio
     `
        )
        .then((titular) => res.json(titular))
        .catch((err) => res.json(err));
});

router.get("/stock", (req, res) => {
    obsequios.findAll()
        .then((titular) => res.json(titular))
        .catch((err) => res.json(err));
});

router.get("/traerproducto/:id", (req, res) => {
    obsequios.findOne({ where: { idobsequio: req.params.id } })
        .then((titular) => res.json(titular))
        .catch((err) => res.json(err));
});

router.post("/nuevoproducto", (req, res) => {
    const prod = req.body;

    obsequios.create(prod)
        .then((titular) => res.json(titular))
        .catch((err) => res.json(err));

});

router.put("/nuevostock/:id", (req, res, next) => {
    const nuevoStock = {
        stock,
        fecha_reposicion,
        operador_rep,
    } = req.body;

    obsequios.update(
        {
            stock: nuevoStock.stock,
            operador_rep: nuevoStock.operador,
            fecha_reposicion: nuevoStock.fecha_reposicion,
        },
        { where: { idobsequio: req.params.id } }
    )
        .then((cantidad) => {
            res.status(200).json(cantidad);
        })
        .catch((err) => {
            res.status(400).json(err);
        });
});

module.exports = router;
