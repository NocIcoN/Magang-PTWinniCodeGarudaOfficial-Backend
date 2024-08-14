const express = require('express');
const TestSchedule = require('../models/TestSchedule');

const router = express.Router();

// Membuat jadwal tes baru
router.post('/', async (req, res) => {
  try {
    const { testId, date, time } = req.body;
    const newSchedule = new TestSchedule({ testId, date, time });
    await newSchedule.save();
    res.status(201).json(newSchedule);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Mengambil semua jadwal tes
router.get('/', async (req, res) => {
  try {
    const schedules = await TestSchedule.find().populate('testId');
    res.status(200).json(schedules);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
