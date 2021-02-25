const express = require('express');
const router = express.Router();
const Info = require('../models/Info');

// get all data
router.get('/', async (req, res) => {
  try {
    const info = await Info.find({});
    res.json(info);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
});

module.exports = router;
