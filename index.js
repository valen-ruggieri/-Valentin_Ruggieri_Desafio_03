const express = require("express");
const app = express();
const PORT = 8080;
const container = require("./container");

app.listen(PORT, () => {
  console.log(`servidor funcionando en el puerto ${PORT} ✔`);
});
app.get("/", (req, res) => {
  res.send(`
  <section style="background:grey; text-align: center; margin: 10px">
<h1 style="padding:20px">BIENVENIDO AL DESAFIO 03</h1>
<div style="background: black; color: green; padding:10px">
<p>1️⃣ Para acceder a todos los productos modificar la ruta por <b style="color: red">/productos</b> </p>
<p>2️⃣ Para acceder a un producto random modificar la ruta a <b style="color: red">/productoRandom</b></p></div></section>`);
});

const Container = new container("productos.txt");

app.get("/productos", (req, res) => {
  res.send(`
  <section style="background:grey; text-align: center; margin: 10px">
    <h1 style="padding:20px">LISTA DE PRODUCTOS</h1>
    <div style="background: black; color: green; padding:10px">${Container.getAll()}</div>
    </section>`);
});

app.get("/productoRandom", (req, res) => {
  res.send(`
  <section style="background:grey; text-align: center; margin: 10px">
    <h1 style="padding:20px">PRODUCTO RANDOM</h1>
    <div style="background: black; color: green; padding:10px">${Container.getRandom()}</div>
    </section>`);
});
