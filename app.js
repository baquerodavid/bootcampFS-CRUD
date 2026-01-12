const express = require("express");
const app = express();
const routes = require("./routes/userRoutes");
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => res.redirect("/usuarios"));
app.use("/usuarios", routes);

app.use((req, res) =>
  res.status(404).json({ mensaje: "404 - La página no existe" })
);

app.listen(PORT, () =>
  console.log(
    `El servidor está escuchando en el puerto http://localhost:${PORT} `
  )
);

// 👇 CODIGO MÍO DEL CHALLENGE EMPIEZA DESDE AQUÍ (solo lo de este archivo app.js) 👇

/* let usuarios = [
  { id: 1, nombre: "Ryu", edad: 32, lugarProcedencia: "Japón" },
  { id: 2, nombre: "Chun-Li", edad: 29, lugarProcedencia: "China" },
  { id: 3, nombre: "Guile", edad: 35, lugarProcedencia: "Estados Unidos" },
  { id: 4, nombre: "Dhalsim", edad: 45, lugarProcedencia: "India" },
  { id: 5, nombre: "Blanka", edad: 32, lugarProcedencia: "Brasil" },
];

// READ (CRUD) -> Obtiene la lista
app.get('/usuarios', (req, res) => {
  res.send(`
    <h1>Lista de personajes de Street Fighter</h1>
    <ul>
      ${usuarios
        .map(
          (usuario) =>
            `<li>ID: ${usuario.id} | Nombre: ${usuario.nombre} | Edad: ${usuario.edad} | Lugar de procedencia: ${usuario.lugarProcedencia} </li>`
        )
        .join("")}
    </ul>
  `);
})


// Obtiene la info de un personaje
app.get('/usuarios/:nombre', (req, res) => {
  const character = usuarios.find(
    (usuario) => usuario.nombre.toLowerCase() === req.params.nombre.toLowerCase()
  );

   if (!character) {
     return res.status(404).send(`<h2>No existe el personaje "${req.params.nombre}"</h2>`);
   }
  
  res.send(`
    <h2>Nombre: ${character.nombre}</h2>
    <p>ID: ${character.id}</p>
    <p>Edad: ${character.edad}</p>
    <p>Lugar de procedencia: ${character.lugarProcedencia}</p>
  `);
})

// CREATE (CRUD) -> Crea nuevos personajes
app.post('/usuarios', (req, res) => {
  const newFighter = {
    id: usuarios.length + 1,
    nombre: req.body.nombre,
    edad: req.body.edad,
    lugarProcedencia: req.body.lugarProcedencia
  };
  usuarios.push(newFighter);
  res.redirect('/usuarios')
})


app.listen(3000, () => {
  console.log("Express está escuchando en el puerto 3000");
});
*/