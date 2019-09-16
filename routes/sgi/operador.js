const express = require("express");
const router = express.Router();
const operador = require("../../models/sgi/operador");
const bcrypt = require("bcryptjs");
const config = require("config");
const jwt = require("jsonwebtoken");

router.get("/operador/:id", (req, res, next) => {
  operador
    .findOne({
      where: { usuario: req.params.id }
    })
    .then(operador => {
      res.status(200).json(operador);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

router.post("/postoperador", (req, res, next) => {
  const { usuario, contrasena, apellido, nombre, perfil, estado } = req.body;

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
    perfil,
    estado
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

router.put("/editar/:id", (req, res, next) => {
  const { contrasena, apellido, nombre, perfil, codigo, id } = req.body;

  const OperadorEdit = {
    id,
    contrasena,
    nombre,
    apellido,
    perfil,
    codigo
  };

 

  //Create salt & hash

  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(OperadorEdit.contrasena, salt, (err, hash) => {
      if (err) throw err;
      OperadorEdit.contrasena = hash;
      operador.update(
        {
          nombre: OperadorEdit.nombre,
          apellido: OperadorEdit.apellido, 
          perfil: OperadorEdit.perfil,
          codigo: OperadorEdit.codigo,
          estado: OperadorEdit.estado,
          contrasena: OperadorEdit.contrasena
        },
        { where: { id: OperadorEdit.id } }
      );
    });
  });
});

module.exports = router;
