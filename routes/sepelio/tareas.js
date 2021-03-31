const express = require("express");
const router = express.Router();
const sequelize = require("sequelize");
const Op = sequelize.Op;
const tareas = require("../../models/sepelio/tareas");


router.get("/traerparcela/:id", (req, res) => {
  let id = req.params.id;
  parcelas
    .findAll({
      attributes: ["idparcela", "parcela", "mza", "lote"],
      where: { idparcela: id },
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



module.exports = router;
