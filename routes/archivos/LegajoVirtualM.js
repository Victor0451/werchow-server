const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");
const moment = require("moment");
const legajovirtual = require("../../models/sgi/legajovirtual");

let storage = multer.diskStorage({
  destination: path.join(__dirname, "../../uploads/legajoVirtual/mutual"),
  filename: function (req, file, cb) {
    const fileName = req.params.id + "-" + file.originalname;
    cb(null, fileName);
  },
});

const upload = multer({ storage: storage });

router.post("/uploadfichalegajo/:id", upload.single("file"), (req, res) => {
  const legajo = {
    contrato: req.params.id,
    archivo: req.params.id + "-" + req.file.originalname,
    empresa: 'M',
    fecha_subida: moment().format("YYYY-MM-DD"),
  };

  legajovirtual
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
  const file = path.join(
    __dirname,
    `../../uploads/legajoVirtual/mutual/${id}`
  );
  res.sendFile(file); // Set disposition and send it.
});

router.get("/descargararchivo/:id", (req, res) => {
  const id = req.params.id;
  const file = path.join(
    __dirname,
    `../../uploads/legajoVirtual/mutual/${id}`
  );
  res.download(file); // Set disposition and send it.
});

router.get("/listaarchivos/:id", (req, res) => {
  let id = req.params.id;

  legajovirtual
    .findAll({
      where: { contrato: id },
    })
    .then((leg) => {
      res.status(200).json(leg);
    })
    .catch((err) => {
      console.log(err);
    });
});

module.exports = router;
