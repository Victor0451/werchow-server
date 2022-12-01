const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");
const moment = require("moment");
const cajaSucursales = require("../../models/sgi/movimiento_caja_sucursales");
const legajoCaja = require("../../models/sgi/legajovirtualcajas");

const db = require("../../db/database");

let storage = multer.diskStorage({
  destination: path.join(__dirname, "../../uploads/legajoVirtualCajasSucursales"),
  filename: function (req, file, cb) {
    const fileName = req.params.id + "-" + file.originalname;
    cb(null, fileName);
  },
});

const upload = multer({ storage: storage });


router.post("/registrarcaja", (req, res) => {
  const caja = {
    entrada,
    salida,
    valor_depositar,
    fecha_caja,
    fecha_carga,
    operador,
    sucursal,
  } = req.body

  cajaSucursales
    .create(caja)
    .then((list) => res.json(list))
    .catch((err) => res.json(err));
});

router.post("/uploadarchivo/:id", upload.single("file"), (req, res) => {

  let caja = {
    archivo: req.params.id + "-" + req.file.originalname,
    idcaja: req.params.id,
    fecha_subida: moment().format('YYYY-MM-DD HH:mm:ss')
  }

  legajoCaja
    .create(caja)
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
    `../../uploads/legajoVirtualCajasSucursales/${id}`);
  res.sendFile(file); // Set disposition and send it.
});

router.get("/descargararchivo/:id", (req, res) => {
  const id = req.params.id;
  const file = path.join(
    __dirname,
    `../../uploads/legajoVirtualCajasSucursales/${id}`
  );
  res.download(file); // Set disposition and send it.
});

router.get("/listaarchivos/:id", (req, res) => {
  let id = req.params.id;

  db.sgiSequelize.query(
    `
  SELECT *
  FROM legajo_virtual_cajas
  WHERE idcaja = ${id}
`
  )
    .then((leg) => {
      res.status(200).json(leg[0]);
    })
    .catch((err) => {
      console.log(err);
    });
});

router.get("/listadocajas/:id", (req, res) => {

  console.log(req.params.id)

  if (req.params.id === 'vlongo' ||
    req.params.id === 'joaquini' ||
    req.params.id === 'isantiago' ||
    req.params.id === 'jcmorales' ||
    req.params.id === 'nquintana' ||
    req.params.id === 'emoreno'
  ) {
    cajaSucursales.findAll()
      .then((leg) => {
        res.status(200).json(leg);
      })
      .catch((err) => {
        console.log(err);
      });
  } else {

    cajaSucursales.findAll({
      where: { operador: `${req.params.id}` }
    })
      .then((leg) => {
        res.status(200).json(leg);
      })
      .catch((err) => {
        console.log(err);
      });

  }
});

router.delete("/eliminararchivos/:id", (req, res) => {
  let id = req.params.id;
  const file = path.join(__dirname, `./../uploads/legajoVirtualCajasSucursales/${id}`);

  legajoCaja
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
