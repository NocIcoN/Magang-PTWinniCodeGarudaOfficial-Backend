const express = require('express');
const TestResult = require('../models/TestResult');

const router = express.Router();

// Mencatat hasil tes baru
router.post('/', async (req, res) => {
  try {
    const { userId, testId, score, passed } = req.body;
    const newTestResult = new TestResult({ userId, testId, score, passed });
    await newTestResult.save();
    res.status(201).json(newTestResult);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Mengambil semua hasil tes
router.get('/', async (req, res) => {
  try {
    const results = await TestResult.find().populate('userId').populate('testId');
    res.status(200).json(results);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
