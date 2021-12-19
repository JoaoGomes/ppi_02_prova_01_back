const mongoose = require("mongoose");

const { Schema } = mongoose;
const CustoSchema = new Schema({
  nome: { type: String, required: true, max: 100 },
  valor: { type: Number, required: true },
  status: { type: Boolean, required: true},
  //data: { type: Date},
  id_dono: {type: String, required: true },
});
// Exportar
module.exports = mongoose.model("Custo", CustoSchema);
