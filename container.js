const fs = require("fs");

class container {
  constructor(archivo) {
    this.archivo = archivo;
  }

  getAll() {
    try {
      const contentParse = this.functionRep();
      return contentParse.map(
        (producto) =>
          `<p>Name: ${producto.title} Price: ${producto.price} thumbnail: ${producto.thumbnail}</p> `
      );
    } catch (err) {
      console.log("no se puede leer el archivo" + err);
    }
  }
  getRandom() {
    try {
      const contentParse = this.functionRep();
      const indexRandom = Math.floor(Math.random() * contentParse.length);
      const objetRandom = contentParse.find(
        (producto) => indexRandom === producto.id
      );
      const contentRandom = [objetRandom];
      return contentRandom.map(
        (producto) =>
          `<p>Name: ${producto.title} Price: ${producto.price} thumbnail: ${producto.thumbnail}</p> `
      );
    } catch (err) {
      console.log("no se puede leer el archivo" + err);
    }
  }
  functionRep() {
    const archivoName = this.archivo;
    const content = fs.readFileSync(archivoName);
    const contentParse = JSON.parse(content);
    return contentParse;
  }
}

module.exports = container;
