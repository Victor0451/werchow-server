const express = require("express");
const router = express.Router();
const sequelize = require("sequelize");
const Op = sequelize.Op;
const maestro = require("../../models/werchow/maestro");
const adherent = require("../../models/werchow/adherent");
const adherentM = require("../../models/werchow/mutual_adh");
const db = require("../../db/database");
const mutual = require("../../models/werchow/mutual");
const mutualadh = require("../../models/werchow/mutual_adh");
const servicios = require("../../models/sepelio/servicios");
const servHistoricos = require("../../models/sepelio/servicios_historico");
const PrecioServicio = require("../../models/sepelio/precio_servicio");
const grupos = require("../../models/werchow/grupos");

router.get("/consultarficha/:id", (req, res) => {
  let id = req.params.id;

  db.wSequelize
    .query(
      `
        SELECT
            m.CONTRATO, 
            m.GRUPO,
            m.ALTA,
            m.SUCURSAL,
            m.NRO_DOC,
            m.APELLIDOS,
            m.NOMBRES,
            m.ALTA,
            m.VIGENCIA,
            m.CALLE,
            m.NRO_CALLE,
            m.BARRIO,
            m.NACIMIENTO, 
            m.TELEFONO,
            m.MOVIL,
            m.MAIL, 
            o.NOMBRE "OBRA_SOC",
            m.EMPRESA,
            TIMESTAMPDIFF(YEAR, m.NACIMIENTO, CURDATE()) 'EDAD',
            m.PLAN,
            m.SUB_PLAN 
        FROM maestro as m
        INNER JOIN obra_soc as o on o.CODIGO = m.OBRA_SOC
        WHERE m.NRO_DOC = ${id} 

`
    )
    .then((titular) => res.json(titular[0][0]))
    .catch((err) => res.json(err));
});

router.get("/consultarficham/:id", (req, res) => {
  let id = req.params.id;

  db.wSequelize
    .query(
      `
        SELECT
            m.CONTRATO, 
            m.GRUPO,
            m.ALTA,
            m.SUCURSAL,
            m.NRO_DOC,
            m.APELLIDOS,
            m.NOMBRES,
            m.ALTA,
            m.VIGENCIA,
            m.CALLE,
            m.NRO_CALLE,
            m.BARRIO,
            m.NACIMIENTO, 
            m.TELEFONO,
            m.MOVIL,
            m.MAIL, 
            o.NOMBRE "OBRA_SOC",
            m.EMPRESA,
            TIMESTAMPDIFF(YEAR, m.NACIMIENTO, CURDATE()) 'EDAD',
            m.PLAN,
            m.SUB_PLAN
        FROM mutual as m
        INNER JOIN obra_soc as o on o.CODIGO = m.OBRA_SOC
        WHERE m.NRO_DOC = ${id} 
`
    )

    .then((titular) => res.json(titular[0][0]))
    .catch((err) => res.json(err));
});

router.get("/cantadh/:id", (req, res) => {
  let id = req.params.id;

  db.wSequelize
    .query(
      `
        SELECT
           COUNT(CONTRATO) 'adh'
        FROM adherent         
        WHERE CONTRATO = ${id} 
        AND BAJA IS NULL
        
`
    )

    .then((titular) => res.json(titular[0][0]))
    .catch((err) => res.json(err));
});

router.get("/cantadhm/:id", (req, res) => {
  let id = req.params.id;

  db.wSequelize
    .query(
      `
        SELECT
           COUNT(CONTRATO) 'adh'
        FROM mutual_adh     
        WHERE CONTRATO = ${id} 
        AND BAJA IS NULL
        
`
    )

    .then((titular) => res.json(titular[0][0]))
    .catch((err) => res.json(err));
});

router.get("/consultarfichaadh/:id", (req, res) => {
  let id = req.params.id;
  console.log(id);
  adherent
    .findOne({
      attributes: [
        "CONTRATO",
        "ALTA",
        "PLAN",
        "SUB_PLAN",
        "NRO_DOC",
        "SUCURSAL",
        "APELLIDOS",
        "NOMBRES",
        [sequelize.literal("YEAR(CURDATE())-YEAR(`NACIMIENTO`)"), "EDAD"],
      ],
      where: { NRO_DOC: id },
    })
    .then((titular) => res.json(titular))
    .catch((err) => res.json(err));
});

