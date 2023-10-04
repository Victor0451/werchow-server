const express = require("express");
const router = express.Router();
const Sequelize = require("sequelize");
const moment = require("moment");
const db = require("../../db/database");

const Op = Sequelize.Op;

const maestro = require("../../models/werchow/maestro");
const prestamos = require("../../models/sgi/prestamos");
const prestamosEmpleados = require("../../models/sgi/prestamos_empleados");
const prestamosEmpleadosCobro = require("../../models/sgi/prestamos_empleados_cobro");
const historialAprobacion = require("../../models/sgi/historial_aprobacion_prestamos");

//GET BY ID

router.get("/consultarficha/:id", (req, res) => {
  let id = req.params.id;

  maestro
    .findOne({
      attributes: [
        "CONTRATO",
        "ALTA",
        "NRO_DOC",
        "SUCURSAL",
        "GRUPO",
        "APELLIDOS",
        "NOMBRES",
        "CALLE",
        "NRO_CALLE",
        "BARRIO",
        "LOCALIDAD",
        "TELEFONO",
        "MOVIL",
      ],
      where: { CONTRATO: id },
    })
    .then((titular) => res.json(titular))
    .catch((err) => res.json(err));
});

router.get("/prestamosactivos/:id", (req, res, next) => {
  let id = req.params.id;

  prestamos
    .findAll({
      attributes: [
        "ptm_fechasol",
        "ptm_op",
        "ptm_ficha",
        "ptm_prestamo",
        "ptm_cuotas",
        "ptm_valcuota",
        "ptm_estado",
      ],
      where: { ptm_ficha: id, ptm_estado: "APROBADO" },
    })
    .then((prestamo) => {
      res.status(200).json(prestamo);
    })
    .catch((err) => {
      console.log(err);
    });
});

router.get("/listadoprestamos", (req, res) => {
  let desde = req.query.desde;
  let hasta = req.query.hasta;
  let estado = req.query.estado;

  prestamos
    .findAll({
      where: {
        ptm_fechasol: { [Op.between]: [desde, hasta] },
        ptm_estado: estado,
      },
    })
    .then((titular) => res.json(titular))
    .catch((err) => res.json(err));
});

router.get("/listadoprestamospendientes", (req, res) => {
  prestamos
    .findAll({
      where: {
        ptm_estado: "PENDIENTE",
      },
    })
    .then((titular) => res.json(titular))
    .catch((err) => res.json(err));
});

router.get("/listadoprestamos2", (req, res) => {
  let desde = req.query.desde;
  let hasta = req.query.hasta;

  prestamos
    .findAll({
      where: {
        ptm_fechasol: { [Op.between]: [desde, hasta] },
      },
    })
    .then((titular) => res.json(titular))
    .catch((err) => res.json(err));
});

router.get("/prestamosporop", (req, res) => {
  let desde = req.query.desde;
  let hasta = req.query.hasta;

  prestamos
    .findAll({
      attributes: [
        [Sequelize.literal("COALESCE(ptm_op)"), "operador"],
        [Sequelize.literal("COALESCE(count(*))"), "prestamos"],
        [Sequelize.literal("COALESCE(SUM(ptm_prestamo ))"), "capital"],
        [Sequelize.literal("COALESCE(SUM(ptm_valcuota ))"), "interes"],
        [
          Sequelize.literal("COALESCE(SUM(ptm_valcuota * ptm_cuotas))"),
          "capconint",
        ],
      ],
      where: {
        ptm_fechasol: { [Op.between]: [desde, hasta] },
        ptm_estado: "APROBADO",
      },
      group: ["ptm_op"],
    })
    .then((titular) => res.json(titular))
    .catch((err) => res.json(err));
});

router.get("/prestamosporestado", (req, res) => {
  let desde = req.query.desde;
  let hasta = req.query.hasta;

  prestamos
    .findAll({
      attributes: [
        [Sequelize.literal("COALESCE(ptm_estado)"), "estado"],
        [Sequelize.literal("COALESCE(count(*))"), "prestamos"],
        [Sequelize.literal("COALESCE(SUM(ptm_prestamo ))"), "capital"],
        [Sequelize.literal("COALESCE(SUM(ptm_valcuota ))"), "interes"],
        [
          Sequelize.literal("COALESCE(SUM(ptm_valcuota * ptm_cuotas))"),
          "capconint",
        ],
      ],
      where: {
        ptm_fechasol: { [Op.between]: [desde, hasta] },
      },
      group: ["ptm_estado"],
    })
    .then((titular) => res.json(titular))
    .catch((err) => res.json(err));
});

