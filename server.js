const express = require("express");
const cors = require("cors"); //for avoid cors policy issue
const usuariosRouter = require("./JS/rutas/usuarios");

const PORT = process.env.PORT || 3050;

const app = express();

app.use(cors());
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

//rutas
//por defecto
app.get("/", async (req, res) => {
  res.send("bienvenido a la api");
});

app.use("/usuarios", usuariosRouter);

app.listen(PORT, () => console.log(`servidor corriendo en puerto: ${PORT}`));
