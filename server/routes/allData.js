const express = require('express');
const router = express.Router();
const Navbar = require('../models/Navbar');
const Hometext = require('../models/Hometext');

// get all data
router.get('/en/home/texts', async (req, res) => {
  try {
    const hometext = await Hometext.find({});
    res.json(hometext);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
});

// get navbar data
router.get('/en/home/menus', async (req, res) => {
  try {
    const navbar = await Navbar.find({});
    res.json(navbar);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
});

module.exports = router;
