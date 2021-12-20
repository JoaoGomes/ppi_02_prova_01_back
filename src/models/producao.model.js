const mongoose = require("mongoose");

const { Schema } = mongoose;
const ProducaoSchema = new Schema({
  quantidade: { type: Number, required: true },
  valor: { type: Number, required: true },
  status: { type: Boolean, required: true},
  id_dono: {type: String, required: true },
}, { timestamps: true,
});
// Exportar
module.exports = mongoose.model("Producao", ProducaoSchema);
