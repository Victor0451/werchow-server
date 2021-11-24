const express = require("express");
const router = express.Router();
const sequelize = require("sequelize");
const Op = sequelize.Op;
const proveedores = require("../../models/sepelio/proveedores");

router.get("/traerprov", (req, res) => {

    proveedores
        .findAll()
        .then((list) => res.json(list))
        .catch((err) => res.json(err));
});

router.post("/nuevoprov", (req, res) => {
    const prov = {
        razon: razon,
        cuit: cuit,
        domicilio: domicilio,
        telefonos: telefonos,
        estado: estado,
        operador: operador
    } = req.body

    proveedores
        .create(prov)
        .then((list) => res.json(list))
        .catch((err) => res.json(err));
});


router.put("/editartarea/:id", (req, res) => {
    let id = req.params.id;

    const prov = {
        razon: razon,
        cuit: cuit,
        domicilio: domicilio,
        telefonos: telefonos,
        estado: estado,
    } = req.body

    proveedores
        .update(prov, { where: { idproveedor: id } })
        .then((list) => res.json(list))
        .catch((err) => res.json(err));
});

router.delete("/eliminarprov/:id", (req, res) => {
    let id = req.params.id;


    proveedores
        .destroy({ where: { idproveedor: id } })
        .then((list) => res.json(list))
        .catch((err) => res.json(err));
});




module.exports = router;
