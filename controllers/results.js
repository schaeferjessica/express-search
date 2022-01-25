// import packages
const express = require('express')
const router = express.Router()

// views

router.get('/', (req, res) => {
  let results = [
  {
    title: 'JS tutorials',
    description: 'The best JavaScript tutorials in the galaxy!',
    url: 'https://www.w3schools.com',
    links: [
      {
        title: 'JS for Beginners',
        url: 'https://www.w3schools.com/js'
      }, {
        title: 'JS for the Web',
        url: 'https://www.w3schools.com/js'
      },
    ],
  },
  {
    title: 'JS tutorials',
    description: 'The best JavaScript tutorials in the galaxy!',
    url: 'https://www.w3schools.com',
    links: [
      {
        title: 'JS for Beginners',
        url: 'https://www.w3schools.com/js'
      }, {
        title: 'JS for the Web',
        url: 'https://www.w3schools.com/js'
      },
    ],
  },
  {
    title: 'JS tutorials',
    description: 'The best JavaScript tutorials in the galaxy!',
    url: 'https://www.w3schools.com',
    links: [
      {
        title: 'JS for Beginners',
        url: 'https://www.w3schools.com/js'
      }, {
        title: 'JS for the Web',
        url: 'https://www.w3schools.com/js'
      },
    ],
  }]
  //console.log(req.body.search);
  // funktion results = resultes ..
  // contains the one title == req.body.search [{}]
  res.render('results', {results})
})

// export module
module.exports = router