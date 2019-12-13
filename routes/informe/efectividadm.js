const express = require("express");
const router = express.Router();
const sequelize = require("sequelize");
const db = require("../../db/database");
const Op = sequelize.Op;
const paymentm = require("../../models/sgi/paymentm");

// EFETIVIDAD COBRADORES

router.get("/ecobradorestotal", (req, res, next) => {
  paymentm
    .findAll({
      attributes: [
        "zona",
        [sequelize.fn("count", sequelize.col("contrato")), "fichas"],
        [sequelize.fn("sum", sequelize.col("cuota")), "cobranza"]
      ],
      where: {
        zona: { [Op.notIn]: [1, 3, 5, 60, 99] },
        noviembre: { [Op.in]: [0, 1] },
        grupo: 1000
      },
      raw: true,
      group: ["zona"],
      order: sequelize.literal("zona ASC")
    })

    .then(efectividad => {
      res.status(200).json(efectividad);
    })

    .catch(err => {
      res.status(400).json(err);
    });
});

router.get("/ecobradorescobrado", (req, res, next) => {
  paymentm
    .findAll({
      attributes: [
        "zona",
        [sequelize.fn("count", sequelize.col("contrato")), "fichas"],
        [sequelize.fn("sum", sequelize.col("cuota")), "cobranza"]
      ],
      where: {
        zona: { [Op.notIn]: [1, 3, 5, 60, 99] },
        noviembre: 1,
        grupo: 1000
      },
      raw: true,
      group: ["zona"],
      order: sequelize.literal("zona ASC")
    })

    .then(efectividad => {
      res.status(200).json(efectividad);
    })

    .catch(err => {
      res.status(400).json(err);
    });
});

// EFECTIVIDAD TARJETAS

router.get("/etarjetassjtotal", (req, res, next) => {
  paymentm
    .findAll({
      attributes: [
        "grupo",
        [sequelize.fn("count", sequelize.col("contrato")), "fichas"],
        [sequelize.fn("sum", sequelize.col("cuota")), "cobranza"]
      ],
      where: {
        grupo: { [Op.in]: [3400, 3600, 3700, 3800, 3900, 4000] },
        noviembre: { [Op.in]: [0, 1] },
        sucursal: "W"
      },
      raw: true,
      group: ["grupo"],
      order: sequelize.literal("grupo ASC")
    })

    .then(efectividad => {
      res.status(200).json(efectividad);
    })

    .catch(err => {
      res.status(400).json(err);
    });
});

router.get("/etarjetassjcobrado", (req, res, next) => {
  paymentm
    .findAll({
      attributes: [
        "grupo",
        [sequelize.fn("count", sequelize.col("contrato")), "fichas"],
        [sequelize.fn("sum", sequelize.col("cuota")), "cobranza"]
      ],
      where: {
        grupo: { [Op.in]: [3400, 3600, 3700, 3800, 3900, 4000] },
        noviembre: 1,
        sucursal: "W"
      },
      raw: true,
      group: ["grupo"],
      order: sequelize.literal("grupo ASC")
    })

    .then(efectividad => {
      res.status(200).json(efectividad);
    })

    .catch(err => {
      res.status(400).json(err);
    });
});

router.get("/etarjetapalpalatotal", (req, res, next) => {
  paymentm
    .findAll({
      attributes: [
        "grupo",
        [sequelize.fn("count", sequelize.col("contrato")), "fichas"],
        [sequelize.fn("sum", sequelize.col("cuota")), "cobranza"]
      ],
      where: {
        grupo: { [Op.in]: [3400, 3600, 3700, 3800, 3900, 4000] },
        noviembre: { [Op.in]: [0, 1] },
        sucursal: "L"
      },
      raw: true,
      group: ["grupo"],
      order: sequelize.literal("grupo ASC")
    })

    .then(efectividad => {
      res.status(200).json(efectividad);
    })

    .catch(err => {
      res.status(400).json(err);
    });
});

router.get("/etarjetapalpalacobrado", (req, res, next) => {
  paymentm
    .findAll({
      attributes: [
        "grupo",
        [sequelize.fn("count", sequelize.col("contrato")), "fichas"],
        [sequelize.fn("sum", sequelize.col("cuota")), "cobranza"]
      ],
      where: {
        grupo: { [Op.in]: [3400, 3600, 3700, 3800, 3900, 4000] },
        noviembre: 1,
        sucursal: "L"
      },
      raw: true,
      group: ["grupo"],
      order: sequelize.literal("grupo ASC")
    })

    .then(efectividad => {
      res.status(200).json(efectividad);
    })

    .catch(err => {
      res.status(400).json(err);
    });
});

