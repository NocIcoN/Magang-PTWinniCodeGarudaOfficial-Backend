const express = require('express');
const Test = require('../models/Test');

const router = express.Router();

// Menambahkan tes baru
router.post('/', async (req, res) => {
  try {
    const { testName, description, duration } = req.body;
    const newTest = new Test({ testName, description, duration });
    await newTest.save();
    res.status(201).json(newTest);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Mendapatkan semua tes
router.get('/', async (req, res) => {
  try {
    const tests = await Test.find();
    res.status(200).json(tests);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
