const express = require("express");
const router = express.Router();
const Sequelize = require("sequelize");
const db = require("../../db/database");
const Op = Sequelize.Op;

const ataudVenta = require("../../models/sepelio/ataud_venta");
const Ataudes = require("../../models/sepelio/ataudes");

// //INSERT VENTA ATAUD

router.post("/nuevaventa", (req, res, next) => {
  const venta = ({
    idataud,
    ataud,
    contrato,
    apellido_fall,
    nombre_fall,
    dni_fall,
    dom_fall,
    ndom_fall,
    barrio_fall,
    telefono_fall,
    apellido_sol,
    nombre_sol,
    dni_sol,
    telefono_sol,
    fecha,
    operador,
  } = req.body);

  ataudVenta
    .create(venta)
    .then((ataud) => {
      res.status(200).json(ataud);
    })
    .catch((err) => {
      console.log(err);
    });
});

// GET VENTAS ATAUDES

router.get("/ventas", (req, res, next) => {
  ataudVenta
    .findAll({})
    .then((cantidad) => {
      res.status(200).json(cantidad);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

router.delete("/eliminarventa/:id", (req, res, next) => {
  const { nustock } = req.body;

  ataudVenta
    .destroy({
      where: { idataudventa: req.params.id },
    })
    .then((cantidad) => {
      res.status(200).json(cantidad);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

router.put("/updatestock/:id", (req, res, next) => {
  db.sepelioSequelize
    .query(
      `
    UPDATE ataudes
    SET stock = stock + 1
    WHERE idataud = ${req.params.id}
    `
    )
    .then((cantidad) => {
      res.status(200).json(cantidad);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

module.exports = router;
