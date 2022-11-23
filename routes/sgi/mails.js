const express = require("express");
const router = express.Router();
const db = require('../../db/database')
const Mails = require("../../models/sgi/mails");
const moment = require('moment')




router.get("/listadoops", (req, res, next) => {
  db.sgiSequelize.query(
    `
  
    SELECT id, usuario
    FROM operador
  
  `)
    .then((noticias) => {
      res.status(200).json(noticias[0]);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

//GET Mail

router.get("/listmsj/:id", (req, res, next) => {
  Mails.findAll({
    where: { recibe: req.params.id },
    order: [["idmail", "DESC"]],
  })
    .then((noticias) => {
      res.status(200).json(noticias);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});


router.get("/listmsjenv/:id", (req, res, next) => {
  Mails.findAll({
    where: { envia: req.params.id },
    order: [["idmail", "DESC"]],
  })
    .then((noticias) => {
      res.status(200).json(noticias);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

router.get("/listmsjsinleer/:id", (req, res, next) => {
  Mails.findAll({
    where: { recibe: req.params.id, leido: 0 },
    order: [["idmail", "DESC"]],
  })
    .then((noticias) => {
      res.status(200).json(noticias);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

//INSERT Mail

router.post("/nuevomail", (req, res, next) => {

  const mail = {
    fecha,
    envia,
    recibe,
    descrip,
    codmail,
    asunto,
    leido
  } = req.body


  Mails.create(mail)
    .then((notii) => {
      res.status(200).json(notii);
    })
    .catch((err) => {
      console.log(err);
    });
});


// PUT MAIL

router.put("/leermsj/:id", (req, res, next) => {

  Mails.update(
    {
      leido: 1,
      fecha_leido: `${moment().format('YYYY-MM-DD HH:mm:ss')}`
    },
    {
      where: { idmail: req.params.id }
    }
  )
    .then((notii) => {
      res.status(200).json(notii);
    })
    .catch((err) => {
      console.log(err);
    });
});


module.exports = router;
