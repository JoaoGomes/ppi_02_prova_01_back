const mongoose = require("mongoose");

const { Schema } = mongoose;
const ProducaoSchema = new Schema({
  quantidade: { type: Number, required: true, max: 100 },
  valor: { type: Number, required: true },
  status: { type: Boolean, required: true},
  //data: { type: Date},
  id_dono: {type: String, required: true },
});
// Exportar
module.exports = mongoose.model("Producao", ProducaoSchema);
