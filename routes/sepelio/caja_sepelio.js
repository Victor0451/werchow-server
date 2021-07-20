const express = require("express");
const router = express.Router();
const moment = require("moment");

const CajaSepelio = require("../../models/sepelio/caja_sepelio");
const IngresoCaja = require("../../models/sepelio/ingreso_caja");
const GastosCaja = require("../../models/sepelio/gastos_caja");
const db = require("../../db/database");

//INSERT CAJA

router.post("/nuevacaja", (req, res, next) => {
  const nuevaCaja = ({
    monto,
    concepto,
    detalle,
    fecha,
    tipofactura,
    ptoventa,
    nfactura,
    operador,
    estado,
    gastos,
    totalcaja,
  } = req.body);

  CajaSepelio.create(nuevaCaja)
    .then((nuevaCaja) => {
      res.status(200).json(nuevaCaja);
    })
    .catch((err) => {
      console.log(err);
    });
});

//INSERT GASTOS CAJA

router.post("/gastocaja", (req, res, next) => {
  const gasto = ({
    idcaja,
    concepto,
    mediopago,
    tipofactura,
    proveedor,
    empresa,
    porciva,
    fecha,
    nfactura,
    operadorgestion,
    operadortramite,
    montoiva,
    retiibb,
    retggcias,
    perciva,
    detalle,
    total,
    idservicio,
  } = req.body);

  for (let i = 0; i < gasto.length; i++) {
    GastosCaja.create({
      idcaja: gasto[i].idcaja,
      concepto: gasto[i].concepto,
      mediopago: gasto[i].mediopago,
      tipofactura: gasto[i].tipofactura,
      proveedor: gasto[i].proveedor,
      empresa: gasto[i].empresa,
      porciva: gasto[i].porciva,
      fecha: gasto[i].fecha,
      nfactura: gasto[i].nfactura,
      operadorgestion: gasto[i].operadorgestion,
      operadortramite: gasto[i].operadortramite,
      montoiva: gasto[i].montoiva,
      retiibb: gasto[i].retiibb,
      retggcias: gasto[i].retggcias,
      perciva: gasto[i].perciva,
      detalle: gasto[i].detalle,
      total: gasto[i].total,
      idservicio: gasto[i].idservicio,
    })
      .then((nuevoGastos) => {
        res.status(200).json(nuevoGastos);
      })
      .catch((err) => {
        console.log(err);
      });
  }
});

// INSERT INGRESO

router.post("/ingresocaja", (req, res, next) => {
  const {
    idcaja,
    concepto,
    fecha,
    tipofactura,
    ptoventa,
    nfactura,
    operador,
    detalle,
    monto,
  } = req.body;

  const ingreso = {
    idcaja,
    concepto,
    fecha,
    tipofactura,
    ptoventa,
    nfactura,
    operador,
    detalle,
    monto,
  };

  IngresoCaja.create(ingreso)
    .then((ingreso) => {
      res.status(200).json(ingreso);
    })
    .catch((err) => {
      console.log(err);
    });
});

// UPDATE FECHA CIERRE CAJA
router.put("/updatefechacierre/:id", (req, res, next) => {
  const id = req.params.id;
  let cierre = moment().format("YYYY-MM-DD HH:mm:ss");

  CajaSepelio.update(
    {
      cierre: cierre,
    },
    { where: { idcaja: id } }
  )
    .then((editarGastos) => {
      res.status(200).json(editarGastos);
    })
    .catch((err) => {
      console.log(err);
    });
});

// UPDATE FECHA ULTIMA CARGA CAJA
router.put("/updatefechacierre/:id", (req, res, next) => {
  const id = req.params.id;
  let fecha = moment().format("YYYY-MM-DD HH:mm:ss");

  CajaSepelio.update(
    {
      ultimacarga: fecha,
    },
    { where: { idcaja: id } }
  )
    .then((editarGastos) => {
      res.status(200).json(editarGastos);
    })
    .catch((err) => {
      console.log(err);
    });
});

// UPDATE GASTO

