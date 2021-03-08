const express = require('express');
const router = express.Router();
const Navbar = require('../models/Navbar');
const Footer = require('../models/Footer');
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
router.get('/en/menus', async (req, res) => {
  try {
    const navbar = await Navbar.find({});
    res.json(navbar);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
});

// get navbar data
router.get('/en/footer', async (req, res) => {
  try {
    const footer = await Footer.find({});
    res.json(footer);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
});

module.exports = router;
