const mongoose = require('mongoose');

const questionBankSchema = new mongoose.Schema({
  question: { type: String, required: true },
  answer: { type: String, required: true },
  difficulty: { type: String }
});

module.exports = mongoose.model('QuestionBank', questionBankSchema);
