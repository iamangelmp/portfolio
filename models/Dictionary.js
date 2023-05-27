const mongoose = require("mongoose");

// Definir el esquema
const dictionary = new mongoose.Schema({
  keywords: {
    english: { type: [String], required: false },
    spanish: { type: [String], required: false },
  },
  questions: {
    english: { type: [String], required: false },
    spanish: { type: [String], required: false },
  },
  answer: {
    english: { type: String, required: false },
    spanish: { type: String, required: false },
  },
  topic: {
    english: { type: String, required: false },
    spanish: { type: String, required: false },
  },
  comments: {
    english: { type: String, required: false },
    spanish: { type: String, required: false },
  },
});

// Crear el modelo a partir del esquema
const Dictionary = mongoose.model("Dictionary", dictionary);

// Exportar el modelo
module.exports = Dictionary;
