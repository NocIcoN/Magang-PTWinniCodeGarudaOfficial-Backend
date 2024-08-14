const mongoose = require('mongoose');

const reportSchema = new mongoose.Schema({
  content: { type: String, required: true },
  createdDate: { type: Date, required: true }
});

module.exports = mongoose.model('Report', reportSchema);
