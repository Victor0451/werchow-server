const express = require("express");
const router = express.Router();
const sequelize = require("sequelize");
const Op = sequelize.Op;
const moment = require("moment");
const db = require("../../db/database");

const servicioGasto = require("../../models/sepelio/servicio_gastos");

router.post("/cargargasto", (req, res) => {
  const gasto = req.body;

  servicioGasto
    .create(gasto)
    .then((titular) => {
      res.json(titular);

      db.sepelioSequelize.query(
        `
        UPDATE servicio_gastos
        SET horas = TIMEDIFF(fin, inicio)
        WHERE horas IS NULL 
        `
      );
    })

    .catch((err) => res.json(err));
});

router.put("/editargasto/:id", (req, res) => {
  const gasto = req.body;

  servicioGasto
    .update(gasto, {
      where: { idgastos: req.params.id },
    })
    .then((titular) => {
      res.json(titular);

      db.sepelioSequelize.query(
        `
        UPDATE servicio_gastos
        SET horas = TIMEDIFF(fin, inicio)
        WHERE idgastos = ${req.params.id}
     `
      );
    })

    .catch((err) => res.json(err));
});

router.delete("/eliminargasto/:id", (req, res) => {
  servicioGasto
    .destroy({
      where: { idgastos: req.params.id },
    })
    .then((titular) => {
      res.json(titular);
    })
    .catch((err) => res.json(err));
});

router.get("/listadogastos/:id", (req, res) => {
  servicioGasto
    .findAll({
      where: { idservicio: req.params.id },
    })
    .then((titular) => res.json(titular))
    .catch((err) => res.json(err));
});

router.get("/operadoressep", (req, res) => {
  db.sepelioSequelize
    .query(
      `
   SELECT operador as 'value', operador as 'label'
   FROM operadorsep
   `
    )
    .then((titular) => res.json(titular))
    .catch((err) => res.json(err));
});

router.get("/gastliq", (req, res) => {
  db.sepelioSequelize
    .query(
      `
   SELECT trabajo as 'value', trabajo as 'label'
   FROM honorarios
   `
    )
    .then((titular) => res.json(titular))
    .catch((err) => res.json(err));
});

router.put("/updatetareasservicio/:id", (req, res) => {
  db.sepelioSequelize
    .query(
      `
   UPDATE servicios as s
   SET gastos_cargados = (

      SELECT count(sg.idservicio)
      FROM servicio_gastos as sg
      WHERE sg.idservicio = ${req.params.id}
   )
   WHERE s.idservicio = ${req.params.id}
     
   `
    )
    .then((titular) => res.json(titular))
    .catch((err) => res.json(err));
});

router.put("/updatetareasapservicio/:id", (req, res) => {
  db.sepelioSequelize
    .query(
      `
   UPDATE servicios as s
   SET gastos_cargados = (

      SELECT count(sg.idservicio)
      FROM servicio_gastos as sg
      WHERE sg.idservicio = ${req.params.id}
      AND sg.aprobado IS NULL
   )
   
   WHERE s.idservicio = ${req.params.id} 
   `
    )
    .then((titular) => res.json(titular))
    .catch((err) => res.json(err));
});

router.put("/regliqgasto/:id", (req, res) => {
  let operador = req.body.params.operador;

  db.sepelioSequelize
    .query(
      `
          UPDATE servicio_gastos
          SET liquidado = 1 , 
          fecha_liquidacion = '${moment().format("YYYY-MM-DD HH:mm:ss")}',
          operadorliq = '${operador}'
          WHERE idgastos = ${req.params.id}
 
        `
    )
    .then((titular) => res.json(titular))
    .catch((err) => res.json(err));
});

router.put("/aprobarliqgasto/:id", (req, res) => {
  let operador = req.body.params.operador;

  db.sepelioSequelize
    .query(
      `
          UPDATE servicio_gastos
          SET aprobado = 1 , 
          fecha_aprobacion = '${moment().format("YYYY-MM-DD HH:mm:ss")}',
          operadorap = '${operador}'
          WHERE idgastos = ${req.params.id}

        `
    )
    .then((titular) => res.json(titular))
    .catch((err) => res.json(err));
});

router.put("/aprobartodoliqgasto", (req, res) => {
  let operador = req.body.params.operador;
  let servicio = req.body.params.servicio;

  db.sepelioSequelize
    .query(
      `
          UPDATE servicio_gastos
          SET aprobado = 1 , 
          fecha_aprobacion = '${moment().format("YYYY-MM-DD HH:mm:ss")}',
          operadorap = '${operador}'
          WHERE idservicio = ${servicio}

        `
    )
    .then((titular) => res.json(titular))
    .catch((err) => res.json(err));
});

router.put("/cancelarliqgasto/:id", (req, res) => {
  let operador = req.body.params.operador;

  db.sepelioSequelize
    .query(
      `
          UPDATE servicio_gastos
          SET aprobado = 0 , 
          fecha_aprobacion = '${moment().format("YYYY-MM-DD HH:mm:ss")}',
          operadorap = '${operador}'
          WHERE idgastos = ${req.params.id}
 
        `
    )
    .then((titular) => res.json(titular))
    .catch((err) => res.json(err));
});

router.put("/cancelartodoliqgasto", (req, res) => {
  let operador = req.body.params.operador;
  let servicio = req.body.params.servicio;

  db.sepelioSequelize
    .query(
      `
          UPDATE servicio_gastos
          SET aprobado = 0 , 
          fecha_aprobacion = '${moment().format("YYYY-MM-DD HH:mm:ss")}',
          operadorap = '${operador}'
          WHERE idservicio = ${servicio}
 
        `
    )
    .then((titular) => res.json(titular))
    .catch((err) => res.json(err));
});

module.exports = router;
