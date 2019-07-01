const express = require("express");
const router = express.Router();
const mysqlConnection = require("../db/database");

//GET SO

router.get("/getso", (req, res) => {
  mysqlConnection.query("SELECT * FROM so062019", (err, rows, fields) => {
    if (!err) {
      res.json(rows);
      res.send();
    } else {
      console.log(err);
      res.send(err);
    }
  });
});

//GET SO 1001

router.get("/getso1001", (req, res) => {
  mysqlConnection.query(
    "SELECT  maestro.CONTRATO, maestro.NRO_DOC ,maestro.APELLIDOS, maestro.NOMBRES, maestro.CALLE, maestro.NRO_CALLE, maestro.barrio, maestro.localidad, maestro.ALTA, TIMESTAMPDIFF(YEAR,maestro.NACIMIENTO,CURDATE()) AS edad, maestro.TELEFONO, maestro.MOVIL, so062019.DEUDA as cuota, so062019.cuota as montocuota, (so062019.cuota * so062019.DEUDA) as deuda , so062019.SUCURSAL, so062019.GRUPO     FROM maestro    RIGHT JOIN so062019 ON maestro.CONTRATO = so062019.CONTRATO    WHERE so062019.GRUPO in (666, 1001,3444,3666,3777,3888,3999,4004)    ",
    (err, rows, fields) => {
      if (!err) {
        res.json(rows);
        res.send();
      } else {
        console.log(err);
        res.send(err);
      }
    }
  );
});



module.exports = router;
