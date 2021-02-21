const mongoose = require('mongoose');

const textSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
});

const Text = mongoose.model('text', textSchema);

module.exports = Text;