router.get("/consultarfichaadhm/:id", (req, res) => {
  let id = req.params.id;
  console.log(id);
  mutualadh
    .findOne({
      attributes: [
        "CONTRATO",
        "ALTA",
        "PLAN",
        "SUB_PLAN",
        "NRO_DOC",
        "SUCURSAL",
        "APELLIDOS",
        "NOMBRES",
        [sequelize.literal("YEAR(CURDATE())-YEAR(`NACIMIENTO`)"), "EDAD"],
      ],
      where: { NRO_DOC: id },
    })
    .then((titular) => res.json(titular))
    .catch((err) => res.json(err));
});

router.get("/adherentestit/:id", (req, res, next) => {
  adherent
    .findAll({ where: { CONTRATO: req.params.id } })
    .then((adherent) => res.json(adherent))
    .catch((err) => res.json(err));
});

router.get("/adherentestitm/:id", (req, res, next) => {
  adherentM
    .findAll({ where: { CONTRATO: req.params.id } })
    .then((adherent) => res.json(adherent))
    .catch((err) => res.json(err));
});

router.get("/grupo/:id", (req, res, next) => {
  grupos
    .findOne({ where: { CODIGO: req.params.id } })
    .then((grupo) => res.json(grupo))
    .catch((err) => res.json(err));
});

router.get("/servhistoricos", (req, res, next) => {
  servHistoricos
    .findAll()
    .then((grupo) => res.json(grupo))
    .catch((err) => res.json(err));
});

router.get("/todoslosservicios", (req, res, next) => {
  servicios
    .findAll({
      order: [["fecha_fallecimiento", "DESC"]],
    })
    .then((grupo) => res.json(grupo))
    .catch((err) => res.json(err));
});

router.get("/serviciocombo", (req, res) => {
  db.sepelioSequelize
    .query(
      `SELECT idservicio as 'value', CONCAT(apellido, ', ' ,nombre) as 'label'
       from servicios   
      `
    )
    .then((titular) => res.json(titular))
    .catch((err) => res.json(err));
});

router.get("/listadoservicios", (req, res) => {
  let desde = req.query.desde;
  let hasta = req.query.hasta;

  console.log(req.query);

  servicios
    .findAll({
      where: { fecha_fallecimiento: { [Op.between]: [desde, hasta] } },
      order: [["fecha_fallecimiento", "DESC"]],
    })
    .then((titular) => res.json(titular))
    .catch((err) => res.json(err));
});

router.get("/impservicio/:id", (req, res) => {
  const id = req.params.id;
  servicios
    .findOne({
      where: { dni: id },
    })
    .then((servicio) => res.json(servicio))
    .catch((err) => res.json(err));
});

router.get("/impservicio2/:id", (req, res) => {
  const id = req.params.id;
  servicios
    .findOne({
      where: { idservicio: id },
    })
    .then((servicio) => res.json(servicio))
    .catch((err) => res.json(err));
});

router.post("/nuevoservicio", (req, res) => {
  const nuevoservicio = ({
    contrato: contrato,
    empresa: empresa,
    dni: dni,
    apellido: apellido,
    nombre: nombre,
    edad: edad,
    fecha_fallecimiento: fecha_fallecimiento,
    lugar_fallecimiento: lugar_fallecimiento,
    tipo_servicio: tipo_servicio,
    casa_mortuaria: casa_mortuaria,
    fecha_inhumacion: fecha_inhumacion,
    hora_inhumacion: hora_inhumacion,
    cementerio: cementerio,
    altura: altura,
    peso: peso,
    motivo: motivo,
    retiro: retiro,
    solicitado: solicitado,
    parentesco: parentesco,
    fecha_recepcion: fecha_recepcion,
    sucursal: sucursal,
    estado: estado,
    dni_nuevotitular: dni_nuevotitular,
    domicilio_nuevotitular: domicilio_nuevotitular,
    operador: opreador,
    idataud: idataud,
    dni_solicitante: dni_solicitante,
    cremacion: cremacion,
    liquidado: liquidado,
    importe: importe,
    donacion: donacion
  } = req.body);

  if (nuevoservicio.dni_nuevotitular === "") {
    nuevoservicio.dni_nuevotitular = 1;
  }

  servicios
    .create(nuevoservicio)
    .then((titular) => res.json(titular))
    .catch((err) => res.json(err));
});

