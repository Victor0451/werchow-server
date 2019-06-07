const express = require('express');
const router = express.Router();
const mysqlConnection = require('../db/database');


//GET LAST * CONTRATO

router.get("/getlastmaestro/:id", (req, res, next) => {
    mysqlConnection.query('SELECT * FROM maestro WHERE contrato = ? order by contrato Desc;', [req.params.id], (err, rows, fields) => {
        if (!err) {
            res.json(rows[0]);

        } else {
            console.log(err);
        }
    })
})

//GET LAST CONTRATO

router.get("/getlastcontrato", (req, res, next) => {
    mysqlConnection.query('SELECT CONTRATO FROM maestro order by contrato Desc;', (err, rows, fields) => {
        if (!err) {
            res.json(rows[0]);

        } else {
            console.log(err);
        }
    })
})


//GET ALL

router.get("/getlistadotitulares", (req, res, next) => {
    mysqlConnection.query('SELECT * FROM maestro', (err, rows, fields) => {
        if (!err) {
            res.json(rows);
        } else {
            console.log(err);
        }
    })
});


//GET ALL BY ID

router.get('/contrato/:id', (req, res) => {

    mysqlConnection.query('SELECT CONTRATO FROM maestro WHERE CONTRATO = ?', [req.params.id], (err, rows, fields) => {
        if (!err) {
            res.json(rows[0]);
        } else {
            console.log(err);
        }
    });
});


//INSERT

router.post('/postcontrato', (req, res) => {
    console.log(req.body);

    const data = {
        sucursal: req.body.sucursal,
        contrato: req.body.contratog,
        nro_doc: req.body.nro_doc,
        apellidos: req.body.apellidos,
        nombres: req.body.nombres,
        nacimiento: req.body.nacimiento,
        calle: req.body.calle,
        localidad: req.body.localidad,
        alta: req.body.alta,
        vigencia: req.body.vigencia,
        sexo: req.body.sexo,
        obra_soc: req.body.os,
        telefono: req.body.telefono,
        barrio: req.body.barrio,
        nro_calle: req.body.numero,
        domi_cobr: req.body.domCob,
        dom_lab: req.body.domLab
    };

    const sql = 'INSERT INTO maestro SET ?';
    mysqlConnection.query(sql, data, (err, result) => {
        if (!err) {
            console.log('Insert successfully')
        } else {
            console.log(err);
        }
    });
});


//UPDATE

router.put('/putcontrato/:id', (req, res) => {
    let cont = req.body;
    let id = req.params.contrato;
    let sql = `UPDATE maestro SET SUCURSAL = '${cont.sucursalReg}', NRO_DOC = '${cont.nrodocReg}', APELLIDOS= '${cont.apellidosReg}', NOMBRES = '${cont.nombreReg}', NACIMIENTO = '${cont.nacimientoReg}', CALLE= '${cont.calleReg}', LOCALIDAD = '${cont.localidadReg}' WHERE CONTRATO = ?`;

    mysqlConnection.query(sql, [id], (err, rows, fields) => {
        if (!err) {
            console.log('Update successfully')
        } else {
            console.log(err);
        }
    });
});



//DELETE

router.delete('/deletecontrato/:id', (req, res) => {
    mysqlConnection.query('DELETE FROM maestro WHERE CONTRATO = ?', [req.params.id], (err, rows, fields) => {
        if (!err) {
            res.json('delete  successfully');
        } else {
            console.log(err);
        }
    });

})


module.exports = router;
