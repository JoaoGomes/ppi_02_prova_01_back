const express = require("express");
const { MongoClient } = require("mongodb");

const app = express();

// eslint-disable-next-line prettier/prettier
const uri = "mongodb+srv://Admin:santa-clara@back-end-santa-clara.rmw9y.mongodb.net/Back-end-Santa-Clara?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useUnifiedTopology: true });

// const courseDocument = {
//  name: "Análise e Desenvolvimento de Sistemas",
//  type: "Superior",
// };

async function run() {
  try {
    await client.connect();
    const database = client.db("ifrs_db");
    // eslint-disable-next-line no-unused-vars
    const collection = database.collection("courses");
    // const result = await collection.insertOne(courseDocument);
    const query = { type: "Superior" };
    //    const result = await collection.find(query);
    //    console.log(result);
    // console.log(`${result.insertedCount} documentos foram inseridos com o _id:
    // ${result.insertedId}`);
    const options = {
      // ordena os documentos em ordem ascendente por nome (A->Z)
      sort: { name: 1 },
      // inclui apenas o campos name e type no documento retornado
      projection: { _id: 0, name: 1, type: 1 },
    };
    const cursor = collection.find(query, options);
    // imprime uma mensagem se não encontrar nenhum documento
    if ((await cursor.count()) === 0) {
      console.log("Nenhum documento retornado!");
    } // Percorre o resultado
    await cursor.forEach(console.dir);
  } finally {
    // Garante que o client fechará quando você terminar ou der erro;
    await client.close();
  }
}
run().catch(console.dir);

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
