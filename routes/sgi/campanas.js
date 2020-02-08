const express = require("express");
const router = express.Router();
const db = require("../../db/database");
const Sequelize = require("sequelize");
const Op = Sequelize.Op;

const campanacasos = require("../../models/sgi/campanacasos");
const gestioncaso = require("../../models/sgi/gestioncaso");

// GET POLICIA

router.get("/poliW", (req, res, next) => {
  db.sgiSequelize
    .query(
      `SELECT * FROM policampana AS poli
    
    `
    )
    .then(politcampana => {
      res.status(200).json(politcampana);
    })

    .catch(err => {
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
    .then(politcampana => {
      res.status(200).json(politcampana);
    })

    .catch(err => {
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
    .then(atcampana => {
      res.status(200).json(atcampana);
    })

    .catch(err => {
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
    .then(reccampana => {
      res.status(200).json(reccampana);
    })

    .catch(err => {
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
    .then(reincampana => {
      res.status(200).json(reincampana);
    })

    .catch(err => {
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
    .then(blancampana => {
      res.status(200).json(blancampana);
    })

    .catch(err => {
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
          [Op.between]: [desde, hasta]
        },
        estadocaso: 1,
        idcampana: { [Op.in]: [11, 12, 13, 14, 15] }
      },
      group: ["idcampana"]
    })
    .then(pagos => {
      res.status(200).json(pagos);
    })
    .catch(err => {
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
          [Op.between]: [desde, hasta]
        },
        estadocaso: 1,
        idcampana: { [Op.in]: [1, 2, 3, 4, 5] }
      },
      group: ["idcampana"]
    })
    .then(pagos => {
      res.status(200).json(pagos);
    })
    .catch(err => {
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
          [Op.between]: [desde, hasta]
        },
        estadocaso: 1,
        idcampana: { [Op.in]: [6, 7, 8, 9, 10] }
      },
      group: ["idcampana"]
    })
    .then(pagos => {
      res.status(200).json(pagos);
    })
    .catch(err => {
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
          [Op.between]: [desde, hasta]
        },
        estadocaso: 1,
        idcampana: { [Op.in]: [16, 17, 18, 19, 20] }
      },
      group: ["idcampana"]
    })
    .then(pagos => {
      res.status(200).json(pagos);
    })
    .catch(err => {
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
          [Op.between]: [desde, hasta]
        },
        estadocaso: 1,
        idcampana: { [Op.in]: [22, 23, 24, 25, 26] }
      },
      group: ["idcampana"]
    })
    .then(pagos => {
      res.status(200).json(pagos);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

//GET CASO CAMPAÑA

router.get("/buscarcaso/:id", (req, res, next) => {
  const { id } = req.params;

  campanacasos
    .findOne({
      attributes: ["contrato", "idcampana"],
      where: { contrato: id },
      order: [["idcaso", "DESC"]]
    })
    .then(pagos => {
      res.status(200).json(pagos);
    })
    .catch(err => {
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
        "fechaaccion"
      ],
      where: { contrato: id },
      order: [["idgestion", "DESC"]]
    })
    .then(pagos => {
      res.status(200).json(pagos);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

//GET CAMP BY OPERADOR

router.get("/campanaoperador/:id", (req, res, next) => {
  const { id } = req.params;

  db.sgiSequelize
    .query(
      ` SELECT * FROM campanacasos AS cc 
      INNER JOIN campanas AS c ON cc.idcampana = c.idcampana
      WHERE c.operador = "${id}"
      AND c.descripcion = "Atrasados"
      AND c.empresa =  "werchow"
      AND cc.accion IS NULL
      and cc.estadocaso = 1
      ORDER BY cc.fechacampana DESC

    `
    )
    .then(campanacasos => {
      res.status(200).json(campanacasos);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

router.get("/campanaoperadorrec/:id", (req, res, next) => {
  const { id } = req.params;

  db.sgiSequelize
    .query(
      ` SELECT * FROM campanacasos AS cc 
      INNER JOIN campanas AS c ON cc.idcampana = c.idcampana
      WHERE c.operador = "${id}"
      AND c.descripcion = "Recuperacion"
      AND c.empresa =  "werchow"
      AND cc.accion IS NULL
      and cc.estadocaso = 1
      ORDER BY cc.fechacampana DESC
    `
    )
    .then(campanacasos => {
      res.status(200).json(campanacasos);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

router.get("/campanaoperadorrein/:id", (req, res, next) => {
  const { id } = req.params;

  db.sgiSequelize
    .query(
      ` SELECT * FROM campanacasos AS cc 
      INNER JOIN campanas AS c ON cc.idcampana = c.idcampana
      WHERE c.operador = "${id}"
      AND c.descripcion = "Reincidente"
      AND c.empresa =  "werchow"
      AND cc.accion IS NULL
      and cc.estadocaso = 1
      ORDER BY cc.fechacampana DESC

    `
    )
    .then(campanacasos => {
      res.status(200).json(campanacasos);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

router.get("/campanaoperadorblan/:id", (req, res, next) => {
  const { id } = req.params;

  db.sgiSequelize
    .query(
      ` SELECT * FROM campanacasos AS cc 
      INNER JOIN campanas AS c ON cc.idcampana = c.idcampana
      WHERE c.operador = "${id}"
      AND c.descripcion = "Blanqueo"
      AND c.empresa =  "werchow"
      AND cc.accion IS NULL
      and cc.estadocaso = 1
      ORDER BY cc.fechacampana DESC

    `
    )
    .then(campanacasos => {
      res.status(200).json(campanacasos);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

router.get("/campanaoperadorpoli/:id", (req, res, next) => {
  const { id } = req.params;

  db.sgiSequelize
    .query(
      ` SELECT * FROM campanacasos AS cc 
      INNER JOIN campanas AS c ON cc.idcampana = c.idcampana
      WHERE c.operador = "${id}"
      AND c.descripcion = "Policia"
      AND c.empresa =  "werchow"
      AND cc.accion IS NULL
      and cc.estadocaso = 1
      ORDER BY cc.fechacampana DESC

    `
    )
    .then(campanacasos => {
      res.status(200).json(campanacasos);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

router.get("/campanaoperadorrecordatorio/:id", (req, res, next) => {
  const { id } = req.params;

  db.sgiSequelize
    .query(
      ` SELECT * FROM campanacasos AS cc 
      INNER JOIN campanas AS c ON cc.idcampana = c.idcampana
      WHERE c.operador = "${id}"
      AND c.descripcion = "Recordatorio"
      AND c.empresa =  "werchow"
      AND cc.accion IS NULL
      and cc.estadocaso = 1
      ORDER BY cc.fechacampana DESC

    `
    )
    .then(campanacasos => {
      res.status(200).json(campanacasos);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

//GET CAMP TRABAJADO BY OPERADOR

router.get("/campanaoperadortrab/:id", (req, res, next) => {
  const { id } = req.params;

  db.sgiSequelize
    .query(
      ` SELECT * FROM campanacasos AS cc 
      INNER JOIN campanas AS c ON cc.idcampana = c.idcampana
      WHERE c.operador = "${id}"
      AND c.descripcion = "Atrasados"
      AND c.empresa =  "werchow"
      AND cc.accion = 1
      and estadocaso = 1
      Order by fechacampana DESC
  

    `
    )
    .then(campanacasos => {
      res.status(200).json(campanacasos);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

router.get("/campanaoperadortrabrec/:id", (req, res, next) => {
  const { id } = req.params;

  db.sgiSequelize
    .query(
      ` SELECT * FROM campanacasos AS cc 
      INNER JOIN campanas AS c ON cc.idcampana = c.idcampana
      WHERE c.operador = "${id}"
      AND c.descripcion = "Recuperacion"
      AND c.empresa =  "werchow"
      AND cc.accion = 1
      and estadocaso = 1
      Order by fechacampana DESC
     

    `
    )
    .then(campanacasos => {
      res.status(200).json(campanacasos);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

router.get("/campanaoperadortrabblan/:id", (req, res, next) => {
  const { id } = req.params;

  db.sgiSequelize
    .query(
      ` SELECT * FROM campanacasos AS cc 
      INNER JOIN campanas AS c ON cc.idcampana = c.idcampana
      WHERE c.operador = "${id}"
      AND c.descripcion = "Blanqueo"
      AND c.empresa =  "werchow"
      AND cc.accion = 1
      and estadocaso = 1
      Order by fechacampana DESC
 
    `
    )
    .then(campanacasos => {
      res.status(200).json(campanacasos);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

router.get("/campanaoperadortrabpoli/:id", (req, res, next) => {
  const { id } = req.params;

  db.sgiSequelize
    .query(
      ` SELECT * FROM campanacasos AS cc 
      INNER JOIN campanas AS c ON cc.idcampana = c.idcampana
      WHERE c.operador = "${id}"
      AND c.descripcion = "Policia"
      AND c.empresa =  "werchow"
      AND cc.accion = 1
      and estadocaso = 1
      Order by fechacampana DESC
    `
    )
    .then(campanacasos => {
      res.status(200).json(campanacasos);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

router.get("/campanaoperadortrabrein/:id", (req, res, next) => {
  const { id } = req.params;

  db.sgiSequelize
    .query(
      ` SELECT * FROM campanacasos AS cc 
      INNER JOIN campanas AS c ON cc.idcampana = c.idcampana
      WHERE c.operador = "${id}"
      AND c.descripcion = "Reincidente"
      AND c.empresa =  "werchow"
      AND cc.accion = 1
      and estadocaso = 1
      Order by fechacampana DESC
    `
    )
    .then(campanacasos => {
      res.status(200).json(campanacasos);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

router.get("/campanaoperadortrabrecordatorio/:id", (req, res, next) => {
  const { id } = req.params;

  db.sgiSequelize
    .query(
      ` SELECT * FROM campanacasos AS cc 
      INNER JOIN campanas AS c ON cc.idcampana = c.idcampana
      WHERE c.operador = "${id}"
      AND c.descripcion = "Recordatorio"
      AND c.empresa =  "werchow"
      AND cc.accion = 1
      and estadocaso = 1
      Order by fechacampana DESC
    `
    )
    .then(campanacasos => {
      res.status(200).json(campanacasos);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

// GET CAMPANA OP HISTORIA

router.get("/campanaoperadorhist/:id", (req, res, next) => {
  const { id } = req.params;

  db.sgiSequelize
    .query(
      ` SELECT * FROM campanacasos AS cc 
      INNER JOIN campanas AS c ON cc.idcampana = c.idcampana
      WHERE c.operador = "${id}"
      AND c.descripcion = "Atrasados"
      AND c.empresa =  "werchow"
      AND cc.accion = 1
      AND cc.estadocaso = 0

    `
    )
    .then(campanacasos => {
      res.status(200).json(campanacasos);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

router.get("/campanaoperadorhistrec/:id", (req, res, next) => {
  const { id } = req.params;

  db.sgiSequelize
    .query(
      ` SELECT * FROM campanacasos AS cc 
      INNER JOIN campanas AS c ON cc.idcampana = c.idcampana
      WHERE c.operador = "${id}"
      AND c.descripcion = "Recuperacion"
      AND c.empresa =  "werchow"
      AND cc.accion = 1
      AND cc.estadocaso = 0

    `
    )
    .then(campanacasos => {
      res.status(200).json(campanacasos);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

router.get("/campanaoperadorhistrein/:id", (req, res, next) => {
  const { id } = req.params;

  db.sgiSequelize
    .query(
      ` SELECT * FROM campanacasos AS cc 
      INNER JOIN campanas AS c ON cc.idcampana = c.idcampana
      WHERE c.operador = "${id}"
      AND c.descripcion = "Reincidente"
      AND c.empresa =  "werchow"
      AND cc.accion = 1
      AND cc.estadocaso = 0

    `
    )
    .then(campanacasos => {
      res.status(200).json(campanacasos);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

router.get("/campanaoperadorhistblan/:id", (req, res, next) => {
  const { id } = req.params;

  db.sgiSequelize
    .query(
      ` SELECT * FROM campanacasos AS cc 
      INNER JOIN campanas AS c ON cc.idcampana = c.idcampana
      WHERE c.operador = "${id}"
      AND c.descripcion = "Blanqueo"
      AND c.empresa =  "werchow"
      AND cc.accion = 1
      AND cc.estadocaso = 0

    `
    )
    .then(campanacasos => {
      res.status(200).json(campanacasos);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

router.get("/campanaoperadorhistrecordatorio/:id", (req, res, next) => {
  const { id } = req.params;

  db.sgiSequelize
    .query(
      ` SELECT * FROM campanacasos AS cc 
      INNER JOIN campanas AS c ON cc.idcampana = c.idcampana
      WHERE c.operador = "${id}"
      AND c.descripcion = "Recordatorio"
      AND c.empresa =  "werchow"
      AND cc.accion = 1
      AND cc.estadocaso = 0

    `
    )
    .then(campanacasos => {
      res.status(200).json(campanacasos);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

//GET NOTIFICACIONES BY OPERADOR

router.get("/campanaoperadornotiat/:id", (req, res, next) => {
  const { id } = req.params;

  db.sgiSequelize
    .query(
      ` SELECT * FROM campanacasos AS cc 
      INNER JOIN campanas AS c ON cc.idcampana = c.idcampana
      INNER JOIN gestioncaso AS gc ON cc.idcaso = gc.idcaso
      WHERE c.operador = "${id}"
      AND c.descripcion = "Atrasados"
      AND c.empresa =  "werchow"
      AND cc.accion = 1
   
      AND gc.accion = 10

    `
    )
    .then(campanacasos => {
      res.status(200).json(campanacasos);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

router.get("/campanaoperadornotirec/:id", (req, res, next) => {
  const { id } = req.params;

  db.sgiSequelize
    .query(
      ` SELECT * FROM campanacasos AS cc 
      INNER JOIN campanas AS c ON cc.idcampana = c.idcampana
      INNER JOIN gestioncaso AS gc ON cc.idcaso = gc.idcaso
      WHERE c.operador = "${id}"
      AND c.descripcion = "Recuperacion"
      AND c.empresa =  "werchow"
      AND cc.accion = 1
      
      AND gc.accion = 10

    `
    )
    .then(campanacasos => {
      res.status(200).json(campanacasos);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

router.get("/campanaoperadornotiblan/:id", (req, res, next) => {
  const { id } = req.params;

  db.sgiSequelize
    .query(
      ` SELECT * FROM campanacasos AS cc 
      INNER JOIN campanas AS c ON cc.idcampana = c.idcampana
      INNER JOIN gestioncaso AS gc ON cc.idcaso = gc.idcaso
      WHERE c.operador = "${id}"
      AND c.descripcion = "Blanqueo"
      AND c.empresa =  "werchow"
      AND cc.accion = 1
     
      AND gc.accion = 10

    `
    )
    .then(campanacasos => {
      res.status(200).json(campanacasos);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

router.get("/campanaoperadornotipoli/:id", (req, res, next) => {
  const { id } = req.params;

  db.sgiSequelize
    .query(
      ` SELECT * FROM campanacasos AS cc 
      INNER JOIN campanas AS c ON cc.idcampana = c.idcampana
      INNER JOIN gestioncaso AS gc ON cc.idcaso = gc.idcaso
      WHERE c.operador = "${id}"
      AND c.descripcion = "Policia"
      AND c.empresa =  "werchow"
      AND cc.accion = 1
     
      AND gc.accion = 10

    `
    )
    .then(campanacasos => {
      res.status(200).json(campanacasos);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

router.get("/campanaoperadornotirein/:id", (req, res, next) => {
  const { id } = req.params;

  db.sgiSequelize
    .query(
      ` SELECT * FROM campanacasos AS cc 
      INNER JOIN campanas AS c ON cc.idcampana = c.idcampana
      INNER JOIN gestioncaso AS gc ON cc.idcaso = gc.idcaso
      WHERE c.operador = "${id}"
      AND c.descripcion = "Reincidente"
      AND c.empresa =  "werchow"
      AND cc.accion = 1
      
      AND gc.accion = 10

    `
    )
    .then(campanacasos => {
      res.status(200).json(campanacasos);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

//GET GESTION CASO BY OPERADOR

router.get("/getgestioncaso/:id", (req, res, next) => {
  const { id } = req.params;

  gestioncaso
    .findAll({
      where: { idcaso: id },
      order: [["idgestion", "DESC"]]
    })
    .then(campanacasos => {
      res.status(200).json(campanacasos);
    })
    .catch(err => {
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

    .then(deudarecuperada => {
      res.status(200).json(deudarecuperada);
    })
    .catch(err => {
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

    .then(deudarecuperada => {
      res.status(200).json(deudarecuperada);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

//INSERT CAMP

router.post("/crearcampat", (req, res, next) => {
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
    estadocaso
  } = req.body);

  campanacasos
    .create(caso)
    .then(caso => {
      res.status(200).json(caso);
    })
    .catch(err => {
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
    fechanuevaaccion
  } = req.body);

  gestioncaso
    .create(datos)
    .then(datos => {
      res.status(200).json(datos);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

//UPDATE ACCION
router.put("/updateaccion/:id", (req, res, next) => {
  campanacasos
    .update(
      {
        accion: true
      },
      { where: { idcaso: req.params.id } }
    )
    .then(accion => {
      res.status(200).json(accion);
    })
    .catch(error => {
      res.status(400).json(error);
      console.log(error);
    });
});

//UPDATE ACCION
router.put("/cerrarcaso/:id", (req, res, next) => {
  campanacasos
    .update(
      {
        estadocaso: false
      },
      { where: { idcaso: req.params.id } }
    )
    .then(accion => {
      res.status(200).json(accion);
    })
    .catch(error => {
      res.status(400).json(error);
      console.log(error);
    });
});

//UPDATE CERRAR CAOMPAÑAS
router.put("/cerrarcamps", (req, res, next) => {
  let array = req.body;

  console.log(array);

  campanacasos
    .update(
      {
        estadocaso: false
      },

      {
        where: {
          idcampana: {
            [Op.in]: array
          }
        }
      }
    )
    .then(accion => {
      res.status(200).json(accion);
    })
    .catch(error => {
      res.status(400).json(error);
      console.log(error);
    });
});

module.exports = router;
