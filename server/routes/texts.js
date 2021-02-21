const express = require('express');
const router = express.Router();
const Text = require('../models/Text');

// get all products
router.get('/', async (req, res) => {
  try {
    const texts = await Text.find({});
    res.json(texts);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
});

module.exports = router;
