const express = require("express");
const router = express.Router();
const db = require("../../db/database");
//const Op = Sequelize.Op;

//GET LLAMADOS INCONCLUSOS WERCHOW

router.get("/werchow/llamin/:id", (req, res, next) => {
  const { id } = req.params;
  let newDate = new Date();
  let mes = newDate.getMonth() + 1;

  db.sgiSequelize
    .query(
      `select count(gc.idcaso) as casos 
      from campanas as c
      INNER JOIN campanacasos as cc on cc.idcampana = c.idcampana
      INNER JOIN gestioncaso as gc on gc.idcaso = cc.idcaso
      where c.operador = "${id}"
      and gc.accion in (1,2,3,4,5,6)
      and month(cc.fechacampana) = ${mes};
    `
    )
    .then(estadistica => {
      res.status(200).json(estadistica);
    })

    .catch(err => {
      res.status(400).json(err);
    });
});

router.get("/werchow/compago/:id", (req, res, next) => {
  const { id } = req.params;
  let newDate = new Date();
  let mes = newDate.getMonth() + 1;

  db.sgiSequelize
    .query(
      `select count(gc.idcaso) as casos 
      from campanas as c
      INNER JOIN campanacasos as cc on cc.idcampana = c.idcampana
      INNER JOIN gestioncaso as gc on gc.idcaso = cc.idcaso
      where c.operador = "${id}"
      and gc.accion = 7
      and month(cc.fechacampana) = ${mes};
    `
    )
    .then(estadistica => {
      res.status(200).json(estadistica);
    })

    .catch(err => {
      res.status(400).json(err);
    });
});

router.get("/werchow/nopaga/:id", (req, res, next) => {
  const { id } = req.params;
  let newDate = new Date();
  let mes = newDate.getMonth() + 1;

  db.sgiSequelize
    .query(
      `select count(gc.idcaso) as casos 
      from campanas as c
      INNER JOIN campanacasos as cc on cc.idcampana = c.idcampana
      INNER JOIN gestioncaso as gc on gc.idcaso = cc.idcaso
      where c.operador = "${id}"
      and gc.accion = 8
      and month(cc.fechacampana) = ${mes};
    `
    )
    .then(estadistica => {
      res.status(200).json(estadistica);
    })

    .catch(err => {
      res.status(400).json(err);
    });
});

router.get("/werchow/cuotadia/:id", (req, res, next) => {
  const { id } = req.params;
  let newDate = new Date();
  let mes = newDate.getMonth() + 1;

  db.sgiSequelize
    .query(
      `select count(gc.idcaso) as casos 
        from campanas as c
        INNER JOIN campanacasos as cc on cc.idcampana = c.idcampana
        INNER JOIN gestioncaso as gc on gc.idcaso = cc.idcaso
        where c.operador = "${id}"
        and gc.accion = 9
        and month(cc.fechacampana) = ${mes};
      `
    )
    .then(estadistica => {
      res.status(200).json(estadistica);
    })

    .catch(err => {
      res.status(400).json(err);
    });
});

router.get("/werchow/notificacion/:id", (req, res, next) => {
  const { id } = req.params;
  let newDate = new Date();
  let mes = newDate.getMonth() + 1;
console.log(mes)
  db.sgiSequelize
    .query(
      `select count(gc.idcaso) as casos 
        from campanas as c
        INNER JOIN campanacasos as cc on cc.idcampana = c.idcampana
        INNER JOIN gestioncaso as gc on gc.idcaso = cc.idcaso
        where c.operador = "${id}"
        and gc.accion = 10
        and month(cc.fechacampana) = ${mes};
      `
    )
    .then(estadistica => {
      res.status(200).json(estadistica);
    })

    .catch(err => {
      res.status(400).json(err);
    });
});

