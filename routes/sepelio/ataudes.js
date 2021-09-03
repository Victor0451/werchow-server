const express = require("express");
const router = express.Router();
const Sequelize = require("sequelize");
const Op = Sequelize.Op;

const Ataudes = require("../../models/sepelio/ataudes");
const servicios = require("../../models/sepelio/servicios");
const historialStock = require("../../models/sepelio/historial_sotck_ataud");

// //INSERT NOTICIA

router.post("/nuevo", (req, res, next) => {
  const ataud = ({
    nombre,
    tipo,
    medidas,
    uso,
    fabricante,
    stock,
    fecha_alta,
    operador,
    estado,
  } = req.body);

  Ataudes.create(ataud)
    .then((ataud) => {
      res.status(200).json(ataud);
    })
    .catch((err) => {
      console.log(err);
    });
});

//GET ATAUDES

router.get("/cantidad", (req, res, next) => {
  let flag = req.query.flag;
  console.log(req.query.flag);

  if (req.query.flag === "1") {
    console.log("sin");
    Ataudes.findAll({
      where: { stock: { [Op.gt]: 0 }, nombre: { [Op.not]: "SIN ATAUD" } },
    })
      .then((cantidad) => {
        res.status(200).json(cantidad);
      })
      .catch((err) => {
        res.status(400).json(err);
      });
  } else {
    console.log("cpn");
    Ataudes.findAll({ where: { stock: { [Op.gt]: 0 } } })
      .then((cantidad) => {
        res.status(200).json(cantidad);
      })
      .catch((err) => {
        res.status(400).json(err);
      });
  }
});

router.get("/stockagotado", (req, res, next) => {
  // Ataudes.findAll({ where: { stock: { [Op.lte]: 5 } } })
  Ataudes.findAll()
    .then((cantidad) => {
      res.status(200).json(cantidad);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

router.get("/ataud/:id", (req, res, next) => {
  Ataudes.findOne({
    where: { idataud: req.params.id },
  })
    .then((cantidad) => {
      res.status(200).json(cantidad);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

router.put("/nuevostock/:id", (req, res, next) => {
  const { stock, observaciones, fecha_reposicion, idataud, operador } =
    req.body;

  console.log(req.body);

  Ataudes.update(
    {
      stock: stock,
      observaciones: observaciones,
      operador: operador,
      fecha_reposicion: fecha_reposicion,
    },
    { where: { idataud: idataud } }
  )
    .then((cantidad) => {
      res.status(200).json(cantidad);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

router.get("/historial/:id", (req, res, next) => {
  historialStock
    .findAll({
      where: {
        idataud: req.params.id,
      },
    })
    .then((cantidad) => {
      res.status(200).json(cantidad);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

router.post("/reghistorial", (req, res, next) => {
  const {
    idataud,
    stock_anterior,
    stock_nuevo,
    fecha_carga,
    fecha_recepcion,
    remito,
    operador,
  } = req.body;

  historialStock
    .create({
      idataud: idataud,
      stock_anterior: stock_anterior,
      stock_nuevo: stock_nuevo,
      fecha_carga: fecha_carga,
      fecha_recepcion: fecha_recepcion,
      remito: remito,
      operador: operador,
    })
    .then((cantidad) => {
      res.status(200).json(cantidad);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

router.put("/updatestock/:id", (req, res, next) => {
  const { nustock } = req.body;

  Ataudes.update({ stock: nustock }, { where: { idataud: req.params.id } })
    .then((cantidad) => {
      res.status(200).json(cantidad);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

router.put("/updatestock2", (req, res, next) => {
  const datos = ({ nustock, nuid, oldstock, oldid } = req.body);

  Ataudes.update({ stock: datos.nustock }, { where: { idataud: datos.nuid } })
    .then((cantidad) => {
      res.status(200).json(cantidad);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
  if (datos.oldid) {
    Ataudes.update(
      { stock: datos.oldstock },
      { where: { idataud: datos.oldid } }
    )
      .then((cantidad) => {
        res.status(200).json(cantidad);
      })
      .catch((err) => {
        res.status(400).json(err);
      });

    servicios
      .update(
        { idataud: datos.nuid },
        { where: { idservicio: datos.idservicio } }
      )
      .then((cantidad) => {
        res.status(200).json(cantidad);
      })
      .catch((err) => {
        res.status(400).json(err);
      });
  }
});
module.exports = router;
