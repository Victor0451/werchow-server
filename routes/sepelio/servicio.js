const express = require("express");
const router = express.Router();
const sequelize = require("sequelize");

const maestro = require("../../models/werchow/maestro");
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
      where: { CONTRATO: id },
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

router.post("/nuevoservicio", (req, res) => {
  const nuevoservicio = ({
    empresa: empresa,
    dni: dni,
    apellido: apellido,
    nombre: nombre,
    edad: edad,
    calle: calle,
    numero: numero,
    barrio: barrio,
    fecha_fallecimiento: fecha_fallecimiento,
    lugar_fallecimiento: lugar_fallecimiento,
    tipo_servicio: tipo_servicio,
    casa_mortuaria: casa_mortuaria,
    fecha_inhumacion: fecha_inhumacion,
    hora_inhumacion: hora_inhumacion,
    cementerio: cementerio,
    retirocuerpo: retirocuerpo,
    tiporetirocuerpo: tiporetirocuerpo,
    traslado: traslado,
    tipotraslado: tipotraslado,
    capar: capar,
    placa: placa,
    tramites: tramites,
    tipotramites: tipotramites,
    aviso: aviso,
    tipoaviso: tipoaviso,
    carroza: carroza,
    tipocarroza: tipocarroza,
    portacorona: portacorona,
    tipococheporta: tipococheporta,
    autoduelo: autoduelo,
    tipoautoduel: tipoautoduel,
    salavel: salavel,
    tiposalavel: tiposalavel,
    ataud: ataud,
    caracteristicas: caracteristicas,
    observacion: observacion,
    precio: precio,
    descuento: descuento,
    uso:uso,
    cremacion:cremacion,    
    estado: estado,
  } = req.body);

  console.log(nuevoservicio);

  servicios
    .create(nuevoservicio)
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
