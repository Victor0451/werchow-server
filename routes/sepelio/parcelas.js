const express = require("express");
const router = express.Router();
const sequelize = require("sequelize");
const Op = sequelize.Op;
const parcelas = require("../../models/sepelio/parcelas");
const servicios = require("../../models/sepelio/servicios");

router.get("/parcelaslibres", (req, res) => {
  parcelas
    .findAll({
      attributes: ["idparcela", "parcela", "mza", "lote"],
      where: { asignada: 0 },
    })
    .then((list) => res.json(list))
    .catch((err) => res.json(err));
});

router.get("/traerid/:id", (req, res) => {
  let id = req.params.id;

  parcelas
    .findOne({
      attributes: ["idparcela"],
      where: { dni_extinto: id },
    })
    .then((list) => res.json(list))
    .catch((err) => res.json(err));
});

router.put("/asignarparcela/:id", (req, res) => {
  let id = req.params.id;

  const parcelaAsig = ({
    dni_extinto: dni_extinto,
    ficha: ficha,
    fecha: fecha,
    asignada: asignada,
  } = req.body);

  console.log(id);

  parcelas
    .update(parcelaAsig, { where: { idparcela: id } })
    .then((list) => res.json(list))
    .catch((err) => res.json(err));
});

router.put("/putid", (req, res) => {
  const ides = ({ idservicio: idservicio, idparcela: idparcela } = req.body);

  parcelas
    .update(
      { idservicio: ides.idservicio },
      { where: { idparcela: ides.idparcela } }
    )
    .then((list) => {
      res.json(list);
    })
    .catch((err) => res.json(err));
});

router.put("/putidserv", (req, res) => {
  const ides = ({ idservicio: idservicio, idparcela: idparcela } = req.body);

  servicios
    .update(
      { idparcela: ides.idparcela },
      { where: { idservicio: ides.idservicio } }
    )
    .then((list) => res.json(list))
    .catch((err) => res.json(err));
});

module.exports = router;
