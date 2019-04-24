const express = require('express');
const router = express.Router();
const mysqlConnection = require('../db/database');


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

router.get("/getcontrato", (req, res, next) => {
    mysqlConnection.query('SELECT * FROM maestro', (err, rows, fields) => {
        if (!err) {
            res.json(rows);
        } else {
            console.log(err);
        }
    })
});


//GET BY ID

router.get('/contrato/:id', (req, res) => {

    mysqlConnection.query('SELECT * FROM maestro WHERE CONTRATO = ?', [req.params.id], (err, rows, fields) => {
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
        sucursal: req.body.sucursalReg,
        contrato: req.body.contratoReg,
        nro_doc: req.body.nrodocReg,
        apellidos: req.body.apellidosReg,
        nombres: req.body.nombreReg,
        nacimiento: req.body.nacimientoReg,
        calle: req.body.calleReg,
        localidad: req.body.localidadReg
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
    let id = req.params.id;
    let sql = `UPDATE maestro SET SUCURSAL = '${cont.sucursalReg}', NRO_DOC = '${cont.nrodocReg}', APELLIDOS= '${cont.apellidosReg}', NOMBRES = '${cont.nombreReg}', NACIMIENTO = '${cont.nacimientoReg}', CALLE= '${cont.calleReg}', LOCALIDAD = '${cont.localidadReg}' WHERE CONTRATO = ?`;

    mysqlConnection.query(sql, [req.params.id], (err, rows, fields) => {
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
