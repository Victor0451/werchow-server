const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");
const moment = require("moment");
const fs = require("fs")

let storage = multer.diskStorage({
  destination: path.join(__dirname, "../../uploads/stock"),
  filename: function (req, file, cb) {
    const fileName = file.originalname;
    cb(null, fileName);
  },
});

const upload = multer({ storage: storage });

router.post("/uploadimagen", upload.single("file"), (req, res) => {


  console.log(`Storage location is ${req.hostname}/${req.file.path}`);
  return res.send(req.file);
});



router.get("/archivo/:id", (req, res) => {
  const id = req.params.id;
  const file = path.join(
    __dirname,
    `../../uploads/stock/${id}`
  );
  res.sendFile(file); // Set disposition and send it.
});

router.get("/descargararchivo/:id", (req, res) => {
  const id = req.params.id;
  const file = path.join(
    __dirname,
    `../../uploads/stock/${id}`
  );
  res.download(file); // Set disposition and send it.
});

router.delete("/eliminararchivos/:id", (req, res) => {
  let id = req.params.id;

  const file = path.join(__dirname, `../../uploads/stock/${id}`);

  fs.unlinkSync(file);

  return res.send(req.file);

});



module.exports = router;
