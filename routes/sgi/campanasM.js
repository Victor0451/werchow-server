const express = require("express");
const router = express.Router();
const db = require("../../db/database");
const Sequelize = require("sequelize");
const Op = Sequelize.Op;

const campanacasos = require("../../models/sgi/campanacasos");
const gestioncaso = require("../../models/sgi/gestioncaso");

//GET AT MUTUAL

router.get("/atM", (req, res, next) => {
  db.campsSequelize
    .query(
      `SELECT * FROM atcampanaM AS at
      
      `
    )
    .then((atcampana) => {
      res.status(200).json(atcampana);
    })

    .catch((err) => {
      res.status(400).json(err);
    });
});

//GET AT2 MUTUAL

router.get("/at2M", (req, res, next) => {
  db.campsSequelize
    .query(
      `SELECT * FROM at2campanaM AS at
      
      `
    )
    .then((at2campana) => {
      res.status(200).json(at2campana);
    })

    .catch((err) => {
      res.status(400).json(err);
    });
});

//GET REC WERCHOW

router.get("/recM", (req, res, next) => {
  db.campsSequelize
    .query(
      `SELECT * FROM reccampanaM as rc
       
      
       
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

router.get("/reinM", (req, res, next) => {
  db.campsSequelize
    .query(
      `SELECT * FROM reincampanaM as rn
        
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

router.get("/blanM", (req, res, next) => {
  db.campsSequelize
    .query(
      `SELECT * FROM blancampanaM as bl
        
      `
    )
    .then((blancampana) => {
      res.status(200).json(blancampana);
    })

    .catch((err) => {
      res.status(400).json(err);
    });
});

// GET AT CAMPANA

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
        idcampana: { [Op.in]: [28, 29, 30, 31, 32] },
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
        idcampana: { [Op.in]: [33, 34, 35, 36, 37] },
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
        idcampana: { [Op.in]: [38, 39, 40, 41, 42] },
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
        idcampana: { [Op.in]: [43, 44, 45, 46, 47] },
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

//GET CAMP BY OPERADOR

router.get("/campanaoperadorM/:id", (req, res, next) => {
  const { id } = req.params;

  db.sgiSequelize
    .query(
      ` SELECT * FROM campanacasos AS cc 
      INNER JOIN campanas AS c ON cc.idcampana = c.idcampana
      WHERE c.operador = "${id}"
      AND c.descripcion = "Atrasados"
      AND c.empresa =  "mutual"
      AND cc.accion IS NULL
      AND cc.estadocaso = 1

    `
    )
    .then((campanacasos) => {
      res.status(200).json(campanacasos);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

router.get("/campanaoperadorrecM/:id", (req, res, next) => {
  const { id } = req.params;

  db.sgiSequelize
    .query(
      ` SELECT * FROM campanacasos AS cc 
      INNER JOIN campanas AS c ON cc.idcampana = c.idcampana
      WHERE c.operador = "${id}"
      AND c.descripcion = "Recuperacion"
      AND c.empresa =  "mutual"
      AND cc.accion IS NULL
      AND cc.estadocaso = 1
    `
    )
    .then((campanacasos) => {
      res.status(200).json(campanacasos);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

router.get("/campanaoperadorreinM/:id", (req, res, next) => {
  const { id } = req.params;

  db.sgiSequelize
    .query(
      ` SELECT * FROM campanacasos AS cc 
      INNER JOIN campanas AS c ON cc.idcampana = c.idcampana
      WHERE c.operador = "${id}"
      AND c.descripcion = "Reincidente"
      AND c.empresa =  "mutual"
      AND cc.accion IS NULL
      AND cc.estadocaso = 1
    `
    )
    .then((campanacasos) => {
      res.status(200).json(campanacasos);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

router.get("/campanaoperadorblanM/:id", (req, res, next) => {
  const { id } = req.params;

  db.sgiSequelize
    .query(
      ` SELECT * FROM campanacasos AS cc 
      INNER JOIN campanas AS c ON cc.idcampana = c.idcampana
      WHERE c.operador = "${id}"
      AND c.descripcion = "Blanqueo"
      AND c.empresa =  "mutual"
      AND cc.accion IS NULL
      AND cc.estadocaso = 1
    `
    )
    .then((campanacasos) => {
      res.status(200).json(campanacasos);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

router.get("/campanaoperadorrecordatorioM/:id", (req, res, next) => {
  const { id } = req.params;

  db.sgiSequelize
    .query(
      ` SELECT * FROM campanacasos AS cc 
      INNER JOIN campanas AS c ON cc.idcampana = c.idcampana
      WHERE c.operador = "${id}"
      AND c.descripcion = "Recordatorio"
      AND c.empresa =  "mutual"
      AND cc.accion IS NULL
      AND cc.estadocaso = 1
    `
    )
    .then((campanacasos) => {
      res.status(200).json(campanacasos);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

//GET CAMP TRABAJADO BY OPERADOR

router.get("/campanaoperadortrabM/:id", (req, res, next) => {
  const { id } = req.params;

  db.sgiSequelize
    .query(
      ` SELECT * FROM campanacasos AS cc 
      INNER JOIN campanas AS c ON cc.idcampana = c.idcampana
      WHERE c.operador = "${id}"
      AND c.descripcion = "Atrasados"
      AND c.empresa =  "mutual"
      AND cc.accion = 1
      AND cc.estadocaso = 1
    `
    )
    .then((campanacasos) => {
      res.status(200).json(campanacasos);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

router.get("/campanaoperadortrabrecM/:id", (req, res, next) => {
  const { id } = req.params;

  db.sgiSequelize
    .query(
      ` SELECT * FROM campanacasos AS cc 
      INNER JOIN campanas AS c ON cc.idcampana = c.idcampana
      WHERE c.operador = "${id}"
      AND c.descripcion = "Recuperacion"
      AND c.empresa =  "mutual"
      AND cc.accion = 1
      AND cc.estadocaso = 1
    `
    )
    .then((campanacasos) => {
      res.status(200).json(campanacasos);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

router.get("/campanaoperadortrabblanM/:id", (req, res, next) => {
  const { id } = req.params;

  db.sgiSequelize
    .query(
      ` SELECT * FROM campanacasos AS cc 
      INNER JOIN campanas AS c ON cc.idcampana = c.idcampana
      WHERE c.operador = "${id}"
      AND c.descripcion = "Blanqueo"
      AND c.empresa =  "mutual"
      AND cc.accion = 1
      AND cc.estadocaso = 1
    `
    )
    .then((campanacasos) => {
      res.status(200).json(campanacasos);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

router.get("/campanaoperadortrabreinM/:id", (req, res, next) => {
  const { id } = req.params;

  db.sgiSequelize
    .query(
      ` SELECT * FROM campanacasos AS cc 
      INNER JOIN campanas AS c ON cc.idcampana = c.idcampana
      WHERE c.operador = "${id}"
      AND c.descripcion = "Reincidente"
      AND c.empresa =  "mutual"
      AND cc.accion = 1
      AND cc.estadocaso = 1
    `
    )
    .then((campanacasos) => {
      res.status(200).json(campanacasos);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

router.get("/campanaoperadortrabrecordatorioM/:id", (req, res, next) => {
  const { id } = req.params;

  db.sgiSequelize
    .query(
      ` SELECT * FROM campanacasos AS cc 
      INNER JOIN campanas AS c ON cc.idcampana = c.idcampana
      WHERE c.operador = "${id}"
      AND c.descripcion = "Recordatorio"
      AND c.empresa =  "mutual"
      AND cc.accion = 1
      AND cc.estadocaso = 1
    `
    )
    .then((campanacasos) => {
      res.status(200).json(campanacasos);
    })
    .catch((err) => {
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
      AND c.empresa =  "mutual"
      AND cc.accion = 1
      AND cc.estadocaso = 0

    `
    )
    .then((campanacasos) => {
      res.status(200).json(campanacasos);
    })
    .catch((err) => {
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
      AND c.empresa =  "mutual"
      AND cc.accion = 1
      AND cc.estadocaso = 0

    `
    )
    .then((campanacasos) => {
      res.status(200).json(campanacasos);
    })
    .catch((err) => {
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
      AND c.empresa =  "mutual"
      AND cc.accion = 1
      AND cc.estadocaso = 0

    `
    )
    .then((campanacasos) => {
      res.status(200).json(campanacasos);
    })
    .catch((err) => {
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
      AND c.empresa =  "mutual"
      AND cc.accion = 1
      AND cc.estadocaso = 0

    `
    )
    .then((campanacasos) => {
      res.status(200).json(campanacasos);
    })
    .catch((err) => {
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
      AND c.empresa =  "mutual"
      AND cc.accion = 1
      AND cc.estadocaso = 0

    `
    )
    .then((campanacasos) => {
      res.status(200).json(campanacasos);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

//GET NOTIFICACIONES BY OPERADOR

router.get("/campanaoperadornotiatM/:id", (req, res, next) => {
  const { id } = req.params;

  db.sgiSequelize
    .query(
      ` SELECT * FROM campanacasos AS cc 
      INNER JOIN campanas AS c ON cc.idcampana = c.idcampana
      INNER JOIN gestioncaso AS gc ON cc.idcaso = gc.idcaso
      WHERE c.operador = "${id}"
      AND c.descripcion = "Atrasados"
      AND c.empresa =  "mutual"
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

router.get("/campanaoperadornotirecM/:id", (req, res, next) => {
  const { id } = req.params;

  db.sgiSequelize
    .query(
      ` SELECT * FROM campanacasos AS cc 
      INNER JOIN campanas AS c ON cc.idcampana = c.idcampana
      INNER JOIN gestioncaso AS gc ON cc.idcaso = gc.idcaso
      WHERE c.operador = "${id}"
      AND c.descripcion = "Recuperacion"
      AND c.empresa =  "mutual"
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

router.get("/campanaoperadornotiblanM/:id", (req, res, next) => {
  const { id } = req.params;

  db.sgiSequelize
    .query(
      ` SELECT * FROM campanacasos AS cc 
      INNER JOIN campanas AS c ON cc.idcampana = c.idcampana
      INNER JOIN gestioncaso AS gc ON cc.idcaso = gc.idcaso
      WHERE c.operador = "${id}"
      AND c.descripcion = "Blanqueo"
      AND c.empresa =  "mutual"
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

router.get("/campanaoperadornotireinM/:id", (req, res, next) => {
  const { id } = req.params;

  db.sgiSequelize
    .query(
      ` SELECT * FROM campanacasos AS cc 
      INNER JOIN campanas AS c ON cc.idcampana = c.idcampana
      INNER JOIN gestioncaso AS gc ON cc.idcaso = gc.idcaso
      WHERE c.operador = "${id}"
      AND c.descripcion = "Reincidente"
      AND c.empresa =  "mutual"
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

//GET NOTIFICACIONES BY OPERADOR

router.get("/campanaoperadornotiatM/:id", (req, res, next) => {
  const { id } = req.params;

  db.sgiSequelize
    .query(
      ` SELECT * FROM campanacasos AS cc 
      INNER JOIN campanas AS c ON cc.idcampana = c.idcampana
      INNER JOIN gestioncaso AS gc ON cc.idcaso = gc.idcaso
      WHERE c.operador = "${id}"
      AND c.descripcion = "Atrasados"
      AND c.empresa =  "mutual"
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

router.get("/campanaoperadornotirecM/:id", (req, res, next) => {
  const { id } = req.params;

  db.sgiSequelize
    .query(
      ` SELECT * FROM campanacasos AS cc 
      INNER JOIN campanas AS c ON cc.idcampana = c.idcampana
      INNER JOIN gestioncaso AS gc ON cc.idcaso = gc.idcaso
      WHERE c.operador = "${id}"
      AND c.descripcion = "Recuperacion"
      AND c.empresa =  "mutual"
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

router.get("/campanaoperadornotiblanM/:id", (req, res, next) => {
  const { id } = req.params;

  db.sgiSequelize
    .query(
      ` SELECT * FROM campanacasos AS cc 
      INNER JOIN campanas AS c ON cc.idcampana = c.idcampana
      INNER JOIN gestioncaso AS gc ON cc.idcaso = gc.idcaso
      WHERE c.operador = "${id}"
      AND c.descripcion = "Blanqueo"
      AND c.empresa =  "mutual"
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

router.get("/campanaoperadornotireinM/:id", (req, res, next) => {
  const { id } = req.params;

  db.sgiSequelize
    .query(
      ` SELECT * FROM campanacasos AS cc 
      INNER JOIN campanas AS c ON cc.idcampana = c.idcampana
      INNER JOIN gestioncaso AS gc ON cc.idcaso = gc.idcaso
      WHERE c.operador = "${id}"
      AND c.descripcion = "Reincidente"
      AND c.empresa =  "mutual"
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

module.exports = router;