router.get("/prestamosporcodigo", (req, res) => {
  let id = req.query.id;

  let desde = moment().startOf("month").format("YYYY-MM-DD");
  let hasta = moment().endOf("month").format("YYYY-MM-DD");

  if (req.query.id === "1") {
    console.log("igual");

    prestamos
      .findAll({
        where: {
          ptm_fechasol: { [Op.between]: [desde, hasta] },
        },
      })
      .then((titular) => {
        res.json(titular);
        console.log(titular);
      })
      .catch((err) => res.json(err));
  } else if (req.query.id !== "1") {
    console.log("distinto");

    prestamos
      .findAll({
        where: {
          ptm_fechasol: { [Op.between]: [desde, hasta] },
          ptm_op: id,
        },
      })
      .then((titular) => {
        res.json(titular);
        console.log(titular);
      })
      .catch((err) => res.json(err));
  }
});

router.get("/prestamosporid/:id", (req, res) => {
  let id = req.params.id;

  prestamos
    .findOne({
      where: {
        ptm_id: id,
      },
    })
    .then((titular) => res.json(titular))
    .catch((err) => res.json(err));
});


router.get("/prestamosempleadosporid/:id", (req, res) => {
  let id = req.params.id;

  prestamosEmpleados
    .findOne({
      where: {
        idprestamo: id,
      },
    })
    .then((titular) => res.json(titular))
    .catch((err) => res.json(err));
});


router.get("/traerempleado/:id", (req, res) => {
  let id = req.params.id;

  db.sgiSequelize.query(

    `
    SELECT *
    FROM operador
    WHERE usuario = '${id}'

    `
  )
    .then((titular) => res.json(titular[0]))
    .catch((err) => res.json(err));
});

router.get("/capitalaprest", (req, res) => {
  let id = req.params.id;

  db.sgiSequelize.query(`
  
        SELECT capital as 'value',
              capital as 'label' ,
              autorizacion
        FROM capital_prestamo
        WHERE estado = 1
  `)
    .then((titular) => res.json(titular[0]))
    .catch((err) => res.json(err));
});

router.get("/capitalaprestemp", (req, res) => {

  db.sgiSequelize.query(`
  
        SELECT capital as 'value',
              capital as 'label' ,
              autorizacion
        FROM capital_prestamo_empleados
        WHERE estado = 1
  `)
    .then((titular) => res.json(titular[0]))
    .catch((err) => res.json(err));
});

router.get("/empleados", (req, res) => {

  db.sgiSequelize.query(`
  
        SELECT usuario as 'value',
              CONCAT(apellido, ', ', nombre) as 'label'               
        FROM operador
        WHERE estado = 1
        ORDER BY apellido ASC
        
  `)
    .then((titular) => res.json(titular[0]))
    .catch((err) => res.json(err));
});

router.get("/ingresomensual", (req, res) => {
  prestamos
    .findAll({
      attributes: [
        [Sequelize.literal("COALESCE(count(ptm_ficha))"), "prestamos"],
        [Sequelize.literal("COALESCE(SUM(ptm_valcuota ))"), "capital"],
      ],

      where: {
        ptm_fechafin: { [Op.gt]: Sequelize.literal("CURRENT_TIMESTAMP") },
        ptm_estado: "APROBADO",
      },
    })

    .then((titular) => res.json(titular))
    .catch((err) => res.json(err));
});

router.get("/afiliado/:id", (req, res) => {
  maestro
    .findOne({
      attributes: ["APELLIDOS", "NOMBRES"],

      where: {
        ptm_ficha: req.params.id,
      },
    })

    .then((titular) => res.json(titular))
    .catch((err) => res.json(err));
});


router.get("/traerprestamosempleados", (req, res) => {

  prestamosEmpleados.findAll()

    .then((titular) => res.json(titular))
    .catch((err) => res.json(err));
});

router.get("/prestamoempleado/:id", (req, res) => {

  prestamosEmpleados.findOne({
    where: {
      idprestamo: req.params.id
    }
  })
    .then((titular) => res.json(titular))
    .catch((err) => res.json(err));
});

