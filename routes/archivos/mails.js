const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");
const moment = require("moment");
const fs = require("fs")
const db = require("../../db/database");
const Mails = require("../../models/sgi/mails_adjuntos");

let storage = multer.diskStorage({
  destination: path.join(__dirname, "../../uploads/mails"),
  filename: function (req, file, cb) {
    const fileName = file.originalname;
    cb(null, fileName);
  },
});

const upload = multer({ storage: storage });

router.post("/uploadadjunto/:id", upload.single("file"), (req, res) => {

  console.log(`Storage location is ${req.hostname}/${req.file.path}`);

  db.sgiSequelize.query(
    `
    INSERT INTO mails_adjuntos 
    SET adjunto = '${req.file.originalname}',
    tipo= '${req.file.mimetype}',
    codmail = '${req.params.id}'
    
    `
  )
    .then((leg) => {
      res.status(200).json(leg);
    })
    .catch((err) => {
      console.log(err);
    });


  return res.send(req.file);

});



router.get("/listaarchivos/:id", (req, res) => {
  let id = req.params.id;

  db.sgiSequelize.query(`
  
    SELECT *
    FROM mails_adjuntos
    WHERE codmail = '${id}'

  `)
    .then((leg) => {
      res.status(200).json(leg[0]);
    })
    .catch((err) => {
      console.log(err);
    });
});


router.get("/archivo/:id", (req, res) => {
  const id = req.params.id;
  const file = path.join(
    __dirname,
    `../../uploads/mails/${id}`
  );
  res.sendFile(file); // Set disposition and send it.
});

router.get("/descargararchivo/:id", (req, res) => {

  const id = req.params.id;

  const file = path.join(
    __dirname,
    `../../uploads/mails/${id}`
  );

  res.download(file); // Set disposition and send it.
});

router.delete("/eliminararchivos/:id", (req, res) => {
  let id = req.params.id;

  const file = path.join(__dirname, `../../uploads/mails/${id}`);

  fs.unlinkSync(file);

  Mails
  .destroy({
    where: { adjunto: id },
  })
  .then((leg) => {
    res.status(200).json(leg);
  })
  .catch((err) => {
    console.log(err);
  });

  return res.send(req.file);

});



module.exports = router;
