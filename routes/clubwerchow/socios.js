const express = require("express");
const router = express.Router();
const Sequelize = require("sequelize");
const moment = require("moment");
const db = require("../../db/database");

const Op = Sequelize.Op;

const socios = require("../../models/clubwerchow/socios");
const soliSorteo = require("../../models/clubwerchow/solicitud_sorteo");
const participantesorteo = require("../../models/clubwerchow/participantes_sorteo");
const ganadores = require("../../models/clubwerchow/ganadores");

//GET BY ID

router.post("/nuevasol", (req, res, next) => {
  const solicitud = ({ apellido, nombre, dni, telefono, mail, es } = req.body);

  const data = {
    fecha_solicitud: moment().format("YYYY-MM-DD"),
    apellido: solicitud.apellido,
    nombre: solicitud.nombre,
    dni: solicitud.dni,
    telefono: solicitud.telefono,
    mail: solicitud.mail,
    socio: 0,
    nosocio: 0,
    referido: 0,
  };

  if (solicitud.es === "1") {
    data.socio = 1;
  } else if (solicitud.es === "2") {
    data.nosocio = 1;
  } else if (solicitud.es === "3") {
    data.referido = 1;
  }

  console.log("soli", solicitud);
  console.log("data", data);

  socios
    .create(data)
    .then((solicitud) => {
      res.status(200).json(solicitud);
    })
    .catch((err) => {
      console.log(err);
    });
});

router.post("/solisorteo", (req, res, next) => {
  const solicitud = ({ apellido, nombre, dni, telefono, mail, es } = req.body);

  const data = {
    fecha_solicitud: moment().format("YYYY-MM-DD"),
    apellido: solicitud.apellido,
    nombre: solicitud.nombre,
    dni: solicitud.dni,
    telefono: solicitud.telefono,
    mail: solicitud.mail,
    obra_soc: solicitud.obrasoc,
    socio: 0,
    nosocio: 0,
    referido: 0,
  };

  if (solicitud.es === "1") {
    data.socio = 1;
  } else if (solicitud.es === "2") {
    data.nosocio = 1;
  } else if (solicitud.es === "3") {
    data.referido = 1;
  }

  console.log("soli", solicitud);
  console.log("data", data);

  soliSorteo
    .create(data)
    .then((solicitud) => {
      res.status(200).json(solicitud);
    })
    .catch((err) => {
      console.log(err);
    });
});

router.put("/solcargada/:id", (req, res, next) => {
  let id = req.params.id;

  console.log(id);
  socios
    .update({ cargada: true }, { where: { idsocio: id } })
    .then((solicitud) => {
      res.status(200).json(solicitud);
    })
    .catch((err) => {
      console.log(err);
    });
});

router.get("/solicitudes", (req, res, next) => {
  socios
    .findAll()
    .then((solicitud) => {
      res.status(200).json(solicitud);
    })
    .catch((err) => {
      console.log(err);
    });
});

router.get("/solicitudessorteo", (req, res, next) => {
  soliSorteo
    .findAll()
    .then((solicitud) => {
      res.status(200).json(solicitud);
    })
    .catch((err) => {
      console.log(err);
    });
});

router.get("/participantes", (req, res, next) => {
  participantesorteo
    .findAll({ attributes: ["participante", "dni"], where: { estado: 1 } })
    .then((solicitud) => {
      res.status(200).json(solicitud);
    })
    .catch((err) => {
      console.log(err);
    });
});

router.get("/ganadores", (req, res, next) => {
  ganadores
    .findAll()
    .then((solicitud) => {
      res.status(200).json(solicitud);
    })
    .catch((err) => {
      console.log(err);
    });
});

router.delete("/eliminarganador/:id", (req, res, next) => {
  ganadores
    .destroy({
      where: { ganador: req.params.id },
    })
    .then((solicitud) => {
      res.status(200).json(solicitud);
    })
    .catch((err) => {
      console.log(err);
    });
});

router.delete("/eliminarganadores", (req, res, next) => {
  ganadores
    .destroy({
      where: {},
      truncate: true,
    })
    .then((solicitud) => {
      res.status(200).json(solicitud);
    })
    .catch((err) => {
      console.log(err);
    });
});

router.post("/ganador", (req, res, next) => {
  const winner = ({ ganador, premio, fecha } = req.body);

  ganadores
    .create(winner)
    .then((solicitud) => {
      res.status(200).json(solicitud);
    })
    .catch((err) => {
      console.log(err);
    });
});

module.exports = router;
