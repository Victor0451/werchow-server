const express = require("express");
const router = express.Router();
const db = require("../../db/database");
const Sequelize = require("sequelize");
const Op = Sequelize.Op;
const moment = require("moment");

const campanacasos = require("../../models/sgi/campanacasos");
const gestioncaso = require("../../models/sgi/gestioncaso");

// GET POLICIA

router.get("/poliW", (req, res, next) => {
  db.sgiSequelize
    .query(
      `SELECT * FROM policampana AS p
    
    
    `
    )
    .then((politcampana) => {
      res.status(200).json(politcampana);
    })

    .catch((err) => {
      res.status(400).json(err);
    });
});

// GET AUX

router.get("/auxW", (req, res, next) => {
  db.sgiSequelize
    .query(
      `SELECT * FROM auxcampana AS aux
    
    `
    )
    .then((politcampana) => {
      res.status(200).json(politcampana);
    })

    .catch((err) => {
      res.status(400).json(err);
    });
});

//GET AT WERCHOW

router.get("/atW", (req, res, next) => {
  db.sgiSequelize
    .query(
      `SELECT * FROM atcampana AS at
      
    `
    )
    .then((atcampana) => {
      res.status(200).json(atcampana);
    })

    .catch((err) => {
      res.status(400).json(err);
    });
});

//GET REC WERCHOW

router.get("/recW", (req, res, next) => {
  db.sgiSequelize
    .query(
      `SELECT * FROM reccampana as rc    
     
    `
    )
    .then((reccampana) => {
      res.status(200).json(reccampana);
    })

    .catch((err) => {
      res.status(400).json(err);
    });
});

//GET REIN WERCHOW

router.get("/reinW", (req, res, next) => {
  db.sgiSequelize
    .query(
      `SELECT * FROM reincampana as rn
     
    `
    )
    .then((reincampana) => {
      res.status(200).json(reincampana);
    })

    .catch((err) => {
      res.status(400).json(err);
    });
});

//GET BLAN WERCHOW

router.get("/blanW", (req, res, next) => {
  db.sgiSequelize
    .query(
      `SELECT * FROM blancampana as bl
       
    `
    )
    .then((blancampana) => {
      res.status(200).json(blancampana);
    })

    .catch((err) => {
      res.status(400).json(err);
    });
});

// GET AT CAMPANAS

