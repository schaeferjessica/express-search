const mongoose = require('mongoose')

// results module

module.exports = mongoose.model('results', {
  title: String,
  description: String,
  url: String,
  links: [
    {
      title: String,
      url: String,
    },
  ]
});

//GS 11


