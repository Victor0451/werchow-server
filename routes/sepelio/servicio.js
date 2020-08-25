const express = require("express");
const router = express.Router();
const sequelize = require("sequelize");

const maestro = require("../../models/werchow/maestro");
const mutual = require("../../models/werchow/mutual");
const adherent = require("../../models/werchow/adherent");
const mutualadh = require("../../models/werchow/mutual_adh");
const servicios = require("../../models/sepelio/servicios");
const PrecioServicio = require("../../models/sepelio/precio_servicio");

router.get("/consultarficha/:id", (req, res) => {
  let id = req.params.id;
  console.log(id);
  maestro
    .findOne({
      attributes: [
        "CONTRATO",
        "ALTA",
        "PLAN",
        "NRO_DOC",
        "SUCURSAL",
        "GRUPO",
        "APELLIDOS",
        "NOMBRES",
        "CALLE",
        "NRO_CALLE",
        "BARRIO",
        "LOCALIDAD",
        "TELEFONO",
        "MOVIL",
        [sequelize.literal("YEAR(CURDATE())-YEAR(`NACIMIENTO`)"), "EDAD"],
        "EMPRESA",
      ],
      where: { NRO_DOC: id },
    })
    .then((titular) => res.json(titular))
    .catch((err) => res.json(err));
});

router.get("/consultarficham/:id", (req, res) => {
  let id = req.params.id;
  console.log(id);
  mutual
    .findOne({
      attributes: [
        "CONTRATO",
        "ALTA",
        "PLAN",
        "NRO_DOC",
        "SUCURSAL",
        "GRUPO",
        "APELLIDOS",
        "NOMBRES",
        "CALLE",
        "NRO_CALLE",
        "BARRIO",
        "LOCALIDAD",
        "TELEFONO",
        "MOVIL",
        [sequelize.literal("YEAR(CURDATE())-YEAR(`NACIMIENTO`)"), "EDAD"],
        "EMPRESA",
      ],
      where: { NRO_DOC: id },
    })
    .then((titular) => res.json(titular))
    .catch((err) => res.json(err));
});

router.get("/consultarfichaadh/:id", (req, res) => {
  let id = req.params.id;
  console.log(id);
  adherent
    .findOne({
      attributes: [
        "CONTRATO",
        "ALTA",
        "PLAN",
        "NRO_DOC",
        "SUCURSAL",
        "APELLIDOS",
        "NOMBRES",
        [sequelize.literal("YEAR(CURDATE())-YEAR(`NACIMIENTO`)"), "EDAD"],
      ],
      where: { NRO_DOC: id },
    })
    .then((titular) => res.json(titular))
    .catch((err) => res.json(err));
});

router.get("/consultarfichaadhm/:id", (req, res) => {
  let id = req.params.id;
  console.log(id);
  mutualadh
    .findOne({
      attributes: [
        "CONTRATO",
        "ALTA",
        "PLAN",
        "NRO_DOC",
        "SUCURSAL",
        "APELLIDOS",
        "NOMBRES",
        [sequelize.literal("YEAR(CURDATE())-YEAR(`NACIMIENTO`)"), "EDAD"],
      ],
      where: { NRO_DOC: id },
    })
    .then((titular) => res.json(titular))
    .catch((err) => res.json(err));
});

router.get("/listadoservicios", (req, res) => {
  servicios
    .findAll()
    .then((titular) => res.json(titular))
    .catch((err) => res.json(err));
});

router.get("/impservicio/:id", (req, res) => {
  const id = req.params.id;
  servicios
    .findOne({
      where: { dni: id },
    })
    .then((servicio) => res.json(servicio))
    .catch((err) => res.json(err));
});

router.post("/nuevoservicio", (req, res) => {
  const nuevoservicio = ({
    contrato: contrato,
    empresa: empresa,
    dni: dni,
    apellido: apellido,
    nombre: nombre,
    edad: edad,
    fecha_fallecimiento: fecha_fallecimiento,
    lugar_fallecimiento: lugar_fallecimiento,
    tipo_servicio: tipo_servicio,
    casa_mortuaria: casa_mortuaria,
    fecha_inhumacion: fecha_inhumacion,
    hora_inhumacion: hora_inhumacion,
    cementerio: cementerio,
    altura: altura,
    peso: peso,
    motivo: motivo,
    retiro: retiro,
    solicitado: solicitado,
    parentesco: parentesco,
    fecha_recepcion: fecha_recepcion,
    sucursal: sucursal,
    estado: estado,
    dni_nuevotitular: dni_nuevotitular,
    operador: opreador,
  } = req.body);

  console.log(nuevoservicio);

  servicios
    .create(nuevoservicio)
    .then((titular) => res.json(titular))
    .catch((err) => res.json(err));
});

router.put("/editarservicio/:id", (req, res) => {
  let id = req.params.id;

  const editarservicio = ({
    contrato: contrato,
    empresa: empresa,
    dni: dni,
    apellido: apellido,
    nombre: nombre,
    edad: edad,
    fecha_fallecimiento: fecha_fallecimiento,
    lugar_fallecimiento: lugar_fallecimiento,
    tipo_servicio: tipo_servicio,
    casa_mortuaria: casa_mortuaria,
    fecha_inhumacion: fecha_inhumacion,
    hora_inhumacion: hora_inhumacion,
    cementerio: cementerio,
    altura: altura,
    peso: peso,
    motivo: motivo,
    retiro: retiro,
    solicitado: solicitado,
    parentesco: parentesco,
    fecha_recepcion: fecha_recepcion,
    sucursal: sucursal,
    estado: estado,
  } = req.body);

  servicios
    .update(editarservicio, { where: { idservicio: id } })
    .then((titular) => res.json(titular))
    .catch((err) => res.json(err));
});

router.get("/precioservicio/:id", (req, res, next) => {
  let id = req.params.id;

  PrecioServicio.findOne({
    attributes: [
      "contado",
      "contado_cremacion",
      "descuento1",
      "descuento1_cremacion",
      "descuento2",
      "descuento2_cremacion",
      "fecha_vigencia",
    ],
    where: { codigo: id },
  })
    .then((cantidad) => {
      res.status(200).json(cantidad);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

module.exports = router;
