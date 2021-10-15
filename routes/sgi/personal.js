const express = require("express");
const router = express.Router();
const db = require("../../db/database");
//const Op = Sequelize.Op;

const personal = require("../../models/sgi/personal");

//GET ASESORES

router.get("/traerpersonal", (req, res, next) => {
  personal
    .findAll()
    .then((ventas) => {
      res.status(200).json(ventas);
    })

    .catch((err) => {
      res.status(400).json(err);
    });
});

router.get("/detallespersonal/:id", (req, res, next) => {
  personal
    .findOne({
      where: { idpersonal: req.params.id },
    })
    .then((ventas) => {
      res.status(200).json(ventas);
    })

    .catch((err) => {
      res.status(400).json(err);
    });
});

router.get("/traerrol", (req, res, next) => {
  db.sgiSequelize
    .query(
      `
    select rol as 'value'
    from rol_personal

    `
    )
    .then((ventas) => {
      res.status(200).json(ventas);
    })

    .catch((err) => {
      res.status(400).json(err);
    });
});

// POST PERSONAL

router.post("/registrarpersonal", (req, res, next) => {
  const per = ({ apellido, nombre, dni, alta, rol } = req.body);

  personal
    .create(per)
    .then((ventas) => {
      res.status(200).json(ventas);
    })

    .catch((err) => {
      res.status(400).json(err);
    });
});

module.exports = router;
