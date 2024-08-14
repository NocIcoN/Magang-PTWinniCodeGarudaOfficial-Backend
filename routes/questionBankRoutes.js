const express = require('express');
const QuestionBank = require('../models/QuestionBank');

const router = express.Router();

// Menambahkan soal baru
router.post('/', async (req, res) => {
  try {
    const { question, answer, difficulty } = req.body;
    const newQuestion = new QuestionBank({ question, answer, difficulty });
    await newQuestion.save();
    res.status(201).json(newQuestion);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Mengambil semua soal
router.get('/', async (req, res) => {
  try {
    const questions = await QuestionBank.find();
    res.status(200).json(questions);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