router.put("/updategasto/:id", (req, res, next) => {
  const idgastos = req.params.id;

  const gasto = ({
    idcaja,
    concepto,
    mediopago,
    tipofactura,
    proveedor,
    empresa,
    porciva,
    fecha,
    nfactura,
    operadorgestion,
    operadortramite,
    montoiva,
    retiibb,
    retggcias,
    perciva,
    detalle,
    total,
  } = req.body);

  console.log(gasto);

  GastosCaja.update(
    {
      idcaja: gasto.idcaja,
      concepto: gasto.concepto,
      mediopago: gasto.mediopago,
      tipofactura: gasto.tipofactura,
      proveedor: gasto.proveedor,
      empresa: gasto.empresa,
      porciva: gasto.porciva,
      fecha: gasto.fecha,
      nfactura: gasto.nfactura,
      operadortramite: gasto.operadortramite,
      montoiva: gasto.montoiva,
      retiibb: gasto.retiibb,
      retggcias: gasto.retggcias,
      perciva: gasto.perciva,
      detalle: gasto.detalle,
      total: gasto.total,
    },
    { where: { idgastos: idgastos } }
  )
    .then((editarGastos) => {
      res.status(200).json(editarGastos);
    })
    .catch((err) => {
      console.log(err);
    });
});

// UPDATE CAJA (TOTAL y GASTOS)

router.put("/updatetotales/:id", (req, res) => {
  const idcaja = req.params.id;

  const { gastos, totalcaja } = req.body;

  CajaSepelio.update(
    {
      gastos: gastos,
      totalcaja: totalcaja,
    },
    { where: { idcaja: idcaja } }
  )
    .then((updategastos) => {
      res.status(200).json(updategastos);
    })
    .catch((error) => {
      res.status(400).json(error);
    });
});

// UPDATE CAJA (TOTAL y GASTOS)

router.put("/updatetotalesing/:id", (req, res) => {
  const idcaja = req.params.id;

  const { monto, totalcaja } = req.body;
  console.log(req.body);

  CajaSepelio.update(
    {
      monto: monto,
      totalcaja: totalcaja,
    },
    { where: { idcaja: idcaja } }
  )
    .then((updateingresos) => {
      res.status(200).json(updateingresos);
    })
    .catch((error) => {
      res.status(400).json(error);
    });
});

// UPDATE CIERRE CAJA

router.put("/updatecierrecaja/:id", (req, res) => {
  const idcaja = req.params.id;

  CajaSepelio.update(
    {
      estado: 0,
    },
    { where: { idcaja: idcaja } }
  )
    .then((cierrecaja) => {
      res.status(200).json(cierrecaja);
    })
    .catch((error) => {
      res.status(400).json(error);
    });
});

// DELETE GASTO
router.delete("/eliminargasto/:id", (req, res, next) => {
  const idgastos = req.params.id;
  GastosCaja.destroy({
    where: {
      idgastos: idgastos,
    },
  })
    .then((gasto) => {
      res.status(200).json(gasto);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

// DELETE GASTO
router.delete("/eliminaringreso/:id", (req, res, next) => {
  const idingreso = req.params.id;
  IngresoCaja.destroy({
    where: {
      idingreso: idingreso,
    },
  })
    .then((gasto) => {
      res.status(200).json(gasto);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

// DELETE CAJA
router.delete("/eliminarcaja/:id", (req, res, next) => {
  const idcaja = req.params.id;
  CajaSepelio.destroy({
    where: {
      idcaja: idcaja,
    },
  })
    .then((gasto) => {
      res.status(200).json(gasto);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

//GET LIST CAJAS

router.get("/listadocajas", (req, res, next) => {
  CajaSepelio.findAll({
    order: [["idcaja", "DESC"]],
  })
    .then((listado) => {
      res.status(200).json(listado);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

//GET LIST GASTOS

router.get("/listadogastos/:id", (req, res, next) => {
  GastosCaja.findAll({
    where: { idcaja: req.params.id },
  })
    .then((listado) => {
      res.status(200).json(listado);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

//GET LIST INGRESOS

router.get("/listadoingresos/:id", (req, res, next) => {
  IngresoCaja.findAll({
    where: { idcaja: req.params.id },
  })
    .then((listado) => {
      res.status(200).json(listado);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

//GET CAJA

router.get("/caja/:id", (req, res, next) => {
  CajaSepelio.findOne({
    where: { idcaja: req.params.id },
  })
    .then((listado) => {
      res.status(200).json(listado);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

// GET GASTO

router.get("/gasto/:id", (req, res, next) => {
  GastosCaja.findOne({
    where: { idgastos: req.params.id },
  })
    .then((listado) => {
      res.status(200).json(listado);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

// GET PROV

router.get("/listprov", (req, res, next) => {
  db.sepelioSequelize
    .query(
      `
      SELECT razon as 'value', razon as 'label'
      from proveedores

      `
    )
    .then((listado) => {
      res.status(200).json(listado);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

// GET CONCEPTO

router.get("/listconcepto", (req, res, next) => {
  db.sepelioSequelize
    .query(
      `
      SELECT concepto as 'value', concepto as 'label'
      from conceptos

      `
    )
    .then((listado) => {
      res.status(200).json(listado);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

module.exports = router;
