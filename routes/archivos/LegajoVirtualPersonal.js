const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");
const moment = require("moment");
const fs = require("fs");
const legajovirtualPersonal = require("../../models/sgi/legajovirtual_personal");

let storage = multer.diskStorage({
  destination: path.join(__dirname, "../../uploads/legajoPersonal"),
  filename: function (req, file, cb) {
    const fileName = req.params.id + "-" + file.originalname;
    cb(null, fileName);
  },
});

const upload = multer({ storage: storage });

router.post("/uploadfichalegajo/:id", upload.single("file"), (req, res) => {
  const legajo = {
    idpersonal: req.params.id,
    archivo: req.params.id + "-" + req.file.originalname,
    fecha_subida: moment().format("YYYY-MM-DD"),
  };

  legajovirtualPersonal
    .create(legajo)
    .then((leg) => {
      res.status(200).json(leg);
    })
    .catch((err) => {
      console.log(err);
    });

  console.log(`Storage location is ${req.hostname}/${req.file.path}`);
  return res.send(req.file);
});

router.get("/archivo/:id", (req, res) => {
  const id = req.params.id;
  const file = path.join(__dirname, `../../uploads/legajoPersonal/${id}`);
  res.sendFile(file); // Set disposition and send it.
});

router.get("/descargararchivo/:id", (req, res) => {
  const id = req.params.id;
  const file = path.join(__dirname, `../../uploads/legajoPersonal/${id}`);
  res.download(file); // Set disposition and send it.
});

router.get("/listaarchivos/:id", (req, res) => {
  let id = req.params.id;

  legajovirtualPersonal
    .findAll({
      where: { idpersonal: id },
    })
    .then((leg) => {
      res.status(200).json(leg);
    })
    .catch((err) => {
      console.log(err);
    });
});

router.delete("/eliminararchivos/:id", (req, res) => {
  let id = req.params.id;
  const file = path.join(__dirname, `../../uploads/legajoPersonal/${id}`);

  legajovirtualPersonal
    .destroy({
      where: { archivo: id },
    })
    .then((leg) => {
      res.status(200).json(leg);
    })
    .catch((err) => {
      console.log(err);
    });

  fs.unlinkSync(file);
});

module.exports = router;
