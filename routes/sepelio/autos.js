const express = require("express");
const router = express.Router();
const sequelize = require("sequelize");
const Op = sequelize.Op;
const autos = require("../../models/sepelio/autos");
const autosPagosPatente = require("../../models/sepelio/autos_pago_patente");
const autosNovedades = require('../../models/sepelio/autos_novedades')
const historialAutos = require('../../models/sepelio/historial_autos')


router.get("/traerautos", (req, res) => {

    autos
        .findAll({
            where: { estado: 1 }
        })
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


router.post("/nuevoauto", (req, res) => {
    const car = {
        patente: patente,
        auto: auto,
        kilometros: kilometros,
        responsable: responsable,
        nro_poliza: nro_poliza,
        empresa: empresa,
        vencimiento: vencimiento,
        motor: motor,
        chasis: chasis,
        modelo: modelo,
        cobertura: cobertura,
        estado: estado,
        operador: operador
    } = req.body

    autos
        .create(car)
        .then((list) => res.json(list))
        .catch((err) => res.json(err));
});

router.put("/editarauto/:id", (req, res) => {
    const car = {
        auto: auto,
        kilometros: kilometros,
        responsable: responsable,
        nro_poliza: nro_poliza,
        empresa: empresa,
        vencimiento: vencimiento,
        motor: motor,
        chasis: chasis,
        modelo: modelo,
        cobertura: cobertura,
    } = req.body

    autos
        .update(car, {
            where: {
                idauto: req.params.id
            }
        })
        .then((list) => res.json(list))
        .catch((err) => res.json(err));
});



// API POLIZA

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


// API NOVEDADES

router.post("/registrarnovedades", (req, res) => {
    const nov = {
        novedad,
        patente,
        auto,
        operador,
        fecha,
    } = req.body

    autosNovedades
        .create(nov)
        .then((list) => res.json(list))
        .catch((err) => res.json(err));
});


// API HISTORIAL

router.post("/registrarhistorial", (req, res) => {
    const historial = {
        patente,
        idauto,
        operador,
        fecha,
        accion
    } = req.body

    historialAutos
        .create(historial)
        .then((list) => res.json(list))
        .catch((err) => res.json(err));
});

module.exports = router;
