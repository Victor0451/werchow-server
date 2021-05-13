const express = require("express");
const router = express.Router();
const sequelize = require("sequelize");
const Op = sequelize.Op;
const autos = require("../../models/sepelio/autos");
const autosPagosPatente = require("../../models/sepelio/autos_pago_patente");

router.get("/traerautos", (req, res) => {

    autos
        .findAll()
        .then((list) => res.json(list))
        .catch((err) => res.json(err));
});

router.get("/traerauto/:id", (req, res) => {

    autos
        .findOne({
            where: {
                idauto: req.params.id
            }
        })
        .then((list) => res.json(list))
        .catch((err) => res.json(err));
});


router.post("/nuevaauto", (req, res) => {
    const task = {
        title: title,
        allDay: allDay,
        start: start,
        end: end,
        priority: priority,
    } = req.body

    autosPagosPatente
        .create(pago)
        .then((list) => res.json(list))
        .catch((err) => res.json(err));
});

router.put("/editartarea/:id", (req, res) => {
    let id = req.params.id;

    const taskedit = {
        title: title,
        allDay: allDay,
        startstar,
        end: end,
        priority: priority,

    } = req.body;

    autos
        .update(taskedit, { where: { idevents: id } })
        .then((list) => res.json(list))
        .catch((err) => res.json(err));
});

router.put("/renovpol/:id", (req, res) => {
    let id = req.params.id;

    const nupol = {
        empresa: empresa,
        nro_pol: nro_pol,
        vencimiento: vencimiento,
    } = req.body;

    autos
        .update(nupol, { where: { idauto: id } })
        .then((list) => res.json(list))
        .catch((err) => res.json(err));
});

router.delete("/eliminartarea/:id", (req, res) => {
    let id = req.params.id;


    autos
        .destroy({ where: { idevents: id } })
        .then((list) => res.json(list))
        .catch((err) => res.json(err));
});


// APIS PAGO PATENTE

router.post("/nuevopago", (req, res) => {
    const pago = {
        idauto: idauto,
        patente: patente,
        mes: mes,
        ano: ano,
        importe: importe,
        cod_pago: cod_pago,
        fecha: fecha,
        operador: operador
    } = req.body

    autosPagosPatente
        .create(pago)
        .then((list) => res.json(list))
        .catch((err) => res.json(err));
});

router.get("/traerpagospatente/:id", (req, res) => {

    autosPagosPatente
        .findAll({
            where: {
                idauto: req.params.id
            }
        })
        .then((list) => res.json(list))
        .catch((err) => res.json(err));
});

router.delete("/eliminarpagopatente/:id", (req, res) => {

    autosPagosPatente
        .destroy({ where: { idpago: req.params.id } })
        .then((list) => res.json(list))
        .catch((err) => res.json(err));
});

module.exports = router;
