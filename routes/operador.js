const express = require("express");
const router = express.Router();
const operador = require("../models/operador");
const bcrypt = require("bcryptjs");
const config = require("config");
const auth = require("../middleware/auth");
const jwt = require("jsonwebtoken");

router.get("/operadores", auth, (req, res, next) => {
  operador
    .findAll()
    .then(operadores => {
      res.json(operadores);
    })
    .catch(err => {
      res.json(err);
    });
});

router.post("/postoperador", (req, res, next) => {
  const { usuario, contrasena, apellido, nombre } = req.body;

  //Validacion simple

  if (!usuario || !contrasena) {
    return res.status(400).json({ msg: "Todos los campos son obligatorios" });
  }

  // chek usuario existente
  operador
    .findOne({
      where: {
        usuario: usuario
      }
    })
    .then(usuario => {
      if (usuario) return res.status(400).json({ msg: "Usuario Existente" });
    });

  const newOperador = {
    usuario,
    contrasena,
    nombre,
    apellido,
    perfil: "usuario",
    estado: "ACTIVO"
  };

  //Create salt & hash

  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(newOperador.contrasena, salt, (err, hash) => {
      if (err) throw err;
      newOperador.contrasena = hash;
      operador.create(newOperador).then(user => {
        jwt.sign(
          { id: user.id },
          config.get("jwtSecret"),
          { expiresIn: 3600 },
          (err, token) => {
            if (err) throw err;
            res.json({
              token,
              user: {
                id: user.id,
                usuario: user.usuario,
                contrasena: user.contrasena,
                nombre: user.nombre,
                apellido: user.apellido,
                perfil: user.perfil,
                estado: user.estado,
                createdAt: user.createdAt,
                updatedAt: user.updatedAt
              }
            });
          }
        );
      });
    });
  });
});

module.exports = router;
