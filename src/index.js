const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

// eslint-disable-next-line prettier/prettier
const url = "mongodb+srv://Admin:santa-clara@back-end-santa-clara.rmw9y.mongodb.net/Back-end-Santa-Clara?retryWrites=true&w=majority";
const mongoDB = process.env.MONGODB_URI || url;
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
const db = mongoose.connection;
db.on("error", console.error.bind(console, "Erro na Ligação ao MongoDB"));

// Importa rota
const produtor = require("./routes/produtores.route");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use("/", produtor);

const porta = 3333;
app.listen(porta, () => {
  console.log(`Servidor em execução na porta ${porta}`);
});
