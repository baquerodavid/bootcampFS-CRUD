const express = require("express");
const route = express.Router();
let usuarios = require("../BBDD/usuarios");

// GET all - Nos traemos todos los usuarios
route.get("/", (req, res) => res.json(usuarios));

// GET one - Nos traemos un solo usuario
route.get("/:nombre", (req, res) => {
  const name = req.params.nombre;
  const user = usuarios.find(
    (u) => u.nombre.toLocaleLowerCase() === name.toLocaleLowerCase()
  );
  if (!user) {
    res
      .status(404)
      .json({ mensaje: `El usuario ${name} que intentas encontrar no existe` });
  } else {
    res.json(user);
  }
});

// CREATE - POST - Creamos un usuario
route.post("/", (req, res) => {
  const newUser = {
    id: usuarios[usuarios.length - 1].id + 1,
    nombre: req.body.nombre,
    edad: req.body.edad,
    lugarProcedencia: req.body.lugarProcedencia,
  };
  usuarios.push(newUser);
  res.redirect("/usuarios");
});

// UPDATE - PUT - Actualizamos al usuario
route.put("/:nombre", (req, res) => {
  const name = req.params.nombre;
  const user = usuarios.findIndex(
    (u) => u.nombre.toLocaleLowerCase() === name.toLocaleLowerCase()
  );
  // Se pone -1 porque el findIndex nos devuelve -1 si no existe. Pero si existe, nos devuelve el índice o posición del item
  if (user === -1) {
    res.status(404).json({ mensaje: `El usuario ${name} no existe` });
  } else {
    usuarios[user].nombre = req.body.nombre;
    usuarios[user].edad = req.body.edad;
    usuarios[user].lugarProcedencia = req.body.lugarProcedencia;
  }
  res.json(usuarios[user]);
});

// DELETE - Eliminamos un usuario
route.delete("/:nombre", (req, res) => {
  const name = req.params.nombre;
  const user = usuarios.find(
    (u) => u.nombre.toLocaleLowerCase() === name.toLocaleLowerCase()
  );
  if (!user) {
    res
      .status(404)
      .json({ mensaje: `Usuario ${name} no eliminado porque no existe` });
  } else {
    usuarios = usuarios.filter(
      (u) => u.nombre.toLocaleLowerCase() !== name.toLocaleLowerCase()
    );
    res.json({ mensaje: `El usuario ${name} ha sido eliminado` });
  }
});

module.exports = route;
