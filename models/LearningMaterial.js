const mongoose = require('mongoose');

const learningMaterialSchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true }
});

module.exports = mongoose.model('LearningMaterial', learningMaterialSchema);