router.get("/traerplancuotas/:id", (req, res) => {

  prestamosEmpleadosCobro.findAll({
    where: {
      idprestamo: req.params.id
    }
  })

    .then((titular) => res.json(titular))
    .catch((err) => res.json(err));
});

router.post("/altaprestamo", (req, res, next) => {
  const {
    fechacarga,
    operador,
    ficha,
    legajo,
    anti,
    fechasol,
    renova,
    capital,
    cuotas,
    valcuota,
    neto,
    estado,
    codptmleg,
    ptm_afi,
    capinoaut
  } = req.body;

  prestamos
    .create({
      ptm_fechacarga: fechacarga,
      ptm_op: operador,
      ptm_ficha: ficha,
      ptm_legajo: legajo,
      ptm_ant: anti,
      ptm_fechasol: fechasol,
      ptm_renov: renova,
      ptm_prestamo: capital,
      ptm_cuotas: cuotas,
      ptm_valcuota: valcuota,
      ptm_neto: neto,
      ptm_estado: estado,
      cod_ptm_leg: codptmleg,
      ptm_afi: ptm_afi,
      capinoaut: capinoaut
    })
    .then((prestamo) => {
      res.status(200).json(prestamo);
    })
    .catch((err) => {
      console.log(err);
    });
});

router.post("/reghistorial", (req, res, next) => {
  const { operador, idprestamo, contrato, afiliado, fecha, productor } =
    req.body;

  historialAprobacion
    .create({
      operador: operador,
      idprestamo: idprestamo,
      contrato: contrato,
      afiliado: afiliado,
      fecha: fecha,
      productor: productor,
    })
    .then((cantidad) => {
      res.status(200).json(cantidad);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

router.post("/nuevoprestamoempleado", (req, res, next) => {

  const prest = {
    empleado: empleado,
    fecha_solicitud: fecha_solicitud,
    capital: capital,
    plan_cuotas: plan_cuotas,
    cuota_mensual: cuota_mensual,
    capital_dev: capital_dev,
    inicia: inicia,
    termina: termina,
    estado: estado,
  } = req.body;

  prestamosEmpleados
    .create(
      prest
    )
    .then((prestamo) => {
      res.status(200).json(prestamo);
    })
    .catch((err) => {
      console.log(err);
    });
});


router.post("/plancobro", (req, res, next) => {

  let plan = {
    idprestamo: idprestamo,
    cuota: cuota,
    importe: importe,
    fecha_cobro: fecha_cobro,
    estado: estado,
  } = req.body;

  prestamosEmpleadosCobro
    .create(
      plan
    )
    .then((prestamo) => {
      res.status(200).json(prestamo);
    })
    .catch((err) => {
      console.log(err);
    });
});

router.put("/aprobarprestamo/:id", (req, res) => {
  const id = req.params.id;

  prestamos
    .update(
      {
        ptm_estado: "APROBADO",
      },
      { where: { ptm_id: id } } // where clause
    )
    .then((aprobado) => {
      res.status(200).json(aprobado);
    })
    .catch((error) => {
      res.status(400).json(error);
      console.log(error);
    });
});

router.put("/aprobarprestamoempleado/:id", (req, res) => {
  const id = req.params.id;

  prestamosEmpleados
    .update(
      {
        estado: "APROBADO",
      },
      { where: { idprestamo: id } } // where clause
    )
    .then((aprobado) => {
      res.status(200).json(aprobado);
    })
    .catch((error) => {
      res.status(400).json(error);
      console.log(error);
    });
});


router.put("/rechazarprestamoempleado/:id", (req, res) => {
  const id = req.params.id;

  prestamosEmpleados
    .update(
      {
        estado: "RECHAZADO",
      },
      { where: { idprestamo: id } } // where clause
    )
    .then((aprobado) => {
      res.status(200).json(aprobado);
    })
    .catch((error) => {
      res.status(400).json(error);
      console.log(error);
    });
});


router.put("/impactarcobro/:id", (req, res) => {

  let cob = {

    estado: estado,
    fecha_pago: fecha_pago,
    operador: operador,

  } = req.body


  prestamosEmpleadosCobro
    .update(
      {
        estado: cob.estado,
        fecha_pago: cob.fecha_pago,
        operador: cob.operador
      },

      { where: { idpago: req.params.id } } // where clause
    )
    .then((aprobado) => {
      res.status(200).json(aprobado);
    })
    .catch((error) => {
      res.status(400).json(error);
      console.log(error);
    });
});

module.exports = router;
