// Importa o modulo do Express
const express = require("express");

// Cria uma aplicação Express
const app = express();

// Define uma rota
app.get("/", (req, res) => {
  // Envia um retorno
  res.send("Hello World!");
});

// Inicia o servidor na porta '3000'
app.listen(3000, () => {
  // imprime um comentário de log no console
  console.log("Exemplo de aplicativo ouvindo a porta 3000");
});