router.get("/consultacamp", (req, res, next) => {
  let desde = req.query.desde;
  let hasta = req.query.hasta;
  console.log(desde, hasta);

  campanacasos
    .findAll({
      attributes: ["idcampana", [Sequelize.fn("COUNT", "contrato"), "casos"]],
      where: {
        fechacampana: {
          [Op.between]: [desde, hasta],
        },
        estadocaso: 1,
        idcampana: { [Op.in]: [11, 12, 13, 14, 15] },
      },
      group: ["idcampana"],
    })
    .then((pagos) => {
      res.status(200).json(pagos);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

// GET REC CAMPANAS

router.get("/consultacamprec", (req, res, next) => {
  let desde = req.query.desde;
  let hasta = req.query.hasta;
  console.log(desde, hasta);

  campanacasos
    .findAll({
      attributes: ["idcampana", [Sequelize.fn("COUNT", "contrato"), "casos"]],
      where: {
        fechacampana: {
          [Op.between]: [desde, hasta],
        },
        estadocaso: 1,
        idcampana: { [Op.in]: [1, 2, 3, 4, 5] },
      },
      group: ["idcampana"],
    })
    .then((pagos) => {
      res.status(200).json(pagos);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

// GET REIN CAMPANAS

router.get("/consultacamprein", (req, res, next) => {
  let desde = req.query.desde;
  let hasta = req.query.hasta;
  console.log(desde, hasta);

  campanacasos
    .findAll({
      attributes: ["idcampana", [Sequelize.fn("COUNT", "contrato"), "casos"]],
      where: {
        fechacampana: {
          [Op.between]: [desde, hasta],
        },
        estadocaso: 1,
        idcampana: { [Op.in]: [6, 7, 8, 9, 10] },
      },
      group: ["idcampana"],
    })
    .then((pagos) => {
      res.status(200).json(pagos);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

// GET BLAN CAMPANAS

router.get("/consultacampblan", (req, res, next) => {
  let desde = req.query.desde;
  let hasta = req.query.hasta;
  console.log(desde, hasta);

  campanacasos
    .findAll({
      attributes: ["idcampana", [Sequelize.fn("COUNT", "contrato"), "casos"]],
      where: {
        fechacampana: {
          [Op.between]: [desde, hasta],
        },
        estadocaso: 1,
        idcampana: { [Op.in]: [16, 17, 18, 19, 20] },
      },
      group: ["idcampana"],
    })
    .then((pagos) => {
      res.status(200).json(pagos);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

// GET AUX CAMPANAS

router.get("/consultacampaux", (req, res, next) => {
  let desde = req.query.desde;
  let hasta = req.query.hasta;
  console.log(desde, hasta);

  campanacasos
    .findAll({
      attributes: ["idcampana", [Sequelize.fn("COUNT", "contrato"), "casos"]],
      where: {
        fechacampana: {
          [Op.between]: [desde, hasta],
        },
        estadocaso: 1,
        idcampana: { [Op.in]: [22, 23, 24, 25, 26] },
      },
      group: ["idcampana"],
    })
    .then((pagos) => {
      res.status(200).json(pagos);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

//GET CASO CAMPAÑA

router.get("/buscarcaso/:id", (req, res, next) => {
  const { id } = req.params;

  campanacasos
    .findOne({
      attributes: ["contrato", "idcampana"],
      where: { contrato: id, estadocaso: 1 },
      order: [["idcaso", "DESC"]],
    })
    .then((pagos) => {
      res.status(200).json(pagos);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

//GET CASO CAMPAÑA DNI

router.get("/buscarcasodni/:id", (req, res, next) => {
  const { id } = req.params;

  campanacasos
    .findOne({
      attributes: ["contrato", "idcampana", "dni"],
      where: { dni: id, estadocaso: 1 },
      order: [["idcaso", "DESC"]],
    })
    .then((pagos) => {
      res.status(200).json(pagos);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

//GET CASO CAMPAÑA APELLIDO

router.get("/buscarcasoapellido/:id", (req, res, next) => {
  const { id } = req.params;

  campanacasos
    .findAll({
      attributes: ["contrato", "idcampana", "apellido", "nombre", "dni"],
      where: { apellido: id, estadocaso: 1 },
      order: [["idcaso", "DESC"]],
    })
    .then((pagos) => {
      res.status(200).json(pagos);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

//GET GESTION CASO CAMPAÑA

router.get("/buscargestioncaso/:id", (req, res, next) => {
  const { id } = req.params;

  gestioncaso
    .findAll({
      attributes: [
        "operador",
        "contrato",
        "accion",
        "observacion",
        "nuevaaccion",
        "fechaaccion",
      ],
      where: { contrato: id },
      order: [["idgestion", "DESC"]],
    })
    .then((pagos) => {
      res.status(200).json(pagos);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

router.get("/volverallamar/:id", (req, res, next) => {
  const { id } = req.params;
  let tmp = new Date();
  let fecha = moment(tmp).format("YYYY-MM");
  console.log(`${fecha}-01`);
  db.sgiSequelize
    .query(
      `SELECT * 
      FROM campanacasos AS cc 
      INNER JOIN campanas AS c ON cc.idcampana = c.idcampana
      INNER JOIN gestioncaso AS gc ON gc.idcaso = cc.idcaso
      WHERE c.operador = "${id}"
      AND gc.accion in (1,2,3)
      and cc.estadocaso = 1
      and cc.fechacampana between '${fecha}-01' and '${fecha}-31'
      and gc.realizado = 1
      ORDER BY cc.fechacampana, gc.idgestion DESC
      
    `
    )
    .then((campanacasos) => {
      res.status(200).json(campanacasos);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

router.get("/credixa/:id", (req, res, next) => {
  const { id } = req.params;
  let tmp = new Date();
  let fecha = moment(tmp).format("YYYY-MM");
  console.log(`${fecha}-01`);
  db.sgiSequelize
    .query(
      ` SELECT * FROM campanacasos AS cc 
      INNER JOIN campanas AS c ON cc.idcampana = c.idcampana
      INNER JOIN gestioncaso AS gc ON gc.idcaso = cc.idcaso
      WHERE c.operador = "${id}"
      AND gc.accion in (4,5,6)
      and cc.estadocaso = 1
      and cc.fechacampana between '${fecha}-01' and '${fecha}-31'
      and gc.realizado = 1
      ORDER BY cc.fechacampana DESC
      
    `
    )
    .then((campanacasos) => {
      res.status(200).json(campanacasos);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

router.get("/compromisopago/:id", (req, res, next) => {
  const { id } = req.params;
  let tmp = new Date();
  let fecha = moment(tmp).format("YYYY-MM");
  console.log(`${fecha}-01`);
  db.sgiSequelize
    .query(
      ` SELECT * FROM campanacasos AS cc 
      INNER JOIN campanas AS c ON cc.idcampana = c.idcampana
      INNER JOIN gestioncaso AS gc ON gc.idcaso = cc.idcaso
      WHERE c.operador = "${id}"
      AND gc.accion = 7
      and cc.estadocaso = 1
      and cc.fechacampana between '${fecha}-01' and '${fecha}-31'
      and gc.realizado = 1
      ORDER BY cc.fechacampana DESC
      
    `
    )
    .then((campanacasos) => {
      res.status(200).json(campanacasos);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

//GET GESTION CASO BY OPERADOR

router.get("/getgestioncaso/:id", (req, res, next) => {
  const { id } = req.params;

  gestioncaso
    .findAll({
      where: { idcaso: id },
      order: [["idgestion", "DESC"]],
    })
    .then((campanacasos) => {
      res.status(200).json(campanacasos);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

//GET DEUDA RECUPERADA

router.get("/recuperacion/:id", (req, res, next) => {
  const { id } = req.params;

  db.sgiSequelize
    .query(
      `
   SELECT SUM(cc.montoadeudado) AS recuperacion
   FROM campanacasos AS cc 
   INNER JOIN gestioncaso AS gc on cc.idcaso = gc.idcaso 
   INNER JOIN campanas as c on cc.idcampana = c.idcampana 
   WHERE cc.accion = 1 
   AND gc.accion IN (7,9)
   AND c.operador = '${id}'
   
  `
    )

    .then((deudarecuperada) => {
      res.status(200).json(deudarecuperada);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

//GET DEUDA RECUPERADA

router.get("/deuda/:id", (req, res, next) => {
  const { id } = req.params;
  db.sgiSequelize
    .query(
      `
      SELECT SUM(cc.montoadeudado) AS deuda
      FROM campanacasos AS cc 
      INNER JOIN gestioncaso AS gc on cc.idcaso = gc.idcaso 
      INNER JOIN campanas as c on cc.idcampana = c.idcampana 
      WHERE cc.accion = 1 
      AND gc.accion NOT IN (7,9)
      AND c.operador = '${id}'
   
  `
    )

    .then((deudarecuperada) => {
      res.status(200).json(deudarecuperada);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

//INSERT CAMP

router.post("/crearcamp", (req, res, next) => {
  const caso = ({
    idcampana,
    fechacampana,
    mes,
    ano,
    sucursal,
    contrato,
    apellido,
    nombre,
    dni,
    telefono,
    movil,
    calle,
    nro_calle,
    barrio,
    localidad,
    cuota,
    cuotasadeudadas,
    montoadeudado,
    estadocaso,
  } = req.body);

  campanacasos
    .create(caso)
    .then((caso) => {
      res.status(200).json(caso);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

//INSERT GESTION CASO

router.post("/gestioncaso", (req, res, next) => {
  const datos = ({
    idcaso,
    contrato,
    operador,
    accion,
    observacion,
    fechaaccion,
    nuevaaccion,
    fechanuevaaccion,
  } = req.body);

  gestioncaso
    .create(datos)
    .then((datos) => {
      res.status(200).json(datos);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

//UPDATE ACCION
router.put("/updateaccion/:id", (req, res, next) => {
  campanacasos
    .update(
      {
        accion: true,
      },
      { where: { idcaso: req.params.id } }
    )
    .then((accion) => {
      res.status(200).json(accion);
    })
    .catch((error) => {
      res.status(400).json(error);
      console.log(error);
    });
});

//UPDATE ACCION
router.put("/cerrarcaso/:id", (req, res, next) => {
  campanacasos
    .update(
      {
        estadocaso: false,
      },
      { where: { idcaso: req.params.id } }
    )
    .then((accion) => {
      res.status(200).json(accion);
    })
    .catch((error) => {
      res.status(400).json(error);
      console.log(error);
    });
});

router.put("/cerrargestion/:id", (req, res, next) => {
  gestioncaso
    .update(
      {
        realizado: false,
      },
      { where: { idgestion: req.params.id } }
    )
    .then((accion) => {
      res.status(200).json(accion);
    })
    .catch((error) => {
      res.status(400).json(error);
      console.log(error);
    });
});

//UPDATE CERRAR CAOMPAÑAS
router.put("/cerrarcamps/:id", (req, res, next) => {
  let idcampana = req.params.id;

  campanacasos
    .update(
      {
        estadocaso: false,
      },

      {
        where: {
          idcampana: idcampana,
        },
      }
    )
    .then((accion) => {
      res.status(200).json(accion);
    })
    .catch((error) => {
      res.status(400).json(error);
      console.log(error);
    });
});

//----------------------- APIS SISTEMA NEXT -------------------------------

router.get("/campanaoperador", (req, res, next) => {
  let operador = req.query.operador;
  let empresa = req.query.empresa;
  let campana = req.query.campana;

  db.sgiSequelize
    .query(
      ` SELECT * FROM campanacasos AS cc 
      INNER JOIN campanas AS c ON cc.idcampana = c.idcampana
      WHERE c.operador = "${operador}"
      AND c.descripcion = "${campana}"
      AND c.empresa =  "${empresa}"
      AND cc.accion IS NULL
      and cc.estadocaso = 1
      ORDER BY cc.fechacampana DESC

    `
    )

    .then((efectividad) => {
      res.status(200).json(efectividad);
    })

    .catch((err) => {
      res.status(400).json(err);
    });
});

router.get("/campanaoperadortrab", (req, res, next) => {
  let operador = req.query.operador;
  let empresa = req.query.empresa;
  let campana = req.query.campana;

  db.sgiSequelize
    .query(
      ` SELECT * FROM campanacasos AS cc 
    INNER JOIN campanas AS c ON cc.idcampana = c.idcampana
    INNER JOIN gestioncaso AS gc ON cc.idcaso = gc.idcaso
    WHERE c.operador = "${operador}"
    AND c.descripcion = "${campana}"
    AND c.empresa =  "${empresa}"
    AND cc.accion = 1
    and cc.estadocaso = 1
    ORDER BY cc.fechacampana DESC

  `
    )

    .then((campanacasos) => {
      res.status(200).json(campanacasos);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

router.get("/campanaoperadornoti", (req, res, next) => {
  let operador = req.query.operador;
  let empresa = req.query.empresa;
  let campana = req.query.campana;

  db.sgiSequelize
    .query(
      ` SELECT * FROM campanacasos AS cc 
      INNER JOIN campanas AS c ON cc.idcampana = c.idcampana
      INNER JOIN gestioncaso AS gc ON cc.idcaso = gc.idcaso
      WHERE c.operador = "${operador}"
      AND c.descripcion = "${campana}"
      AND c.empresa =  "${empresa}"
      AND cc.accion = 1      
      AND gc.accion = 10
  `
    )

    .then((campanacasos) => {
      res.status(200).json(campanacasos);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

router.get("/campanasasignadas", (req, res, next) => {
  let desde = req.query.desde;
  let hasta = req.query.hasta;

  db.sgiSequelize
    .query(
      ` select c.idcampana, c.operador, c.descripcion, c.empresa, count(cc.contrato) as cantidad
      from campanas as c
      inner join campanacasos as cc on c.idcampana = cc.idcampana
      where cc.estadocaso = 1
      group by c.idcampana

    `
    )
    .then((campanacasos) => {
      res.status(200).json(campanacasos);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

module.exports = router;