router.put("/editarservicio/:id", (req, res) => {
  let id = req.params.id;

  const editarservicio = ({
    contrato: contrato,
    empresa: empresa,
    dni: dni,
    apellido: apellido,
    nombre: nombre,
    edad: edad,
    fecha_fallecimiento: fecha_fallecimiento,
    lugar_fallecimiento: lugar_fallecimiento,
    tipo_servicio: tipo_servicio,
    casa_mortuaria: casa_mortuaria,
    fecha_inhumacion: fecha_inhumacion,
    hora_inhumacion: hora_inhumacion,
    cementerio: cementerio,
    altura: altura,
    peso: peso,
    motivo: motivo,
    retiro: retiro,
    solicitado: solicitado,
    parentesco: parentesco,
    fecha_recepcion: fecha_recepcion,
    sucursal: sucursal,
    estado: estado,
    operador: operador,
    idataud: idataud,
  } = req.body);

  servicios
    .update(editarservicio, { where: { idservicio: id } })
    .then((titular) => res.json(titular))
    .catch((err) => res.json(err));
});

router.get("/precioservicio/:id", (req, res, next) => {
  let id = req.params.id;

  PrecioServicio.findOne({
    attributes: [
      "contado",
      "contado_cremacion",
      "descuento1",
      "descuento1_cremacion",
      "descuento2",
      "descuento2_cremacion",
      "fecha_vigencia",
    ],
    where: { codigo: id },
  })
    .then((cantidad) => {
      res.status(200).json(cantidad);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

router.get("/serviciossinimpactar", (req, res, next) => {
  db.sepelioSequelize
    .query(
      `
      SELECT
      s.empresa,
      s.contrato,
      dni AS 'difunto',
      (
        CASE
        WHEN s.empresa = 'Werchow'
        AND EXISTS (
          SELECT
            SEGURO
          FROM
            werchow.maestro AS m
          WHERE
            m.NRO_DOC = s.dni
          AND SEGURO = 1
        ) THEN
          'SI'
        WHEN s.empresa = 'Werchow'
        AND EXISTS (
          SELECT
            SEGURO
          FROM
            werchow.adherent AS m
          WHERE
            m.NRO_DOC = s.dni
          AND SEGURO = 1
        ) THEN
          'SI'
        WHEN s.empresa = 'Mutual'
        AND EXISTS (
          SELECT
            SEGURO
          FROM
            werchow.mutual AS m
          WHERE
            m.NRO_DOC = s.dni
          AND SEGURO = 1
        ) THEN
          'SI'
        WHEN s.empresa = 'Mutual'
        AND EXISTS (
          SELECT
            SEGURO
          FROM
            werchow.mutual_adh AS m
          WHERE
            m.NRO_DOC = s.dni
          AND SEGURO = 1
        ) THEN
          'SI'
        ELSE
          'NO'
        END
      ) AS 'seguro',
      (
        CASE
        WHEN dni_nuevotitular = 11111111
        AND s.empresa = 'Werchow'
        AND EXISTS (
          SELECT
            *
          FROM
            werchow.maestro AS m
          WHERE
            m.NRO_DOC = s.dni
          AND m.PLAN = 'P'
          AND m.ADHERENTES = 0
        ) THEN
          'NOVELL/SIN ADH'
        WHEN dni_nuevotitular = 11111111
        AND s.empresa = 'Werchow'
        AND NOT EXISTS (
          SELECT
            *
          FROM
            werchow.maestro AS m
          WHERE
            m.NRO_DOC = s.dni
          AND m.PLAN = 'P'
          AND m.ADHERENTES = 0
        ) THEN
          'NOVELL REALIZADO, FALTA IMPACTAR'
        WHEN dni_nuevotitular = 11111111
        AND s.empresa = 'Mutual'
        AND EXISTS (
          SELECT
            *
          FROM
            werchow.mutual AS m
          WHERE
            m.NRO_DOC = s.dni
          AND m.PLAN = 'P'
          AND m.ADHERENTES = 0
        ) THEN
          'NOVELL/SIN ADH'
        WHEN dni_nuevotitular = 11111111
        AND s.empresa = 'Mutual'
        AND NOT EXISTS (
          SELECT
            *
          FROM
            werchow.mutual AS m
          WHERE
            m.NRO_DOC = s.dni
          AND m.PLAN = 'P'
          AND m.ADHERENTES = 0
        ) THEN
          'NOVELL REALIZADO, FALTA IMPACTAR'
        WHEN s.empresa = 'Werchow'
        AND EXISTS (
          SELECT
            *
          FROM
            werchow.maestro AS m
          WHERE
            m.NRO_DOC = s.dni
          AND m.PLAN != 'P'
        ) THEN
          CONCAT(
            'NUEVO TITULAR',
            ' ',
            dni_nuevotitular
          )
        WHEN s.empresa = 'Werchow'
        AND s.dni_nuevotitular NOT IN (1, 11111111)
        AND NOT EXISTS (
          SELECT
            *
          FROM
            werchow.maestro AS m
          WHERE
            m.NRO_DOC = s.dni
          AND m.PLAN != 'P'
        ) THEN
          'TITULAR REALIZADO, FALTA IMPACTAR'
        WHEN s.empresa = 'Mutual'
        AND EXISTS (
          SELECT
            *
          FROM
            werchow.mutual AS m
          WHERE
            m.NRO_DOC = s.dni
          AND m.PLAN != 'P'
        ) THEN
          CONCAT(
            'NUEVO TITULAR',
            ' ',
            dni_nuevotitular
          )
        WHEN s.empresa = 'Mutual'
        AND s.dni_nuevotitular NOT IN (1, 11111111)
        AND NOT EXISTS (
          SELECT
            *
          FROM
            werchow.mutual AS m
          WHERE
            m.NRO_DOC = s.dni
          AND m.PLAN != 'P'
        ) THEN
          'TITULAR REALIZADO, FALTA IMPACTAR'
        WHEN dni_nuevotitular = 1
        AND s.empresa = 'Werchow'
        AND NOT EXISTS (
          SELECT
            *
          FROM
            werchow.adherent AS m
          WHERE
            m.NRO_DOC = s.dni
          AND m.BAJA IS NOT NULL
          AND m.EDAD = 999
        ) THEN
          'ADHERENTE'
        WHEN dni_nuevotitular = 1
        AND s.empresa = 'Werchow'
        AND EXISTS (
          SELECT
            *
          FROM
            werchow.adherent AS m
          WHERE
            m.NRO_DOC = s.dni
          AND m.BAJA IS NOT NULL
          AND m.EDAD = 999
        ) THEN
          'ADHERENTE REALIZADO, FALTA IMPACTAR'
        WHEN dni_nuevotitular = 1
        AND s.empresa = 'Mutual'
        AND NOT EXISTS (
          SELECT
            *
          FROM
            werchow.mutual_adh AS m
          WHERE
            m.NRO_DOC = s.dni
          AND m.BAJA IS NOT NULL
          AND m.EDAD != 999
        ) THEN
          'ADHERENTE'
        WHEN dni_nuevotitular = 1
        AND s.empresa = 'Mutual'
        AND EXISTS (
          SELECT
            *
          FROM
            werchow.mutual_adh AS m
          WHERE
            m.NRO_DOC = s.dni
          AND m.BAJA IS NOT NULL
          AND m.EDAD != 999
        ) THEN
          'ADHERENTE REALIZADO, FALTA IMPACTAR'
        WHEN dni_nuevotitular IS NULL THEN
          'PARTICULAR'
        END
      ) AS 'estado_ficha',
      fecha_fallecimiento
    FROM
      servicios AS s
    WHERE
      impactado = 0
    AND dni IS NOT NULL
      
      
      
      `
    )
    .then((ventas) => {
      res.status(200).json(ventas);
    })

    .catch((err) => {
      res.status(400).json(err);
    });
});

router.put("/puttitularesw", (req, res, next) => {
  db.sepelioSequelize
    .query(
      `
      UPDATE servicios AS s

      SET impactado = (
        CASE
        WHEN NOT EXISTS (
          SELECT
            a.NRO_DOC
          FROM
            werchow.maestro AS a
          WHERE
            a.NRO_DOC = s.dni
         
        ) THEN
          TRUE
      
      WHEN EXISTS (
          SELECT
            a.NRO_DOC
          FROM
            werchow.maestro AS a
          WHERE
            a.NRO_DOC = s.dni          
        ) THEN
          FALSE
        
        END
      )
      WHERE empresa = 'Werchow'
      and dni_nuevotitular is not NULL
      and dni_nuevotitular != 1
      `
    )
    .then((ventas) => {
      res.status(200).json(ventas);
    })

    .catch((err) => {
      res.status(400).json(err);
    });
});

router.put("/puttitularesm", (req, res, next) => {
  db.sepelioSequelize
    .query(
      `
      UPDATE servicios AS s

      SET impactado = (
        CASE
        WHEN NOT EXISTS (
          SELECT
            a.NRO_DOC
          FROM
            werchow.mutual AS a
          WHERE
            a.NRO_DOC = s.dni
        
        ) THEN
          TRUE
      
      WHEN EXISTS (
          SELECT
            a.NRO_DOC
          FROM
            werchow.mutual AS a
          WHERE
            a.NRO_DOC = s.dni
        
        ) THEN
          FALSE
        
        END
      )
      WHERE empresa = 'Mutual'
      and dni_nuevotitular is not NULL
      and dni_nuevotitular != 1
      

      `
    )
    .then((ventas) => {
      res.status(200).json(ventas);
    })

    .catch((err) => {
      res.status(400).json(err);
    });
});

router.put("/putadherentesw", (req, res, next) => {
  db.sepelioSequelize
    .query(
      `
      UPDATE servicios AS s

      SET impactado = (
        CASE
        WHEN EXISTS (
          SELECT
            a.NRO_DOC
          FROM
            werchow.adherent AS a
          WHERE
            a.NRO_DOC = s.dni
          AND a.BAJA IS NOT NULL
          AND a.EDAD = 999
        ) THEN
          TRUE
      
      WHEN EXISTS (
          SELECT
            a.NRO_DOC
          FROM
            werchow.adherent AS a
          WHERE
            a.NRO_DOC = s.dni
          AND a.BAJA IS NULL
          AND a.EDAD != 999
        ) THEN
          FALSE
        
        END
      )
      WHERE empresa = 'Werchow'
      and dni_nuevotitular = 1
      

      `
    )
    .then((ventas) => {
      res.status(200).json(ventas);
    })

    .catch((err) => {
      res.status(400).json(err);
    });
});

router.put("/putadherentesm", (req, res, next) => {
  db.sepelioSequelize
    .query(
      `
      UPDATE servicios AS s
            
      SET impactado = (
        CASE
        WHEN EXISTS (
          SELECT
            a.NRO_DOC
          FROM
            werchow.mutual_adh AS a
          WHERE
            a.NRO_DOC = s.dni
          AND a.BAJA IS NOT NULL
          AND a.EDAD = 999
        ) THEN
          TRUE

      WHEN EXISTS (
          SELECT
            a.NRO_DOC
          FROM
            werchow.mutual_adh AS a
          WHERE
            a.NRO_DOC = s.dni
          AND a.BAJA IS NULL
          AND a.EDAD != 999
        ) THEN
          FALSE
        
        END
      )
      where empresa = 'Mutual'
      and dni_nuevotitular = 1      

      `
    )
    .then((ventas) => {
      res.status(200).json(ventas);
    })

    .catch((err) => {
      res.status(400).json(err);
    });
});

router.put("/asignaridparcela/:id", (req, res) => {
  let id = req.params.id;

  const idparcela = req.body.idparcela;

  servicios
    .update({
      idparcela: idparcela,
      where: { idservicio: id },
    })
    .then((list) => res.json(list))
    .catch((err) => res.json(err));
});

module.exports = router;
