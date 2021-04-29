const express = require("express");
const router = express.Router();
const sequelize = require("sequelize");
const Op = sequelize.Op;
const db = require('../../db/database')
const servicioDetalle = require('../../models/sepelio/servicio_detalle')

router.get("/tipodetalle", (req, res) => {
    db.sepelioSequelize
        .query(
            `
     SELECT tipo_detalle as 'value', tipo_detalle as 'label'
     FROM tipo_detalle
     `
        )
        .then((titular) => res.json(titular))
        .catch((err) => res.json(err));
});


router.get("/autos", (req, res) => {
    db.sepelioSequelize
        .query(
            `
     SELECT patente as 'value', concat(patente, ' - ', auto) as 'label'
     FROM autos
     `
        )
        .then((titular) => res.json(titular))
        .catch((err) => res.json(err));
})

router.post("/nuevodetalle", (req, res) => {

    const det = ({
        idservicio,
        detalle,
        lugar,
        monto,
        patente,
        operador,
        fecha,
        observacion,
    } = req.body);

    servicioDetalle.create(det)
        .then((titular) => res.json(titular))
        .catch((err) => res.json(err));

})

router.get("/traerdetalles/:id", (req, res) => {



    servicioDetalle.findAll({
        where: { idservicio: req.params.id }
    })
        .then((titular) => res.json(titular))
        .catch((err) => res.json(err));

})


module.exports = router;
