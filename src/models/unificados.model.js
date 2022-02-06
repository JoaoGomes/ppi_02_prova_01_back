const mongoose = require("mongoose");

const { Schema } = mongoose;

const UnificadoSchema = new Schema({
  nome: { type: String, required: true },
  quantidade: { type: Number, required: true },
  valor: { type: Number, required: true },
  status: { type: Boolean, required: true},
  id_dono: {type: String, required: true },
  id_cadastrador: {type: String, required: true },
  credito: { type: Boolean, required: true},
  data: {type: Date, required: true},
}, { timestamps: true,
});

module.exports = mongoose.model("Unificado", UnificadoSchema);