router.get("/werchow/carteraroja/:id", (req, res, next) => {
  const { id } = req.params;
  let newDate = new Date();
  let mes = newDate.getMonth() + 1;

  db.sgiSequelize
    .query(
      `select count(gc.idcaso) as casos 
        from campanas as c
        INNER JOIN campanacasos as cc on cc.idcampana = c.idcampana
        INNER JOIN gestioncaso as gc on gc.idcaso = cc.idcaso
        where c.operador = "${id}"
        and gc.accion = 13
        and month(cc.fechacampana) = ${mes};
      `
    )
    .then(estadistica => {
      res.status(200).json(estadistica);
    })

    .catch(err => {
      res.status(400).json(err);
    });
});

router.get("/werchow/sociofallecido/:id", (req, res, next) => {
  const { id } = req.params;
  let newDate = new Date();
  let mes = newDate.getMonth() + 1;

  db.sgiSequelize
    .query(
      `select count(gc.idcaso) as casos 
        from campanas as c
        INNER JOIN campanacasos as cc on cc.idcampana = c.idcampana
        INNER JOIN gestioncaso as gc on gc.idcaso = cc.idcaso
        where c.operador = "${id}"
        and gc.accion = 14
        and month(cc.fechacampana) = ${mes};
      `
    )
    .then(estadistica => {
      res.status(200).json(estadistica);
    })

    .catch(err => {
      res.status(400).json(err);
    });
});

router.get("/werchow/casosabiertos/:id", (req, res, next) => {
  const { id } = req.params;
  let newDate = new Date();
  let mes = newDate.getMonth() + 1;

  db.sgiSequelize
    .query(
      `select count(cc.idcaso) as casos
        from campanas as c
        INNER JOIN campanacasos as cc on cc.idcampana = c.idcampana
        where cc.idcampana not in (22,23,24,25,26,27)
        and c.operador = "${id}"
        and cc.estadocaso = 1
        and month(cc.fechacampana) = ${mes};
      `
    )
    .then(estadistica => {
      res.status(200).json(estadistica);
    })

    .catch(err => {
      res.status(400).json(err);
    });
});

router.get("/werchow/casoscerrados/:id", (req, res, next) => {
  const { id } = req.params;
  let newDate = new Date();
  let mes = newDate.getMonth() + 1;

  db.sgiSequelize
    .query(
      `select count(cc.idcaso) as casos
        from campanas as c
        INNER JOIN campanacasos as cc on cc.idcampana = c.idcampana
        where cc.idcampana not in (22,23,24,25,26,27)
        and c.operador = "${id}"        
        and cc.estadocaso = 0
        and month(cc.fechacampana) = ${mes};

      `
    )
    .then(estadistica => {
      res.status(200).json(estadistica);
    })

    .catch(err => {
      res.status(400).json(err);
    });
});

router.get("/werchow/casosconaccion/:id", (req, res, next) => {
  const { id } = req.params;
  let newDate = new Date();
  let mes = newDate.getMonth() + 1;

  db.sgiSequelize
    .query(
      `select count(cc.idcaso) as casos
        from campanas as c
        INNER JOIN campanacasos as cc on cc.idcampana = c.idcampana
        where cc.idcampana not in (22,23,24,25,26,27)
        and c.operador = "${id}"
        and cc.accion is not null
        and month(cc.fechacampana) = ${mes};
      `
    )
    .then(estadistica => {
      res.status(200).json(estadistica);
    })

    .catch(err => {
      res.status(400).json(err);
    });
});

router.get("/werchow/casossinaccion/:id", (req, res, next) => {
  const { id } = req.params;
  let newDate = new Date();
  let mes = newDate.getMonth() + 1;

  db.sgiSequelize
    .query(
      `select count(cc.idcaso) as casos
        from campanas as c
        INNER JOIN campanacasos as cc on cc.idcampana = c.idcampana
        where cc.idcampana not in (22,23,24,25,26,27)
        and c.operador = "${id}"
        and cc.accion is null
        and month(cc.fechacampana) = ${mes};
      `
    )
    .then(estadistica => {
      res.status(200).json(estadistica);
    })

    .catch(err => {
      res.status(400).json(err);
    });
});

module.exports = router;
