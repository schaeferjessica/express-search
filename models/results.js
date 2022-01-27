const mongoose = require('mongoose')

// results moodel

module.exports = mongoose.model('results', {
  title: {
    type: String,
    required: true
  },
  url: String,
  description: String,
  links: [
    {
      title: String,
      url: String
    }
  ]
})

//MongoDB 7, 8
//GS 11


