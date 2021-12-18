const mongo = require("mongodb");

const url =
  "mongodb+srv://Admin:santa-clara@back-end-santa-clara.rmw9y.mongodb.net/Back-end-Santa-Clara?retryWrites=true&w=majority";

const con = mongo.createConnection({
  host: "localhost",
  port: "3000",
  user: "Admin",
  password: "santa-clara",
  database: "sitepoint",
});

con.connect((err) => {
  if (err) {
    console.log("Erro ao conectar ao banco de dados");
    return;
  }
  console.log("Conexão estabelecida");
});
