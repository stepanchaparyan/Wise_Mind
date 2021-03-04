const express = require('express');
const router = express.Router();
const Info = require('../models/Info');
const Navbar = require('../models/Info');

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

// get navbar data
router.get('/en/home/menus', async (req, res) => {
  try {
    const navbar = await Navbar.find({ section: 'navbar' });
    res.json(navbar);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
});

module.exports = router;
