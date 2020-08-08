const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");
const moment = require("moment");
const legajovirtualprestamos = require("../../models/sgi/legajovirtualprestamos");

let storage = multer.diskStorage({
  destination: path.join(__dirname, "../../uploads/legajoPrestamos/werchow"),
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
    empresa: "W",
    fecha_subida: moment().format("YYYY-MM-DD"),
    cod_ptm_leg: `${req.params.id}-${moment().format("YYYY-MM-DD")}`,
  };

  legajovirtualprestamos
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
    `../../uploads/legajoPrestamos/werchow/${id}`
  );
  res.sendFile(file); // Set disposition and send it.
});

router.get("/descargararchivo/:id", (req, res) => {
  const id = req.params.id;
  const file = path.join(
    __dirname,
    `../../uploads/legajoPrestamos/werchow/${id}`
  );
  res.download(file); // Set disposition and send it.
});

router.get("/listaarchivos/:id", (req, res) => {
  let id = req.params.id;

  legajovirtualprestamos
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
