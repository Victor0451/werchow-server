const express = require("express");
const router = express.Router();
const sequelize = require("sequelize");
const db = require("../../db/database");
const moment = require("moment");

const rehabilitaciones = require("../../models/sgi/rehabilitaciones");
const maestro = require("../../models/werchow/maestro");
const maestroM = require("../../models/mutual/maestro");
const altanovell = require("../../models/sgi/altanovell");

// GET FICHA WERCHOW
router.get("/consultarficha/:id", (req, res) => {
  let id = req.params.id;
  console.log(id);
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

// GET FICHA MUTUAL
router.get("/consultarficham/:id", (req, res) => {
  let id = req.params.id;
  console.log(id);
  maestroM
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

// GET LISTADO REHAB
router.get("/listadorehab", (req, res) => {
  rehabilitaciones
    .findAll()
    .then((listado) => res.json(listado))
    .catch((err) => res.json(err));
});

// POST REHAB
router.post("/nuevarehab", (req, res) => {
  const nuevarehab = ({
    contrato: contrato,
    dni: dni,
    apellido: apellido,
    nombre: nombre,
    operador: operador,
    vigencia: vigencia,
    fecha: fecha,
    cuotas: cuotas,
    idoperador: idoperador,
    empresa: empresa,
  } = req.body);

  console.log(nuevarehab);

  rehabilitaciones
    .create(nuevarehab)
    .then((rehab) => res.json(rehab))
    .catch((err) => res.json(err));
});

// GET LISTADO DEL MES WERCHOW
router.get("/estadocarteraw", (req, res) => {
  let mes = req.query.mes;
  let ano = moment().format("YYYY");
  let zona = req.query.zona;
  let grupo = req.query.grupo;
  let flag = req.query.flag;
  let desde = req.query.desde;
  let hasta = req.query.hasta;
  let sucursal = req.query.sucursal;

  // AT 1000
  if (flag === "1") {
    db.wSequelize
      .query(
        `
    SELECT m.SUCURSAL, m.CONTRATO, m.NRO_DOC, m.APELLIDOS, m.NOMBRES, m.ALTA, m.CALLE, m.NRO_CALLE, m.BARRIO, m.LOCALIDAD, m.GRUPO, m.ZONA, m.TELEFONO, m.MOVIL, c.IMPORTE
    FROM maestro as m
    INNER JOIN cuo_fija as c ON c.CONTRATO = m.CONTRATO
    WHERE NOT EXISTS
    (SELECT * FROM pagos as p
    WHERE p.CONTRATO = m.CONTRATO
    and p.MES = ${mes}
    and p.ANO = ${ano}
    and p.MOVIM = 'P'
    )
    and m.PLAN != 'P'
    and m.GRUPO in (${grupo})
    and m.ZONA = ${zona}
    `
      )
      .then((listado) => res.json(listado))
      .catch((err) => res.json(err));
  }
  // AT TJT
  else if (flag === "2") {
    db.wSequelize
      .query(
        `
        SELECT m.SUCURSAL, m.CONTRATO, m.NRO_DOC, m.APELLIDOS, m.NOMBRES, m.ALTA, m.CALLE, m.NRO_CALLE, m.BARRIO, m.LOCALIDAD, m.GRUPO, m.ZONA, m.TELEFONO, m.MOVIL, c.IMPORTE
        FROM maestro as m
        INNER JOIN cuo_fija as c ON c.CONTRATO = m.CONTRATO
        WHERE NOT EXISTS
        (SELECT * FROM pago_bco as p
        WHERE p.CONTRATO = m.CONTRATO
        and p.MES = ${mes}
        and p.ANO = ${ano}
        )
        and m.PLAN != 'P'
        and m.GRUPO in (${grupo})
        `
      )
      .then((listado) => res.json(listado))
      .catch((err) => res.json(err));
  }
  // 1001
  else if (flag === "3") {
    db.wSequelize
      .query(
        `
        SELECT m.SUCURSAL, m.CONTRATO, m.NRO_DOC, m.APELLIDOS, m.NOMBRES, m.ALTA, m.CALLE, m.NRO_CALLE, m.BARRIO, m.LOCALIDAD, m.GRUPO, m.ZONA, m.TELEFONO, m.MOVIL, so.CUOTA as IMPORTE
        FROM maestro as m
        INNER JOIN sow as so ON so.CONTRATO = m.CONTRATO
        WHERE so.GRUPO in (${grupo})
        AND  so.DEUDA > ${desde}
        AND so.DEUDA < ${hasta}
        AND so.ZONA = ${zona}
        `
      )
      .then((listado) => res.json(listado))
      .catch((err) => res.json(err));
  }
  // BACHES
  else if (flag === "4") {
    db.wSequelize
      .query(
        `
        SELECT m.SUCURSAL, m.CONTRATO, m.NRO_DOC, m.APELLIDOS, m.NOMBRES, m.ALTA, m.CALLE, m.NRO_CALLE, m.BARRIO, m.LOCALIDAD, m.GRUPO, m.ZONA, m.TELEFONO, m.MOVIL, so.CUOTA as IMPORTE
        FROM maestro as m
        INNER JOIN sow as so ON so.CONTRATO = m.CONTRATO
        WHERE so.GRUPO > 5000
        and so.GRUPO NOT IN (7500,7777,8500,8888)
        AND  so.DEUDA > ${desde}
        AND so.DEUDA < ${hasta}
        AND so.SUCURSAL = '${sucursal}'
        `
      )
      .then((listado) => res.json(listado))
      .catch((err) => res.json(err));
  }
});

// GET LISTADO DEL MES MUTUAL
router.get("/estadocarteram", (req, res) => {
  let mes = req.query.mes;
  let ano = moment().format("YYYY");
  let zona = req.query.zona;
  let grupo = req.query.grupo;
  let flag = req.query.flag;
  let desde = req.query.desde;
  let hasta = req.query.hasta;
  let sucursal = req.query.sucursal;

  // AT 1000
  if (flag === "1") {
    db.wSequelize
      .query(
        `
    SELECT m.SUCURSAL, m.CONTRATO, m.NRO_DOC, m.APELLIDOS, m.NOMBRES, m.ALTA, m.CALLE, m.NRO_CALLE, m.BARRIO, m.LOCALIDAD, m.GRUPO, m.ZONA, m.TELEFONO, m.MOVIL, c.IMPORTE
    FROM mutual as m
    INNER JOIN cuo_mutual as c ON c.CONTRATO = m.CONTRATO
    WHERE NOT EXISTS
    (SELECT * FROM pagos_mutual as p
    WHERE p.CONTRATO = m.CONTRATO
    and p.MES = ${mes}
    and p.ANO = ${ano}
    and p.MOVIM = 'P'
    )
    and m.PLAN != 'P'
    and m.GRUPO in (${grupo})
    and m.ZONA = ${zona}
    `
      )
      .then((listado) => res.json(listado))
      .catch((err) => res.json(err));
  }
  // AT TJT
  else if (flag === "2") {
    db.wSequelize
      .query(
        `
        SELECT m.SUCURSAL, m.CONTRATO, m.NRO_DOC, m.APELLIDOS, m.NOMBRES, m.ALTA, m.CALLE, m.NRO_CALLE, m.BARRIO, m.LOCALIDAD, m.GRUPO, m.ZONA, m.TELEFONO, m.MOVIL, c.IMPORTE
        FROM mutual as m
        INNER JOIN cuo_mutual as c ON c.CONTRATO = m.CONTRATO
        WHERE NOT EXISTS
        (SELECT * FROM pago_bcom as p
        WHERE p.CONTRATO = m.CONTRATO
        and p.MES = ${mes}
        and p.ANO = ${ano}
        )
        and m.PLAN != 'P'
        and m.GRUPO in (${grupo})
        `
      )
      .then((listado) => res.json(listado))
      .catch((err) => res.json(err));
  }
  // 1001
  else if (flag === "3") {
    db.wSequelize
      .query(
        `
        SELECT m.SUCURSAL, m.CONTRATO, m.NRO_DOC, m.APELLIDOS, m.NOMBRES, m.ALTA, m.CALLE, m.NRO_CALLE, m.BARRIO, m.LOCALIDAD, m.GRUPO, m.ZONA, m.TELEFONO, m.MOVIL, so.CUOTA as IMPORTE
        FROM mutual as m
        INNER JOIN som as so ON so.CONTRATO = m.CONTRATO
        WHERE so.GRUPO in (${grupo})
        AND  so.DEUDA > ${desde}
        AND so.DEUDA < ${hasta}
        AND so.ZONA = ${zona}
        `
      )
      .then((listado) => res.json(listado))
      .catch((err) => res.json(err));
  }
  // BACHES
  else if (flag === "4") {
    db.wSequelize
      .query(
        `
        SELECT m.SUCURSAL, m.CONTRATO, m.NRO_DOC, m.APELLIDOS, m.NOMBRES, m.ALTA, m.CALLE, m.NRO_CALLE, m.BARRIO, m.LOCALIDAD, m.GRUPO, m.ZONA, m.TELEFONO, m.MOVIL, so.CUOTA as IMPORTE
        FROM mutual as m
        INNER JOIN so as so ON so.CONTRATO = m.CONTRATO
        WHERE so.GRUPO > 5000
        and so.GRUPO NOT IN (7500,7777,8500,8888)
        AND  so.DEUDA > ${desde}
        AND so.DEUDA < ${hasta}
        AND so.SUCURSAL = '${sucursal}'
        `
      )
      .then((listado) => res.json(listado))
      .catch((err) => res.json(err));
  }
});

// LISTADO CUMPLE
router.get("/listcumple", (req, res) => {
  let fecha = req.query.fecha;

  db.wSequelize
    .query(
      `
        select m.CONTRATO, m.APELLIDOS, m.NOMBRES,  m.NACIMIENTO ,YEAR(CURDATE())-YEAR(m.NACIMIENTO)  AS EDAD, YEAR(CURDATE())-YEAR(m.ALTA)  AS ANTI,  m.GRUPO, g.DESCRIP,  m.TELEFONO, m.MOVIL
        from werchow.maestro as m
        inner join werchow.grupos as g on g.CODIGO = m.GRUPO
        where m.GRUPO not in (66, 55, 500, 1001, 2000, 2001, 2010 ,3444,3777,3666,3888,3999,4004,7500, 7777, 8500, 8888)
        and day(m.NACIMIENTO)=day('${fecha}') and month(m.NACIMIENTO)=month('${fecha}')

        `
    )
    .then((listado) => res.json(listado))
    .catch((err) => res.json(err));
});

router.get("/listcumpleM", (req, res) => {
  db.wSequelize
    .query(
      `
        select m.CONTRATO, m.APELLIDOS, m.NOMBRES,  m.NACIMIENTO ,YEAR(CURDATE())-YEAR(m.NACIMIENTO)  AS EDAD, YEAR(CURDATE())-YEAR(m.ALTA)  AS ANTI,  m.GRUPO, g.DESCRIP,  m.TELEFONO, m.MOVIL
        from werchow.mutual as m
        inner join werchow.grupos as g on g.CODIGO = m.GRUPO
        where m.GRUPO not in (66, 55, 500, 1001, 2000, 2001, 2010 ,3444,3777,3666,3888,3999,4004,7500, 7777, 8500, 8888)
        and day(m.NACIMIENTO)=day(NOW()) and month(m.NACIMIENTO)=month(NOW())

        `
    )
    .then((listado) => res.json(listado))
    .catch((err) => res.json(err));
});

// POST NOVELL

router.post("/nuevonovell", (req, res) => {
  const novell = ({
    servicio: servicio,
    fecha_recepcion: fecha_recepcion,
    monto: monto,
    monto_letra: monto_letra,
    anticipo: anticipo,
    cuota: cuota,
    gastos_adm: gastos_adm,
    apellido_sol: apellido_sol,
    nombre_sol: nombre_sol,
    dni_sol: dni_sol,
    estcivil_sol: estcivil_sol,
    fecha_nac_sol: fecha_nac_sol,
    dom_sol: dom_sol,
    domnum_sol: domnum_sol,
    piso_sol: piso_sol,
    barrio_sol: barrio_sol,
    localidad_sol: localidad_sol,
    codpostal_sol: codpostal_sol,
    telefono_sol: telefono_sol,
    movil_sol: movil_sol,
    apellido_ben: apellido_ben,
    nombre_ben: nombre_ben,
    dni_ben: dni_ben,
    estcivil_ben: estcivil_ben,
    fecha_nac_ben: fecha_nac_ben,
    dom_ben: dom_ben,
    domnum_ben: domnum_ben,
    piso_ben: piso_ben,
    barrio_ben: barrio_ben,
    localidad_ben: localidad_ben,
    codpostal_ben: codpostal_ben,
    telefono_ben: telefono_ben,
    movil_ben: movil_ben,
    operador: operador,
  } = req.body);

  altanovell
    .create(novell)
    .then((res) => res.json(res))
    .catch((err) => res.json(err));
});

// GET ALL NOVELL

router.get("/listadonovell", (req, res) => {
  altanovell
    .findAll()
    .then((listado) => res.json(listado))
    .catch((err) => res.json(err));
});

// GET NOVELL BY ID

router.get("/traernovell/:id", (req, res) => {
  let id = req.params.id;

  altanovell
    .findOne({ where: { idnovell: id } })
    .then((listado) => res.json(listado))
    .catch((err) => res.json(err));
});

module.exports = router;
