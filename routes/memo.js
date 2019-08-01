const express = require('express');
const router = express.Router();
const memo = require("../models/memo");


router.post('/nuevo', (req, res) => {


    const newMemo = {
        CONTRATO,
        MEMO
    } = req.body;


    memo.create(newMemo)
        .then(memo => {
            res.status(200).json(memo)
        })
        .catch(err => {
            res.status(400).json(err)
        })
});


//GET ALL 

router.get('/memos/:id', (req, res, next) => {

    maestro.findAll({
        where: { CONTRATO: req.params.id },
        order: [['createdAt', 'DESC']]
    })
        .then(memos => {
            res.status(200).json(memos)
        })
        .catch(err => {
            res.status(400).json(err)
        })
})

//GET LAST MEMO

router.get('/lastmemo/:id', (req, res) => {

    memo.findOne({
        where: { CONTRATO: req.params.id },
        order: [['createdAt', 'DESC']]
    })
        .then(memo => res.json(memo))
        .catch(err => res.json(err))
});


module.exports = router;