const express = require("express");
const router = express.Router();
const multer = require('multer')
const path = require('path')

let storage = multer.diskStorage({
    destination: path.join(__dirname, '../../uploads/'),
    filename: function (req, file, cb) {
        const fileName = req.params.id + '-' + path.extname(file.originalname);
        cb(null, fileName)
    }
})

const upload = multer({ storage: storage })

router.post("/upload/:id", upload.single('file'), (req, res) => {
    console.log(`Storage location is ${req.hostname}/${req.file.path}`);
    return res.send(req.file)
});


module.exports = router; 