const express = require("express");
const router = express.Router();
const db = require("../../db/database");

router.get("/pagosmensuales", (req, res, next) => {
  db.wSequelize
    .query(
      `
        SELECT usu_ide as 'value',usu_nick as 'label'
        from werchow.usuario
        where usu_perfil = 'ASESOR'
        and usu_estado = 'ACTIVO'
`
    )
    .then((mapa) => {
      res.status(200).json(mapa);
    })

    .catch((err) => {
      res.status(400).json(err); 
    });
});


module.exports = router;
