const express = require('express');
const LearningMaterial = require('../models/LearningMaterial');

const router = express.Router();

// Membuat material belajar baru
router.post('/', async (req, res) => {
  try {
    const { title, content } = req.body;
    const newMaterial = new LearningMaterial({ title, content });
    await newMaterial.save();
    res.status(201).json(newMaterial);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Mengambil semua material belajar
router.get('/', async (req, res) => {
  try {
    const materials = await LearningMaterial.find();
    res.status(200).json(materials);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