router.get("/etarjetasanpedrototal", (req, res, next) => {
  paymentm
    .findAll({
      attributes: [
        "grupo",
        [sequelize.fn("count", sequelize.col("contrato")), "fichas"],
        [sequelize.fn("sum", sequelize.col("cuota")), "cobranza"]
      ],
      where: {
        grupo: { [Op.in]: [3400, 3600, 3700, 3800, 3900, 4000] },
        noviembre: { [Op.in]: [0, 1] },
        sucursal: "P"
      },
      raw: true,
      group: ["grupo"],
      order: sequelize.literal("grupo ASC")
    })

    .then(efectividad => {
      res.status(200).json(efectividad);
    })

    .catch(err => {
      res.status(400).json(err);
    });
});

router.get("/etarjetasanpedrocobrado", (req, res, next) => {
  paymentm
    .findAll({
      attributes: [
        "grupo",
        [sequelize.fn("count", sequelize.col("contrato")), "fichas"],
        [sequelize.fn("sum", sequelize.col("cuota")), "cobranza"]
      ],
      where: {
        grupo: { [Op.in]: [3400, 3600, 3700, 3800, 3900, 4000] },
        noviembre: 1,
        sucursal: "P"
      },
      raw: true,
      group: ["grupo"],
      order: sequelize.literal("grupo ASC")
    })

    .then(efectividad => {
      res.status(200).json(efectividad);
    })

    .catch(err => {
      res.status(400).json(err);
    });
});

router.get("/etarjetapericototal", (req, res, next) => {
  paymentm
    .findAll({
      attributes: [
        "grupo",
        [sequelize.fn("count", sequelize.col("contrato")), "fichas"],
        [sequelize.fn("sum", sequelize.col("cuota")), "cobranza"]
      ],
      where: {
        grupo: { [Op.in]: [3400, 3600, 3700, 3800, 3900, 4000] },
        noviembre: { [Op.in]: [0, 1] },
        sucursal: "R"
      },
      raw: true,
      group: ["grupo"],
      order: sequelize.literal("grupo ASC")
    })

    .then(efectividad => {
      res.status(200).json(efectividad);
    })

    .catch(err => {
      res.status(400).json(err);
    });
});

router.get("/etarjetapericocobrado", (req, res, next) => {
  paymentm
    .findAll({
      attributes: [
        "grupo",
        [sequelize.fn("count", sequelize.col("contrato")), "fichas"],
        [sequelize.fn("sum", sequelize.col("cuota")), "cobranza"]
      ],
      where: {
        grupo: { [Op.in]: [3400, 3600, 3700, 3800, 3900, 4000] },
        noviembre: 1,
        sucursal: "R"
      },
      raw: true,
      group: ["grupo"],
      order: sequelize.literal("grupo ASC")
    })

    .then(efectividad => {
      res.status(200).json(efectividad);
    })

    .catch(err => {
      res.status(400).json(err);
    });
});

//   EFECTIVIDAD OFICINA

router.get("/eoficinatotal", (req, res, next) => {
  paymentm
    .findAll({
      attributes: [
        "zona",
        [sequelize.fn("count", sequelize.col("contrato")), "fichas"],
        [sequelize.fn("sum", sequelize.col("cuota")), "cobranza"]
      ],
      where: {
        zona: { [Op.in]: [1, 3, 5, 60] },
        noviembre: { [Op.in]: [0, 1] },
        grupo: 1000
      },
      raw: true,
      group: ["zona"],
      order: sequelize.literal("zona ASC")
    })

    .then(efectividad => {
      res.status(200).json(efectividad);
    })

    .catch(err => {
      res.status(400).json(err);
    });
});

router.get("/eoficinacobrado", (req, res, next) => {
  paymentm
    .findAll({
      attributes: [
        "zona",
        [sequelize.fn("count", sequelize.col("contrato")), "fichas"],
        [sequelize.fn("sum", sequelize.col("cuota")), "cobranza"]
      ],
      where: { zona: { [Op.in]: [1, 3, 5, 60] }, noviembre: 1, grupo: 1000 },
      raw: true,
      group: ["zona"],
      order: sequelize.literal("zona ASC")
    })

    .then(efectividad => {
      res.status(200).json(efectividad);
    })

    .catch(err => {
      res.status(400).json(err);
    });
});

module.exports = router;
