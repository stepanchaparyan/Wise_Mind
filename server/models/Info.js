const mongoose = require('mongoose');

const infoSchema = mongoose.Schema({
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

const Info = mongoose.model('info', infoSchema);

module.exports = Info;
