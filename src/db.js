/* eslint-disable comma-dangle */
/* eslint-disable prettier/prettier */
const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://Admin:santa-clara@back-end-santa-clara.rmw9y.mongodb.net/Back-end-Santa-Clara?retryWrites=true&w=majority"
);

const produtorSchema = new mongoose.Schema(
  {
    name: String,
    password: String,
    role: String
  },
  // eslint-disable-next-line comma-dangle
  { collection: "produtores" }
);

module.exports = { Mongoose: mongoose, ProdutorSchema: produtorSchema };
