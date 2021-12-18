const mongoose = require("mongoose");

const { Schema } = mongoose;
const ProdutorSchema = new Schema({
  nome: { type: String, required: true, max: 100 },
  senha: { type: String, required: true },
});
// Exportar
module.exports = mongoose.model("Produtor", ProdutorSchema);
