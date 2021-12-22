const mongoose = require("mongoose");

const { Schema } = mongoose;

const CustoSchema = new Schema({
  nome: { type: String, required: true },
  valor: { type: Number, required: true },
  status: { type: Boolean, required: true},
  id_dono: {type: String, required: true },
}, { timestamps: true,
});

module.exports = mongoose.model("Custo", CustoSchema);
