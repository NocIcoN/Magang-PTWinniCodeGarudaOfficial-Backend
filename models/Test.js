const mongoose = require('mongoose');

const testSchema = new mongoose.Schema({
  testName: { type: String, required: true },
  description: { type: String },
  duration: { type: Number }
});

module.exports = mongoose.model('Test', testSchema);
