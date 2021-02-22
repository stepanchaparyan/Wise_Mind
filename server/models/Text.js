const mongoose = require('mongoose');

const textSchema = mongoose.Schema({
  title: {
    type: String,
  },
  text: {
    type: String,
  },
  section: {
    type: String,
    required: true,
  },
  url: {
    type: String,
  },
});

const Text = mongoose.model('text', textSchema);

module.exports = Text;
