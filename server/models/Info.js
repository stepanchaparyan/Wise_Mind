const mongoose = require('mongoose');

const infoSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  parent_title: {
    type: String,
  },
  page: {
    type: String,
    required: true,
  },
  lang: {
    type: String,
    required: true,
  },
  section: {
    type: String,
    required: true,
  },
  parent_section: {
    type: String,
  },
});

const Info = mongoose.model('info', infoSchema);

module.exports = Info;
