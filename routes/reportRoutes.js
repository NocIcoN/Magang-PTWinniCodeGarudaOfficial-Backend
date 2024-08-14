const express = require('express');
const Report = require('../models/Report');

const router = express.Router();

// Membuat laporan baru
router.post('/', async (req, res) => {
  try {
    const { content, createdDate } = req.body;
    const newReport = new Report({ content, createdDate });
    await newReport.save();
    res.status(201).json(newReport);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Mengambil semua laporan
router.get('/', async (req, res) => {
  try {
    const reports = await Report.find();
    res.status(200).json(reports);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
