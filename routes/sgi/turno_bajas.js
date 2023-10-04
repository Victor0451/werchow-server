const express = require("express");
const router = express.Router();
const db = require('../../db/database')
const turnoBajas = require("../../models/sgi/turno_bajas");



//INSERT TURNOS

router.post("/registrarturno", (req, res, next) => {

  const turno = {
    contrato: contrato,
    apellido: apellido,
    nombre: nombre,
    dni: dni,
    telefono: telefono,
    movil: movil,
    fecha_pedido: fecha_pedido,
    fecha_turno: fecha_turno,
    operador: operador,
    motivo: motivo,
    empresa: empresa,
    estado: estado,
    respuesta: respuesta,
    operador_atencion: operador_atencion,
    detalle: detalle,
    empresa: empresa
  } = req.body;

  turnoBajas
    .create(turno)
    .then(list => {
      res.status(200).json(list);
    })
    .catch(err => {
      console.log(err)
    });
});

// PUT RESPUESTA

router.put("/cargarrespuesta/:id", (req, res, next) => {

  const respuestaTurno = {
    fecha_atencion: fecha_atencion,
    estado: estado,
    respuesta: respuesta,
    operador_atencion: operador_atencion
  } = req.body;

  turnoBajas
    .update(respuestaTurno,
      { where: { idturno: req.params.id } })
    .then(list => {
      res.status(200).json(list);
    })
    .catch(err => {
      console.log(err)
    });
});


//GET SOCIO

router.get("/motivosatencion", (req, res, next) => {
  db.sgiSequelize.query(

    `
    SELECT 
      idmotivo 'value',
      motivo 'label'
    FROM motivos_atencion
    WHERE estado = 1

  `
  )
    .then(noticias => {
      res.status(200).json(noticias);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});




// GET TURNOS
router.get("/listadoturnos", (req, res, next) => {
  turnoBajas
    .findAll()
    .then(noticias => {
      res.status(200).json(noticias);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});


//GET EXISTENCIA

router.get("/registroexistente/:id", (req, res, next) => {
  turnoBajas
    .findOne({
      where: { dni: req.params.id }
    })
    .then(noticias => {
      res.status(200).json(noticias);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

module.exports = router;
